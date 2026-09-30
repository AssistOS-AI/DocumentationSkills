# Human report design summary

## Introduction

`human-report` defines the final response to every user prompt, including questions, minor changes, blocked work, and continuations.

## Core Content

The entire final response is enclosed by two identical literal `<<human-report>>` markers on separate lines. Neither marker has a slash. Progress updates and tool calls do not each trigger a report. Related actions share one report.

The report answers the request in the user's language and explains completed work or decisions and their consequences. It states material limits, distinguishes decisions from implementation, and avoids unsupported claims. Necessary details remain inside the markers. Required workflow JSON or routing headings retain their exact structure inside the report, with plain language in human-facing fields.

The skill is an instruction-only, self-contained folder with no executable helper or external dependency.
