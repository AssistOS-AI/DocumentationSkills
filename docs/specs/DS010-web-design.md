---
title: DS010-web-design
summary: Desktop-first HTML and CSS interface rules for navigation, popups, forms, spacing, layering, responsiveness, and dark mode.
---

# Web Design

## Introduction

This specification records the distributed `web-design` skill's HTML and CSS interface contract.

## Core Content

The skill is desktop-first. It forbids a popup inside a popup and directs the agent to use a separate page or tabs instead. A popup that collects many fields uses a large surface between 80% and 100% of the viewport on both axes. Textareas must be non-resizable. Input width is chosen from the expected content instead of filling the page. Page padding stays moderate, around 40px, unless the user requests a book-like reading page. The visible box layers stay within two or three, and the finished design is re-checked for extra layers before outlines are removed and grouping is shown another way.

When the user also requests a mobile version, the responsive layout is designed and verified at small widths. When the user requests dark mode, both the light and dark themes are implemented and maintained together.

The complete folder contains `SKILL.md` and `DS.md`, with no executable helper or declared dependency. The catalog, HTML page, and design summary must describe the descriptor without inventing a runtime it does not contain.
