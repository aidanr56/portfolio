---
title: Machine Translation Evaluator and Training Tool
tags: ["TensorFlow", "NLP", "Python", "Machine Translation", "Neural Networks"]
imageUrl: "/images/Machine-Translation-Tool-Image.png"
---

> **Note:** This project was developed as an internal tool during my internship at Johnson Controls. In accordance with my non-disclosure agreement, source code, screenshots, and certain implementation details are omitted from this write-up.

## Overview

During my internship at Johnson Controls I was part of the Translation Center of Excellence, a small specialised team building custom Machine Translation (MT) engines for use across internal Business Units. I ideated and developed a suite of AI-powered tools designed to address two of the most significant open challenges in the MT field: evaluating translation quality, and building effective models for languages where training data is scarce. The result was a unified internal web application, built with Python and Flask, with initial deployment as an Azure Function App.

## The Problems

Machine translation sits at the intersection of linguistics and machine learning, and two problems in particular are well-documented across both academic research and industry practice.

### 1. Translation Quality Evaluation

Assessing the quality of a machine-translated output is a genuinely hard problem. Traditional metrics like BLEU score have well-known limitations: they rely on surface-level comparisons to reference translations and often fail to capture meaning. For an enterprise deploying MT at scale, having a reliable and automated way to evaluate output quality is critical for maintaining trust in the system and knowing when a model needs improvement.

### 2. Low-Resource Languages

Building effective MT models requires large volumes of high-quality bilingual training data. For widely-spoken languages like Spanish or French, this data is abundant. But many of the languages relevant to a global company like Johnson Controls are low-resource — meaning parallel corpora are limited, making it difficult to train models that perform well. This is a known and active area of research with no simple solution.

## What I Built

I designed and developed a tool with three core components, each targeting one of the above challenges, brought together in a single Flask web application.

### Component 1 — Translation Quality Evaluator

To evaluate the semantic quality of a machine-translated sentence, I implemented a multilingual vectorization pipeline. The core idea is that a good translation should preserve the meaning of the source sentence, and with accurate quantification of language meaning can be measured geometrically. By embedding both the source and translated sentences into a shared high-dimensional semantic space using multilingual vectorization models, I could calculate the distance between them as a proxy for translation quality. A shorter distance indicates the sentences are semantically similar, suggesting a higher-quality translation.

To increase confidence in the scores, I used multiple vectorization techniques and cross-referenced their outputs against each other, allowing the tool to flag disagreements and provide a more robust quality signal. I also explored back-translation as a quality signal for languages that lacked strong multilingual embedding support — however, this approach was found to have limited practical use due to high computational cost and open questions around its reliability as an accuracy measure.

### Component 2 — Training Data Quality Evaluator

The quality of a custom MT engine is only as good as the data it was trained on. To address this, I built a custom Neural Network using TensorFlow that assessed the quality of bilingual training data on a sentence-by-sentence basis. Rather than evaluating an entire corpus in aggregate, the model could flag individual sentence pairs that were likely to introduce noise into training — giving the team a targeted way to clean datasets before use.

### Component 3 — Synthetic Training Data Generator

For low-resource languages where quality training data simply does not exist in sufficient quantity, I developed a solution using a customised GPT model to synthesise new training data. By generating plausible bilingual sentence pairs, the tool could augment an existing small dataset and help bootstrap model training in languages that would otherwise be out of reach.

## Challenges

Evaluating translation quality is an unsolved problem. Even state-of-the-art metrics are contested in the research literature, and no single approach is universally reliable. A significant part of this project involved reviewing the academic and industry landscape to understand the trade-offs between different evaluation methods before deciding on a semantic similarity approach. Choosing to corroborate multiple vectorization techniques was a direct response to this uncertainty.

Back-translation, while theoretically appealing as a quality signal for low-resource languages, proved impractical at scale. The computational cost of translating output back into the source language for every sentence in a dataset was prohibitive, and the method's reliability as a proxy for translation quality is questionable — a translated-and-back-translated sentence may read naturally in the source language while still being a poor translation of the original meaning.

## Key Takeaways

This project was my first experience building AI tooling in a professional enterprise context, and it shaped how I think about applied ML work. Research-ready ideas do not always translate cleanly into production-viable tools — constraints like computational cost, data availability, and organisational infrastructure all push back on what's theoretically possible. Learning to navigate those constraints, make defensible technical trade-offs, and deliver something genuinely useful within an internship timeline was as valuable as any individual technical skill I developed.

## Tech Stack

- **Language:** Python
- **Web Framework:** Flask
- **ML / DL:** TensorFlow, multilingual sentence embedding models, GPT-based generation
- **Deployment:** Flask web app; Azure Function App
