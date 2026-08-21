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

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. The reviewer must preserve compliant content and report only evidenced defects; a later authoring workflow owns all modifications.

Declared dependencies are not required by the catalog metadata. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `review-specs` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `review-specs` must preserve its declared boundary and update this specification and its HTML documentation together.
