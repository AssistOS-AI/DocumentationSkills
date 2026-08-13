# Review Specs Design Summary

## Introduction

The `review-specs` skill is a read-only documentation quality audit. It analyzes a project's `README.md`, `AGENTS.md`, and `docs/` tree before `gamp-specs` performs any edits. Its detailed procedure is split into `references/syntax-and-flow-check.md` and `references/semantics-check.md` so that syntax/navigation rules and content/language rules can be read independently.

## Core Content

The review must inspect syntax, cross-file references, document structure, navigation, diagrams, semantic coverage, terminology, coherence, new-user readability, prose density, section density, abstraction, and clarity. Syntax review covers HTML, Markdown, Mermaid, JSON, JavaScript, CSS, SVG/XML, and other documentation-support files when present. Structural review verifies a high-level home page, primary navigation, a coherent tree of secondary pages, a usable documentation map or reading guide, reachable specifications, and valid links. DS review requires `Introduction`, `Core Content`, and `Conclusion`, with requirements, rationale, limitations, alternatives, and contract boundaries written declaratively in `Core Content`. The syntax-and-flow reference contains concrete examples of malformed HTML, broken specification links, invalid Mermaid, heading jumps, orphan pages, and overloaded home navigation. The semantics reference contains examples of weak high-level descriptions, undefined terms, excessive bullet lists, fragmented sections, abstract wording, and concrete rewrites.

Semantic review starts with the home page, primary pages, and DS pages. It checks that readers can understand why a subject exists, what it contains, and how it behaves; that an HTML page introducing new terminology has a `Definitions` section covering those terms; that pages without new terminology are not required to have that section; that every occurrence of a defined term outside that section links to its stable local or canonical definition anchor; and that useful inline definitions remain intact. It also detects excessive bullets, fragmented headings, abstract actors and actions, decorative vocabulary, contradictions, and unclear transitions.

The review must preserve documentation that is already correct, clear, coherent,
and compliant. It must not propose alternative phrasing, formatting, structure, or
diagrams solely as a stylistic preference. Findings and remediation guidance are
limited to confirmed negative aspects, and each proposed repair must be scoped so
that unaffected content remains unchanged.

The skill returns an English analysis report with evidence, severity, limitations, and ordered remediation guidance for `gamp-specs`. It must not edit any file, regenerate a matrix, update a specification, or produce replacement documentation. `gamp-specs` is solely responsible for applying the recommendations.

## Conclusion

The output of `review-specs` is analysis, not a patch. A later `gamp-specs` run may use that analysis to edit and synchronize the documentation while preserving the final-product documentation policy.
