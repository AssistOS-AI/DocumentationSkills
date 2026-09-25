# Summarize agent impact design summary

## Introduction

`summarize-agent-impact` helps an agent explain consequential decisions and completed work to readers who do not know the project's internals.

## Core Content

The agent adds a short, plain-language block delimited by the same literal `<<summarize-agent-impact>>` marker before and after the text. The marker is not an HTML tag and has no slash-prefixed closing form. Related actions are combined into one block. Routine steps and minor edits do not trigger it. The summary covers the decision or changed behavior and its user-facing consequence, with material limits where needed. It distinguishes completed work from an unimplemented decision and keeps code-level detail outside the block.

The skill is an instruction-only, self-contained folder with no executable helper or external dependency. Its descriptor defines the output format and invocation boundary.
