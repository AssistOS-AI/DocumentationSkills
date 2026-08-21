---
id: DS003
title: Article Build
status: implemented
owner: repository
summary: Incrementally rebuilds research articles from article-owned plans, chapters, bibliography evidence, and SVG assets.
---

# Article Build

## Introduction

This specification defines the repository contract for the `article-build` skill.

## Core Content

The orchestrator resolves an article root, refreshes generated chapters only when dependencies change, copies and validates declared SVG assets, verifies citation support, renders the final HTML, and writes a build manifest. A second unchanged run is expected to preserve generated outputs.

The repository must retain the artifacts documented on the corresponding HTML skill page and must keep descriptor text, catalog metadata, examples, references, scripts, and outputs synchronized. Plans and bibliography metadata under the article root are authoritative; generated chapters and HTML must not drift from those inputs.

Declared dependencies are not required by the catalog metadata. A consuming project must resolve declared dependencies explicitly and must not infer undeclared runtime coupling.

## Decisions & Questions

### Question #1: What defines the maintenance boundary for this skill?

Response: The complete `article-build` directory is the portable unit, and its descriptor is the operational entry point. Supporting artifacts remain local so their relationship to the contract is inspectable.

## Conclusion

Changes to `article-build` must preserve its declared boundary and update this specification and its HTML documentation together.
