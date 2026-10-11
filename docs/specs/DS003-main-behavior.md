---
title: DS003-main-behavior
summary: Defines complete skill distribution, evidence-based documentation, and incremental research articles.
---

## Introduction

DocumentationSkills gives consuming agents portable instructions and tools for documentation and technical work.

## Core Content

### Main Behavior Components

| Name | Explanation |
| --- | --- |
| Complete skill distribution | Consumers copy a skill together with its local references, scripts, examples, and assets. |
| Evidence-based documentation and review | Authoring and read-only review have distinct responsibilities grounded in project evidence. |
| Incremental research articles | Article inputs and their dependencies determine which generated outputs are rebuilt. |

### Complete skill distribution

A consuming agent selects a [skill bundle](wiki.html#definition-skill-bundle) by its description and reads its descriptor. The copied folder must retain every locally referenced artifact. Node coding guidance, prose editing, web design, and reporting remain instruction contracts; copying them alone does not configure a runner. Consumers must preserve the owning skill's dependency records and resources.

### Evidence-based documentation and review

The [gamp-specs](wiki.html#definition-gamp-specs) workflow grounds documentation in source, repository guidance, and accepted main behaviors. [review-specs](wiki.html#definition-review-specs) reads the resulting documents and returns evidenced findings without editing files. Specifications define requirements and boundaries; HTML pages explain the same product for readers. Review must preserve correct content and distinguish confirmed behavior from an unspecified contract.

### Incremental research articles

The [article-build](wiki.html#definition-article-build) implementation resolves an article root, plans, bibliography evidence, chapters, and declared assets. Its local modules decide which outputs need refresh, verify citations and SVG assets, render HTML, and retain a build manifest. An unchanged dependency set should preserve generated outputs; invalid input evidence must not become a supported citation claim.
