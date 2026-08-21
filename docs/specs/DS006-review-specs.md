---
id: DS006
title: Review Specs
status: implemented
owner: repository
summary: Performs a read-only structural, syntactic, semantic, navigation, and terminology audit of repository documentation.
---

# Review Specs

## Introduction

This specification defines the repository contract for the `review-specs` skill.

## Core Content

The review starts from onboarding and primary pages, checks the documentation hierarchy and references, evaluates DS contracts, identifies unsupported or unclear claims, and returns evidence-ranked remediation guidance without changing files.

The structural audit must verify that `docs/index.html` contains a Documentation Map after the project overview. It must check for a responsive, column-oriented semantic table in which each real main page is an accessible button-styled link inside a `<th scope="col">` and every non-empty body cell, when present, is one eligible immediate-subpage link beneath its actual parent. In a skill catalog, it must require every per-skill HTML page as a main-page column labeled `<canonical-skill-name> skill`, include the specification entry page once, reject individual DS or specification-file shortcuts, and reject an empty table body when no eligible subpages exist. It must reject rigid per-cell borders or separate cell backgrounds, generic header labels, purpose or order metadata columns, invented hierarchy, false parent-child placement, multiple shortcuts in one cell, placeholder content, and missing or duplicated destinations. It must verify valid targets and concise purpose and recommended-reading prose below the table, then compare the result with header navigation, breadcrumbs, parent-child links, and the specification entry point. The reviewer must follow the stated reading order and report a missing map, false hierarchy, broken or duplicated shortcut, inaccessible interaction, or conceptually invalid sequence as an error.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. The reviewer must preserve compliant content, treat a missing or inconsistent Documentation Map as an error, and report only evidenced defects; a later authoring workflow owns all modifications.

Declared dependencies are not required by the catalog metadata. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `review-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `review-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
