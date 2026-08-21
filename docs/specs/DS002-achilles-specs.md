---
id: DS002
title: Achilles Specs
status: implemented
owner: repository
summary: Adds AchillesAgentLib dependency resolution, runtime configuration, model-tier, and LLMAgent conventions to a project bootstrap.
---

# Achilles Specs

## Introduction

This specification defines the repository contract for the `achilles-specs` skill.

## Core Content

The skill extends a GAMP bootstrap by authorizing AchillesAgentLib, placing portable dependency and runtime configuration examples inside the skill folder, requiring manual runtime overrides, and routing LLM work through LLMAgent with task metadata.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. Achilles-specific coding rules belong in the consuming project’s DS001-coding-style.md, while the examples remain inside this portable skill folder.

Declared dependencies are `gamp-specs`. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `achilles-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `achilles-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
