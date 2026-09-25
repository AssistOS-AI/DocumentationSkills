---
title: DS009-summarize-agent-impact
summary: Plain-language summaries of an agent's important decisions and completed work.
---

# Summarize agent impact

## Introduction

This specification defines when an agent uses `summarize-agent-impact` and what its output communicates.

## Core Content

The skill applies when an agent reports an important project decision or work that materially changes behavior, a feature, operation, or another project outcome. Routine tool calls, minor edits, and repeated progress notes do not require a summary. Related actions may be explained in one block.

The agent places a concise explanation in the user's language between two identical literal `<<summarize-agent-impact>>` markers on separate lines. This is a text delimiter, not an HTML tag; the second marker has no slash. The explanation states what was decided or completed, why it matters to the user, and any material limit. It distinguishes decisions from completed implementation, explains necessary technical terms, and omits code-level details and command logs. Technical evidence may appear outside the block.

The distributed skill consists of `SKILL.md` and `DS.md`. It is self-contained and has no executable helper or external dependency.
