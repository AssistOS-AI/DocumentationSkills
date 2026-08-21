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

Unless the target project has an explicitly documented small-scope exception, the structural audit must verify that `docs/index.html` contains a Documentation Map after the project overview. It must check for one responsive, column-oriented semantic table whose headings exactly match the primary header's top-level submenu buttons in text and order. Each column must reproduce that submenu's destinations in order with identical labels and targets, and every non-empty cell must contain one valid link followed immediately by a concise, evidence-backed description of the page. Every header destination must appear exactly once and no extra page or expanded specification file may appear. The audit must report missing, extra, duplicated, reordered, relabeled, retargeted, broken, or undescribed entries; non-empty surplus cells; rigid spreadsheet borders; generic metadata columns; placeholder content; and a reading flow that contradicts the header navigation or introduces concepts in an invalid sequence.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. The reviewer must preserve compliant content, treat a missing or inconsistent Documentation Map as an error, and report only evidenced defects; a later authoring workflow owns all modifications.

Declared dependencies are not required by the catalog metadata. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `review-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `review-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
