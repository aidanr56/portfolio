---
title: Digital Education Game - AI Concepts
tags: ["JavaScript", "AI Ethics", "Gamification", "Conversational Learning"]
githubUrl: "https://github.com/aidanr56/aidanr56.github.io/tree/main"
liveUrl: "https://aidanr56.github.io"
imageUrl: "/images/Senior-Dissertation-Image.png"
---

## Overview

This project is a single-player, browser-based education game I designed and built from scratch as the centrepiece of my undergraduate senior thesis at University College Cork. The game was built with a team of four, with myself as the core developer and my focus on AI ethics. The game takes players on an explorable island adventure where they meet characters who teach them about AI literacy, explainable AI, and the ethics of AI through dynamic, choice-driven conversations. Rather than passively reading about these issues, players actively engage with them — making decisions and receiving tailored feedback in real time.

## The Problem

AI ethics is a growing and critically important field, yet public understanding of it remains limited, and pedagogical approaches to its teaching are largely unexplored. Most existing education tools are either text-heavy documents or classroom-based group activities. There was a clear gap for something that could engage an individual learner on their own, while still delivering meaningful educational content and fostering critical thinking.

## What I Built

The game is a 2D top-down RPG-style web app inspired by Pokémon, built entirely for desktop browsers. The player controls a character sprite that can freely explore a custom-designed island map. Scattered across the island are a number of non-playable characters (NPCs), each specialising in a different AI ethics topic. When a player approaches an NPC, they can initiate a text-based dialogue interaction through a multiple-choice system.

The core mechanic works like this: the NPC presents an ethical scenario or concept, then asks the player a question. The player picks from several response options, and NPCs have variable dialogue dependent on player choices. This allows players to freely explore their own ideas on the subject while receiving feedback and new perspectives to deepen their understanding — creating a conversational feedback loop that pushes players to genuinely reflect rather than just read.

An XP system tracks performance across three subject areas — **AI Ethics**, **Explainable AI**, and **Data Literacy** — displayed as progress bars in the corner of the screen.

## Technical Details

**Language & Framework:** JavaScript (ES6) with the PixiJS framework. PixiJS was chosen specifically for its strengths in 2D web rendering, sprite management, and handling user input — it greatly simplified building the game window, the map, and the interactive elements.

**Module Architecture:** The game is built around JavaScript's module system. Each major system — the NPC logic, the interaction/dialogue display, and the app window state — lives in its own module file (`NPC.js`, `interaction.js`, `AppInfo.js`). These are imported into a central `main.js` file that orchestrates the game loop.

**Bundling:** Webpack was used to bundle and compile all JS modules and their dependencies into a single output file. This reduced the number of server requests on page load and significantly improved load times.

**Map & Movement:** The island map was custom designed. Player movement is achieved by translating the map behind a stationary player sprite, creating a smooth illusion of exploration. NPCs are anchored to fixed map coordinates and move with the map. Euclidean distance calculations detect when a player is close enough to trigger an interaction prompt. Invisible bounding boxes define the walkable areas of the game, preventing players from walking off the map or through trees and houses.

**Dialogue System:** Each NPC has its own script file containing all dialogue text and branching response options. `NPC.js` extracts and renders the appropriate dialogue based on player choices. The `interaction.js` module handles the dialogue text box — dynamically sizing and positioning it based on the user's window dimensions, and paginating long text into sections the player can scroll through.

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
