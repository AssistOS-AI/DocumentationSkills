# Review Specs Design Summary

## Introduction

The `review-specs` skill is a read-only documentation quality audit. It analyzes a project's `README.md`, `AGENTS.md`, and `docs/` tree before `gamp-specs` performs any edits. Its detailed procedure is split into `references/syntax-and-flow-check.md` and `references/semantics-check.md` so that syntax/navigation rules and content/language rules can be read independently.

## Core Content

The review must inspect syntax, cross-file references, document structure, navigation, diagrams, semantic coverage, terminology, coherence, new-user readability, prose density, section density, abstraction, and clarity. It must treat documentation-generation and documentation-review skills as internal authoring tools and report any persistent project-documentation mention that exposes their use or presents an authoring-only skill as product content. A documentation-related skill remains a valid subject only when the target repository implements, distributes, or exposes it as product functionality, while authoring provenance remains prohibited. Syntax review covers HTML, Markdown, Mermaid, JSON, JavaScript, CSS, SVG/XML, and other documentation-support files when present. It reports documentation or DS prose that is hard-wrapped in source, forced to wrap early, or prevented from using the full available width of its own containing box; natural wrapping is permitted only at the box boundary. Structural review verifies a high-level home page, a mandatory header navigation system in which every top-level control is a submenu button and every destination appears inside exactly one subject-based submenu, a coherent tree of secondary pages, a usable documentation map or reading guide, reachable specifications, and valid links. Direct top-level header links, missing or empty submenus, and destinations outside submenus are errors. Terminology review requires `docs/wiki.html` as the single canonical definition page, rejects local `Definitions` sections, verifies stable wiki anchors and exact incoming links, and reports shallow entries that fail to explain a term's meaning, purpose, users or owners, behavior, relationships, and confirmed boundaries or limitations. DS review requires `Introduction`, `Core Content`, and `Conclusion`, permits exactly `title` and `summary` frontmatter, requires `title` to equal the filename stem, and reports separate `ID`, `Status`, or `Owner` fields, sections, labels, badges, and metadata blocks for deletion. Requirements, rationale, limitations, alternatives, and contract boundaries remain declarative in `Core Content`. The syntax-and-flow reference contains concrete examples of malformed HTML, broken specification links, invalid Mermaid, heading jumps, orphan pages, and overloaded home navigation. The semantics reference contains examples of weak high-level descriptions, undefined terms, excessive bullet lists, fragmented sections, abstract wording, and concrete rewrites.

Semantic review starts with the home page, primary pages, the canonical wiki, and DS pages. It checks that readers can understand why a subject exists, what it contains, and how it behaves; that every project-specific term has one detailed wiki entry; that eligible occurrences link to the exact canonical anchor; that ordinary pages contain no local `Definitions` section; and that useful inline context remains intact without competing with the wiki. It also detects excessive bullets, fragmented headings, abstract actors and actions, decorative vocabulary, contradictions, and unclear transitions.

The review must preserve documentation that is already correct, clear, coherent,
and compliant. It must not propose alternative phrasing, formatting, structure, or
diagrams solely as a stylistic preference. Findings and remediation guidance are
limited to confirmed negative aspects, and each proposed repair must be scoped so
that unaffected content remains unchanged.

The skill returns an English analysis report with evidence, severity, limitations, and ordered remediation guidance for `gamp-specs`. It must not edit any file, regenerate a matrix, update a specification, or produce replacement documentation. `gamp-specs` is solely responsible for applying the recommendations.

## Conclusion

The output of `review-specs` is analysis, not a patch. A later `gamp-specs` run may use that analysis to edit and synchronize the documentation while preserving the final-product documentation policy.
