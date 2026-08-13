---
name: review-specs
description: Perform a read-only syntax, documentation-flow, navigation, and semantic review of README.md, AGENTS.md, and a project's docs tree, then return an evidence-based analysis with remediation guidance for gamp-specs. Never edit files or generate replacement documentation.
---

# Review Specs

## Purpose and boundary

Use this skill before `gamp-specs` edits documentation. It produces one English analysis report in the assistant response. It must not create, delete, rename, format, regenerate, or modify any repository file. `gamp-specs` alone applies the recommendations.

The review is read-only and evidence-based. Inspect the actual files, read pages in user-facing order, cite paths and headings or line numbers, separate confirmed defects from recommendations, and report tool limitations honestly.

## Preservation rule

Preserve documentation that is already correct, clear, coherent, and compliant. Do
not recommend replacing, restructuring, reformatting, or rephrasing sound content
merely because another wording or presentation is possible. Focus findings and
remediation guidance only on confirmed negative aspects that affect correctness,
comprehension, navigation, consistency, accessibility, or documented repository
rules. Leave unaffected text and structure unchanged.

## Required references

Read both references before performing the review:

- [`references/syntax-and-flow-check.md`](references/syntax-and-flow-check.md) defines file-format checks, link validation, diagrams, documentation structure, navigation, and reading-flow analysis.
- [`references/semantics-check.md`](references/semantics-check.md) defines why/what/how coverage, terminology, new-user comprehension, prose quality, abstraction, section density, and detailed examples.

## Review sequence

1. Establish the review surface: `README.md`, `AGENTS.md`, every relevant file under `docs/`, all linked DS files, loaders, partials, assets, and documentation-support code.
2. Follow `syntax-and-flow-check.md` completely. Syntax and cross-file flow checks precede semantic interpretation.
3. Follow `semantics-check.md` completely. Read the home page, primary pages, and specifications from beginning to end as a new user.
4. Produce the report in the required order below. Do not apply any remediation during the review.

## Report format

Return only the analysis report in the response, using these sections:

1. **Review scope and method** — inspected paths, checks run, and limitations.
2. **Executive assessment** — strongest qualities and highest-impact risks.
3. **Syntax findings** — grouped by file; each finding has `error`, `warning`, or `recommendation` severity and concrete evidence.
4. **Structure and navigation findings** — home page, primary/secondary hierarchy, reading guide, reachability, diagrams, and links.
5. **Semantic findings** — why/what/how, `Definitions` coverage and links, terminology, new-user readability, coherence, contradictions, and diagram meaning.
6. **Language and information-design findings** — bullets, section density, abstraction, vocabulary, and clarity.
7. **Remediation guidance for gamp-specs** — ordered changes another run of `gamp-specs` should make.

If a category passes, state what was checked and that no issue was found. Every finding should include a path and, when practical, a heading, line number, or short identifying excerpt. Recommendations must describe the repair direction without editing the file.

## Non-negotiable constraints

- Never edit documentation, specifications, source code, navigation, or generated assets.
- Never run a formatter, generator, repair command, or test that writes into the repository.
- Never claim a checker passed unless it actually ran; distinguish static inspection from tool-backed validation.
- Do not turn an intentionally open product contract into a defect. Report it as an ambiguity and recommend a declarative DS statement that separates confirmed behavior from the boundary that remains unspecified.
- Never propose cosmetic rewrites, stylistic substitutions, or broad document
  regeneration for content that already meets the applicable requirements.
- Keep the report in English unless the user explicitly requests another language.
