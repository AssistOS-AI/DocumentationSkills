---
id: DS004
title: Detect Main Behaviors
status: implemented
owner: repository
summary: Analyzes a project to identify the small evidence-backed set of behaviors that define its primary purpose.
---

# Detect Main Behaviors

## Introduction

This specification defines the repository contract for the `detect-main-behaviors` skill.

## Core Content

The skill traces public entry points, essential workflows, hidden mechanisms with material consequences, and project-specific invariants. It returns a structured handoff for a Main Behavior specification without editing the inspected project.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. Complexity alone does not qualify a behavior. Every accepted behavior must have a user, functional, architectural, or project-defining consequence supported by repository evidence.

Declared dependencies are not required by the catalog metadata. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `detect-main-behaviors` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `detect-main-behaviors` must preserve its declared boundary and update this specification and its HTML documentation together.
