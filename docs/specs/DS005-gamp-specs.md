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

Unless a target project has an explicitly documented small-scope exception, every generated `docs/index.html` must contain a Documentation Map after the project overview. The map must be one responsive, column-oriented semantic table that mirrors the primary header navigation exactly. Each `<th scope="col">` must use the exact text and order of one top-level submenu button. The cells beneath it must reproduce that submenu's destinations in the same order with identical labels and targets, and every non-empty cell must place a concise, evidence-backed description of the linked page directly below its single link. Every header destination must appear exactly once, no extra page or expanded specification file may appear, and surplus alignment cells must remain empty and non-interactive. The presentation must use whitespace and restrained entry surfaces instead of a rigid spreadsheet grid, and prose below the table must explain a reading flow using actual header-group and page names.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. DS specifications remain the authoritative contract, DS numbering remains contiguous, substantive behavior changes update both explanatory HTML and specifications, and the Documentation Map remains synchronized with the actual page hierarchy.

Declared dependencies are `detect-main-behaviors`. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `gamp-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `gamp-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
