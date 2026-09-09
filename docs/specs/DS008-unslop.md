---
title: DS008-unslop
summary: Prose editing that removes formulaic AI writing patterns while preserving meaning and the intended tone.
---

# Unslop

## Introduction

This specification records the distributed `unslop` skill's prose-editing contract.

## Core Content

The skill scans for formulaic content, vocabulary, punctuation, communication artifacts, filler, jargon, and unnecessarily complex phrasing. It directs the agent to revise those patterns, preserve meaning and intended tone, and review the resulting voice. The descriptor's `disable-model-invocation: true` flag must remain intact; invocation behavior belongs to the consuming environment.

The complete folder contains `SKILL.md`, `DS.md`, and `skill.json`, with no executable helper or declared dependency. The catalog, HTML page, and design summary must describe the descriptor without changing its editing rules or claiming a runtime it does not contain.

## Decisions & Questions

### Question #1: Why does this skill appear in the catalog?

Response: The repository distributes its descriptor, so the catalog must expose and document the complete folder alongside the other product skills.
