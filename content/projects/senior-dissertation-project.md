---
title: Digital Education Game - AI Concepts
tags: ["JavaScript", "AI Ethics", "Gamification", "Conversational Learning"]
githubUrl: "https://github.com/aidanr56/aidanr56.github.io/tree/main"
liveUrl: "https://aidanr56.github.io"
imageUrl: "/images/Senior-Dissertation-Image.png"
skills:
  - name: Research through Design (RtD)
    blurb: Treating the design process itself as a way of understanding a problem space.
    summary: >-
      A key aspect of this project is the application of RtD as a research
      approach (a concept first proposed by Christopher Frayling). A
      core idea of this is that the outcome of a study is not necessarily the
      product, but the knowledge. It illustrates the idea that design is a form of
      research, in and of itself, and that through the process of design we can
      learn and understand a problem space.
  - name: Web Development
    blurb: My first large JavaScript project, from module bundling to deployment.
    summary: >-
      This project, at the time, was the most complex web development task I had
      approached. I had to learn a huge amount of JavaScript, I was previously
      more familiar with Python, and began to understand some of the more complex
      logistics of deploying a project online, such as bundling and compiling JS
      modules. See the “Technical Details” section below for more information.
  - name: User Evaluation and Iteration
    blurb: Combining interviews and surveys to test an idea against real users.
    summary: >-
      A requirement for this project was that we not only build a working
      prototype of our idea, but that we actually use that to work with potential
      users to test our idea: are digital education games a useful pedagogy for AI
      education? We decided on a combination of qualitative and quantitative data,
      from interviews and surveys respectively. This provided us not only with the
      statistical data to answer the question of its usefulness, but also taught me
      to read qualitative data to find design flaws in the user experience.
---

## Overview

This project is a single-player, web-based education game I designed and built from scratch as the centrepiece of my undergraduate senior thesis at University College Cork. The entire project was completed as a team of four people, but we each had our own focus and wrote independent thesis. For those interested in this project, I highly recommend reading at least the introduction section of [my thesis](/papers/Senior%20Thesis.pdf), as it will provide a far more detailed explanation of the reasoning behind the work and the methodology applied. Below is a quote from the beginning of the “Methods” section, from my thesis, to better explain this project's objectives.

> “This study had two objectives: explore the potential of gamification as a pedagogy in teaching AI ethics, and evaluate [Research through Design (RtD)] as a methodology in AI ethics education research. This paper is part of a larger research project, consisting of four studies, that aims to evaluate gamification as a pedagogy for fostering AI literacy. The four studies were divided between development and evaluation, with two studies focused on each. This present paper falls into the former category, and applies a RtD approach to the development of a digital education game. This game was designed to teach players about ethics of AI, explainable AI, and data literacy; however, this paper is focused specifically on ethics of AI. The theoretical framework behind this paper is that by applying a RtD approach to the development of a digital education game that teaches AI ethics, the developers would be able to learn about the intricacies of the problem space, and gain valuable information regarding how gamification could be used to teach AI ethics. Since there is currently minimal research on the use of RtD in the field of AI ethics education this paper also provides a reflective evaluation on the implications of using this methodology.”

## What I Built

The game is a 2D top-down RPG-style web app inspired by Pokémon, built entirely for desktop browsers. The player controls a character sprite that can freely explore a custom-designed island map. Scattered across the island are a number of non-playable characters (NPCs), each specialising in a different AI ethics topic. When a player approaches an NPC, they can initiate a text-based dialogue interaction through a multiple-choice system.

The core mechanic works like this: the NPC presents an ethical scenario or concept, then asks the player a question. The player picks from several response options, and the NPC's have variable dialogue dependent on player choices. This allows players to freely explore their own ideas on the subject, while receiving feedback and new perspectives to deepen their understanding. This creates a conversational feedback loop that pushes players to genuinely reflect rather than just read. An XP (experience points) system tracks performance across three subject areas, AI Ethics, Explainable AI, and Data Literacy, displayed as progress bars in the corner of the screen.


An XP system tracks performance across three subject areas — **AI Ethics**, **Explainable AI**, and **Data Literacy** — displayed as progress bars in the corner of the screen.

## Technical Details

**Language & Framework:** JavaScript (ES6) with the PixiJS framework. PixiJS was chosen specifically for its strengths in 2D web rendering, sprite management, and handling user input. It greatly simplified building the game window, the map, and the interactive elements.

**Module Architecture:** The game is built around JavaScript's module system. Each major system, the NPC logic, the interaction/dialogue display, and the app window state, lives in its own module file (NPC.js, interaction.js, AppInfo.js). These are imported into a central main.js file that handles the actual game loop.

**Bundling:** Webpack was used to bundle and compile all JS modules and their dependencies into a single output file. This reduced the number of server requests on page load and significantly improved load times.

**Map & Movement:** The island map was custom designed. Player movement is achieved by moving the map behind a stationary player sprite, creating a smooth illusion of “movement”. NPCs are anchored to fixed map coordinates and move with the map. Euclidean distance calculations detect when a player is close enough to trigger an interaction prompt. Invisible bounding boxes are used to define the walkable areas of the game, and prevent players from walking off the map or through trees and houses (the collision system proved to be surprisingly challenging).

**Dialogue System:** Each NPC has its own script file containing all dialogue text and branching response options. `NPC.js` extracts and renders the appropriate dialogue based on player choices. The `interaction.js` module handles the dialogue text box by dynamically sizing and positioning it based on the user's window dimensions, and paginating long text into sections the player can scroll through.

**Hosting:** The game is deployed as a static site via GitHub Pages.

## Results & Impact

The game was formally evaluated as part of a larger four-study research project. Two key findings stood out.

First, qualitative interviews with five undergraduate students found that all five preferred the game over reading a document, and described it as engaging, motivating, and effective at prompting critical thinking about AI ethics.

Second, a quantitative A/B study (N=62) using a validated AI literacy test found that players showed a **statistically significant improvement** in their scores after playing the game (average increase of ~9 percentage points, p < 0.01). While the game performed comparably to text-based learning on raw score gains, the qualitative data strongly favoured it on engagement and motivation — suggesting its real advantage lies in keeping people in the learning experience long enough for it to work.

The research concluded that combining gamification and conversational learning is a promising approach to AI ethics education, and that this appears to be the **first study to explore that combination** in this specific context.

## Tech Stack

- **Framework:** PixiJS
- **Language:** JavaScript (ES6)
- **Bundler:** Webpack
- **Hosting:** GitHub Pages
