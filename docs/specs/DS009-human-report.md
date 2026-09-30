---
title: DS009-human-report
summary: Plain-language final responses to every user prompt, enclosed in human-report markers.
---

# Human report

## Introduction

This specification defines when an agent uses `human-report` and what its output communicates.

## Core Content

Every user prompt requires a final report, including questions, routine changes, blocked work, and continuations. Intermediate progress and tool calls do not each require one. Related actions share one report.

The entire final response appears between two identical literal `<<human-report>>` markers on separate lines. The second marker has no slash. The report answers the request in the user's language, describes completed work or decisions and their consequences, and states material limits. It distinguishes decisions from implementation, explains necessary technical terms, and avoids unsupported claims. Necessary details remain inside the markers.

Required workflow JSON or routing headings retain their exact structure inside the markers. Human-facing fields follow the plain-language rules without adding prose that would invalidate the payload.

The distributed skill consists of `SKILL.md` and `DS.md`. It is self-contained and has no executable helper or external dependency.
