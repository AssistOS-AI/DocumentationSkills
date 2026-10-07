# Human report design summary

## Introduction

`human-report` defines the final response to every user prompt, including questions, minor changes, blocked work, and continuations.

## Core Content

One final response contains exactly one report enclosed by two identical literal `<<human-report>>` markers on separate lines. Neither marker has a slash. Progress updates and tool calls do not each trigger a report. Related actions share one report. The markers must not be repeated in progress messages, formatting explanations or draft examples.

The report answers the request in the user's language and explains completed work or decisions and their consequences. It states material limits, distinguishes decisions from implementation, and avoids unsupported claims. Necessary human-facing details remain inside the markers.

For ordinary chat and tasks without an explicit machine-readable output contract, the report is the entire final response. When the caller explicitly requires workflow routing, child delegation or graph generation, the plain-language report comes first and the technical Markdown or JSON payload follows the closing marker in the same final response. Control fields stay outside the report. An optional message field must not duplicate the report. The caller chooses the contract; the robot does not infer it from its name.

The skill is an instruction-only, self-contained folder with no executable helper or external dependency.
