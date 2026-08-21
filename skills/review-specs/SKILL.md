---
name: review-specs
description: Perform a read-only syntax, documentation-flow, navigation, and semantic review of README.md, AGENTS.md, and a project's docs tree, then return an evidence-based analysis with remediation guidance for gamp-specs. Never edit files or generate replacement documentation.
---

# Review Specs

## Purpose and boundary

Use this skill before `gamp-specs` edits documentation. It produces one English analysis report in the assistant response. It must not create, delete, rename, format, regenerate, or modify any repository file. `gamp-specs` alone applies the recommendations.

The review is read-only and evidence-based. Inspect the actual files, read pages in user-facing order, cite paths and headings or line numbers, separate confirmed defects from recommendations, and report tool limitations honestly.

Treat documentation-generation and documentation-review skills as internal authoring tools. Their use has no place in the project's persistent documentation. Flag any mention that says or implies that `README.md`, `AGENTS.md`, HTML pages, DS files, matrices, comments, captions, footers, navigation, or other project documentation was generated, structured, reviewed, validated, or repaired by `gamp-specs`, `review-specs`, or an equivalent documentation skill. Also flag pages, sections, dependencies, glossary entries, badges, credits, or navigation items added for such a skill solely because it was used during authoring. A skill is a legitimate documentation subject only when the target repository implements, distributes, or exposes it as part of the product; even then, authoring provenance remains prohibited.

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
4. Inspect every `DSxxx-*.md` file for its frontmatter contract. It must contain exactly `title` and `summary`, and `title` must equal the exact filename stem. Report a separate `id`, `status`, `owner`, or any other field, plus any `Status` or `Owner` heading, section, label, badge, metadata block, or standalone value. Direct `gamp-specs` to remove unsupported metadata without relocation.
5. Inspect documentation and DS source prose for hard wrapping, manual line breaks, and newline-preserving presentation. Verify that HTML documentation and rendered DS text use the full available width of their own containing boxes and wrap naturally only at the box boundary; report narrow fixed widths, centered `max-width` constraints, oversized padding, fixed label widths, and equivalent early-wrap causes.
6. Verify that `docs/wiki.html` is the single canonical terminology page, every project-specific term has one detailed entry with a stable anchor, and eligible occurrences in documentation and DS content link to that exact anchor. Report every page-local `Definitions` section for consolidation into the wiki.
7. Verify that every top-level header control is a submenu button, every button owns a non-empty submenu, and every documentation destination appears inside exactly one subject-based submenu. Report direct top-level header links, destinations outside submenus, missing submenus, and inconsistent submenu structures.
8. Verify that `docs/index.html` contains a required `Documentation Map` after the project overview. Confirm that it is a responsive, column-oriented semantic table without a rigid spreadsheet-style grid: every main page appears exactly once as a button-styled link inside a `<th scope="col">`, and every eligible immediate subpage appears exactly once in a non-empty body cell beneath its real parent. In a skill catalog, require every per-skill HTML page to be a main-page column labeled `<canonical-skill-name> skill`; require the specification entry page as one main-page column and reject individual DS or specification-file shortcuts. When no eligible subpages exist, require the table body to be absent. Report invented hierarchy, generic header labels, purpose or order metadata columns, visible boxes or strong borders around every table cell, misplaced children, multiple shortcuts in one cell, placeholder content, or non-empty cells that are not linked. Permit visually empty, non-interactive cells only where real columns have different eligible child counts.
9. Follow the reading order expressed by the Documentation Map and compare it with the actual page hierarchy, header submenus, breadcrumbs, parent-child links, and specification entry point. Report missing pages, duplicated shortcuts, broken targets, misleading parent-child relationships, and sequences that require concepts before they are introduced.
10. Search the entire review surface for internal documentation-skill names and authoring-provenance language. Distinguish product functionality from tools used only to author the documentation.
11. Produce the report in the required order below. Do not apply any remediation during the review.

## Report format

Return only the analysis report in the response, using these sections:

1. **Review scope and method** — inspected paths, checks run, and limitations.
2. **Executive assessment** — strongest qualities and highest-impact risks.
3. **Syntax findings** — grouped by file; each finding has `error`, `warning`, or `recommendation` severity and concrete evidence.
4. **Structure and navigation findings** — home page, required Documentation Map table, primary/secondary hierarchy, shortcut coverage, recommended reading order, reachability, diagrams, and links.
5. **Semantic findings** — why/what/how, wiki coverage and links, terminology, new-user readability, coherence, contradictions, and diagram meaning.
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
- Never approve or recommend retaining a reference to a documentation skill solely because it was used to create or review the documentation. Report that reference as prohibited internal-tool leakage and direct the remediation to remove it without replacing it with another provenance statement.
- Treat a missing or mismatched `title`, a missing `summary`, every separate `id`, `status`, or `owner` field, every other unsupported frontmatter field, and every `Status` or `Owner` section, label, badge, metadata block, or standalone value in a `DSxxx-*.md` file as an error. Require `title` to equal the filename stem and direct remediation to delete unsupported metadata, not rename, relocate, or reproduce it elsewhere.
- Treat source-level hard wrapping or presentation that prevents documentation or DS text from using the full width of its own box as an error. Require prose blocks to remain unwrapped in source and permit natural wrapping only at the containing box boundary.
- Treat a missing `docs/wiki.html`, a local `Definitions` section, a missing or shallow wiki entry, or a term link that does not target the exact canonical wiki anchor as an error. Require detailed entries that explain meaning, purpose, users or owners, behavior, relationships, and confirmed boundaries or limitations.
- Treat any direct top-level header link, header control without a submenu, empty submenu, destination outside a submenu, or inconsistent submenu grouping as an error. Require every top-level header control to be a submenu button and every destination to live inside exactly one subject-based submenu; permit a one-item submenu only when its subject has one valid destination.
- Treat a missing Documentation Map, a non-table or non-column-oriented map, a rigid spreadsheet-style grid around its semantic cells, a main page that is not a linked column header, invented hierarchy, a skill-catalog page missing its canonical `<skill-name> skill` label, an individual DS or specification-file shortcut, an unnecessary empty table body, generic header labels, purpose or order metadata columns, misplaced or missing eligible immediate subpages, duplicate or broken shortcuts, multiple shortcuts in one body cell, placeholder content, inaccessible button styling, absent purpose or reading-order prose below the table, or a reading sequence that contradicts the documentation hierarchy as an error.
- Keep the report in English unless the user explicitly requests another language.
