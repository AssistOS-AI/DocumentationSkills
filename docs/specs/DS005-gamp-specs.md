---
id: DS005
title: GAMP Specs
status: implemented
owner: repository
summary: Creates and synchronizes repository onboarding, agent guidance, HTML documentation, and design specifications.
---

# GAMP Specs

## Introduction

This specification defines the repository contract for the `gamp-specs` skill.

## Core Content

The skill discovers implementation and guidance, incorporates a main-behavior analysis, builds a contiguous DS set, creates navigable HTML documentation, synchronizes the skill catalog, and verifies documentation links and static-site behavior.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. DS specifications remain the authoritative contract, DS numbering remains contiguous, and substantive behavior changes update both explanatory HTML and specifications.

Declared dependencies are `detect-main-behaviors`. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `gamp-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `gamp-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
