---
title: DS009-human-report
summary: Plain-language reports for every user prompt, with explicit workflow payloads outside the report in the same final response.
---

# Human report

## Introduction

This specification defines when an agent uses `human-report` and what its output communicates.

## Core Content

Every user prompt requires a final report, including questions, routine changes, blocked work, and continuations. Intermediate progress and tool calls do not each require one. Related actions share one report.

One final response contains exactly one report between two identical literal `<<human-report>>` markers on separate lines. The second marker has no slash. The markers must not be repeated in progress messages, formatting explanations or draft examples. The report answers the request in the user's language, describes completed work or decisions and their consequences, and states material limits. It distinguishes decisions from implementation, explains necessary technical terms, and avoids unsupported claims. Necessary human-facing details remain inside the markers.

For ordinary chat and tasks without an explicit machine-readable output contract, the report is the entire final response. When the caller explicitly requires workflow execution, routing, child delegation or graph generation, the plain-language report comes first and the technical Markdown or JSON payload follows the closing marker in the same final response. Control fields stay outside the report. There is no separate intermediate report or second final answer. A workflow nextNodePrompt field contains a concise, self-contained technical handoff. Human reports are user-only and are not passed to other robots; the technical payload must include the context needed to continue. The caller chooses the contract; the robot does not infer it from its name.

Consumers may store the complete final response for debugging, extract the report for display, and parse the technical payload separately. Separating these views must not erase the original output or discard human findings needed by later tasks.

The distributed skill consists of `SKILL.md` and `DS.md`. It is self-contained and has no executable helper or external dependency.
