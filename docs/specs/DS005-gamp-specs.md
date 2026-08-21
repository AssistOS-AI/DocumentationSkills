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

Every generated `docs/index.html` must contain a Documentation Map after the project overview. The map must be a responsive, column-oriented table in which every main documentation page or subject area appears as a real button-styled link inside a `<th scope="col">`, and every eligible immediate subpage appears as one real button-styled link in a body cell beneath its actual parent. The hierarchy must reflect real page ownership rather than broad thematic grouping. In a skill catalog, every per-skill HTML page must be a main-page column labeled `<canonical-skill-name> skill`; the specification matrix or entry page must appear once as a main page, individual DS and specification files must be omitted, and the table body must be absent when no eligible subpages remain. The semantic table must not look like a rigid spreadsheet: it must replace per-cell borders and separate cell backgrounds with whitespace, alignment, a restrained shared surface, and subtle shortcut styling. The table must have no generic header labels and no purpose or recommended-order metadata columns. Concise prose below the table must explain the main areas' purposes and a reading flow that agrees with the header hierarchy, breadcrumbs, parent-child links, and specification entry point.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. DS specifications remain the authoritative contract, DS numbering remains contiguous, substantive behavior changes update both explanatory HTML and specifications, and the Documentation Map remains synchronized with the actual page hierarchy.

Declared dependencies are `detect-main-behaviors`. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `gamp-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `gamp-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
