---
name: gamp-specs
description: Rebuild or initialize a software project with a `README.md` that introduces the project and documents verified setup and usage, repository guidance in `AGENTS.md`, HTML documentation under `docs/`, and consecutively numbered design specifications under `docs/specs/`. Use when Codex must create, normalize, or synchronize these documents with the implementation and the repository's current skill catalog.
---

# GAMP Specs

## Overview

Normalize or initialize a project into a consistent repository structure. Store human onboarding in `README.md`, agent instructions in `AGENTS.md`, explanatory HTML pages under `docs/`, and design specifications (DS files) under `docs/specs/`. A DS file records requirements, constraints, and resolved or open design questions. Always ingest existing guidance first and reshape it into the standard structure without discarding verified project information. This skill absorbs and supersedes the previous `gamp-structure` behavior, so the scripts, references, assets, and structural guarantees from that skill must remain available here.

Read `references/documentation-writing-guidelines.md` before writing any persistent documentation. Use `references/docs-structure.md` for layout, README content, and file placement; `references/technical-docs-guidelines.md` for HTML pages; and `references/specs-guidelines.md` for DS files. Apply HTML-specific rules only to HTML pages.

## Final-Product Documentation Policy

The generated documentation must describe the product as it is intended to exist when delivered to its users: its stable purpose, supported interfaces, responsibilities, workflows, constraints, and operational behavior. Documentation is a product contract, not a progress report.

- Do not describe the target repository as an intermediate development step.
- Do not include phrases such as “currently contains,” “not implemented yet,” “planned interface,” “future implementation,” “design only,” or equivalent status commentary in `README.md`, HTML pages, or ordinary explanatory prose.
- Do not weaken final behavior into progress language merely because the source repository is incomplete while the product design is being developed. Describe the required or delivered product behavior directly.
- Keep genuinely unresolved choices, missing contract details, and implementation alternatives in the affected DS file under numbered `Decisions & Questions`; do not surface repository-progress commentary in user-facing documentation.
- When a capability is part of the product contract but its concrete command, setting, or provider mapping is unresolved, document the stable behavior and record the unresolved detail in a DS question without narrating the development phase.
- Review every generated document for temporal qualifiers about repository state and remove them unless the qualifier is part of the product's user-visible lifecycle or versioning contract.

## Workflow

### 1. Discover Source Material

- Read `AGENTS.md`, `README.md`, and any existing `docs/` content.
- Read the source code in the same manner you normally do when asked to analyze a project: scan the tree, inspect entry points, follow key dependencies, and review the current skill folders.
- Verify every substantive technical claim against the implementation before documenting it.
- Extract required narrative, constraints, and terminology from those sources.
- Identify the project's intended users and the verified installation, configuration, startup, integration, and usage paths that apply to its project type.
- Keep all written output in English, including `README.md`, HTML documentation, specs, and `AGENTS.md`.

### 2. Apply the Standard Structure

- Use `references/docs-structure.md` as the required layout and naming rules.
- Use `references/documentation-writing-guidelines.md` for reader assumptions, first-use definitions, concrete language, concept order, and comparison rules across every document.
- Use `references/technical-docs-guidelines.md` when writing or revising the HTML pages.
- Use `references/specs-guidelines.md` when writing or revising the DS specifications.
- Define the DS spec set based on project scope.
- Always begin with `DS000-vision.md` and `DS001-coding-style.md`.
- When a project uses WebSkel, read the `webskel-ui-engineering` guidance, require that skill in `AGENTS.md`, and carry its coding rules into `DS001-coding-style.md`. Define every WebSkel-specific term from that guidance before using it in the target documentation.
- In a skill-catalog repository, create one DS file for each current skill in the repository, plus any additional DS files needed for shared architectural topics such as model strategy.
- In a downstream project that only consumes imported skills, keep the DS set focused on the host project itself. Do not create DS files under `docs/specs/` whose subject is the imported skills.
- Keep the DS sequence contiguous with no missing intermediate numbers. If the repository uses `DS000` through `DS010`, the next new DS must be `DS011`.
- Ensure the DS files are reachable from `matrix.md`, and link each DS entry through `/specsLoader.html?spec=DS0xx-description.md`.
- Treat `DS001-coding-style.md` as the canonical source for coding-style rules and make `AGENTS.md` point to it explicitly.
- Keep the HTML documentation workflow and the DS specification workflow distinct.
- Treat the DS specifications as the source of truth for documented behavior and structure.
- Make every ordinary DS file use `Introduction`, `Core Content`, `Decisions & Questions`, and `Conclusion`.
- In `Decisions & Questions`, use numbered Markdown subchapters such as `### Question #1: ...`.
- Put `Response` or `Options` inside the numbered question subchapter and keep unresolved multi-option questions unimplemented until one path is selected.
- When code changes alter behavior, interfaces, architecture, workflows, or constraints, update both the HTML documentation and the DS specifications to match the implementation.
- Record architectural interpretations, high-risk assumptions, conflict resolutions, and unresolved alternatives directly inside the affected DS files under numbered `Decisions & Questions` entries.
- Keep repository example code inside the relevant skill folders rather than introducing a shared root `src/` tree that copied skills would not carry with them.

### 3. Rebuild HTML Documentation

- Update or create the required HTML pages and shared assets.
- Include the Mermaid ESM module script in every generated HTML page’s `<head>` as specified in `references/docs-structure.md` so that `<pre class="mermaid">` blocks render as diagrams.
- Use inline Mermaid definitions for architecture, data-flow, component, sequence, and state diagrams instead of ASCII art or static SVG when the diagram type is supported by Mermaid.
- Keep static SVG files and any other documentation assets that require custom layout separate from the HTML files under `docs/assets/`.
- Keep the narrative consistent with the project’s role and interfaces, especially any agent or system responsibilities described in `AGENTS.md`.
- Review the actual contents of each skill folder and document the local artifacts, dependencies, conventions, and responsibilities instead of relying on shallow summaries.
- Follow `references/technical-docs-guidelines.md`.
- In a skill-catalog repository, provide one HTML page per skill.
- In a downstream project that only consumes imported skills, keep `/docs` focused on the host project. Do not create standalone skill pages there for the imported skills; keep any skill-local notes inside the local skill folders.
- Choose one primary navigation model for the HTML documentation shell: a sidebar or a header navigation bar. Do not use both as parallel primary navigation systems in the same documentation set unless one is clearly secondary and non-redundant.
- Treat the project as a standalone system in the HTML documentation. Do not expose machine-specific absolute paths, home directories, usernames, or other workstation-local filesystem details unless the repository itself requires them as part of the documented contract.
- Ensure the HTML documentation reflects the current source code and remains aligned with the DS specifications.
- Provide an index page that explains how the system fits together, where the coding style is defined, and how tests are organized. Add one page per skill only when the repository itself is the skill catalog.

### 4. Create or Update `README.md`

- Create `./README.md` if it does not exist; otherwise update it without discarding verified project guidance.
- Begin with a short introduction that identifies the project, the user problem it addresses, and its main role. Follow with a high-level overview that does not require knowledge of the source code.
- Document every applicable onboarding path supported by the project: prerequisites, installation, configuration, application startup, library or service integration, and basic usage.
- Include only the onboarding sections that apply to the project. For example, document integration instead of startup for a library that has no standalone process.
- Verify commands, filenames, environment variables, configuration values, and examples against the implementation. Do not infer a setting's purpose, accepted format, or effect from its name, and do not invent a missing setup path.
- When the repository confirms that a setup value is required but does not explain how to obtain or format it, document only the confirmed requirement. Add a numbered DS question with a `Response:` that separates the confirmed behavior from the missing evidence. Do not propose alternative implementations unless the project has a genuine unresolved design choice.
- After code changes, recheck `README.md` whenever installation, configuration, startup, integration, public interfaces, or usage may have changed.

### 5. Create or Update `AGENTS.md`

- Create `./AGENTS.md` if it does not exist; otherwise update it.
- Do not create `./AGENT.md` or any other compatibility duplicate.
- Write the paths to the HTML documentation entry points and the specifications directory in `AGENTS.md`.
- Use a clear section template in this order: `Scope`, `Mandatory Reading Order`, `Current Skill Catalog`, `Repository Rules`, `Runtime Defaults`, and `Key Paths`.
- Instruct future agents to read `DS001-coding-style.md` for coding style, module structure, and test-organization rules.
- Instruct future agents to read the HTML documentation and the relevant per-skill DS files before making documentation-related changes.
- State explicitly that the DS specifications are the source of truth.
- State explicitly that when source code changes, the HTML documentation and the specifications must both be updated to reflect the change.
- State explicitly that all documentation, specifications, and comments must be written in English.
- State explicitly that `AGENTS.md` must mention the currently available skills and must be updated whenever new skill folders are added.
- State explicitly that downstream consumer projects must not put imported-skill DS files or skill pages inside the host project's `docs/` tree.
- State explicitly that the GAMP skill itself must be updated when new skill families, coding-style rules, or project bootstrap rules are introduced.
- State explicitly that DS numbering must remain gap-free.
- State explicitly that `Decisions & Questions` uses numbered question subchapters and that rationale now lives in the affected DS files rather than in a separate repository decision log.
- Require future documentation changes to follow `references/documentation-writing-guidelines.md` or the equivalent copied project guidance.

### 6. Install the Specs Loader

- Copy `assets/specsLoader.html` to `docs/specsLoader.html` every time docs are rebuilt.
- Do not edit this file in-place; update the asset if changes are needed.

### 7. Run Post-Generation Verification

- After generating or updating the HTML documentation and DS specifications, run verification checks before finishing.
- Verify that the generated HTML files reference the specifications through valid links.
- Verify in particular that users can reach the specs set from the HTML documentation through working links to `docs/specsLoader.html`, `docs/specs/matrix.md`, or equivalent spec entry points actually used by the project.
- Verify that HTML references to individual specs or the specs matrix resolve to existing files.
- Verify that `matrix.md` links each DS file through `/specsLoader.html?spec=DS0xx-description.md`.
- Verify that the generated spec files exist at the paths referenced by the HTML documentation.
- Verify that DS numbering is contiguous by checking the current spec directory contents rather than trusting a template.
- Regenerate `docs/specs/matrix.md` from DS metadata instead of editing it manually.
- Run the documentation link verifier after documentation work so shared navigation, specs-loader links, and partial includes stay valid.
- When the HTML documentation uses relative asset paths, `fetch()`-loaded partials, or other browser-resolved resources, run `node scripts/verify_static_site.js <docs-dir>` against the generated `docs/` folder. Add `--path` checks for project-specific resources when needed.
- Verify that each affected DS file carries the needed numbered `Decisions & Questions` entries for important rationale, tradeoffs, and unresolved issues.
- Verify each applicable README onboarding procedure against the current source, manifest, configuration, and executable entry points.
- Verify that README, HTML pages, and ordinary explanatory sections of DS files describe the final product contract and contain no repository-progress commentary. Retain implementation alternatives and unresolved contract details only in numbered DS `Decisions & Questions` entries.

### 8. Quality Checks

- Validate that links between `index.html`, other HTML pages, and specs loader work.
- Validate that the HTML pages expose valid navigation paths to the specs set.
- Confirm the HTML documentation uses a single primary navigation system across the set, choosing either a sidebar or a header navigation bar according to the project's needs.
- Confirm the HTML documentation does not mention workstation-specific absolute filesystem paths or other local-machine details that are not part of the project's real interface.
- Validate that any HTML link pointing to specs, the specs matrix, or the specs loader resolves to an existing target.
- Confirm referenced static assets are stored under `docs/assets/` rather than embedded into the HTML files.
- Confirm every generated HTML page includes the Mermaid ESM module script in `<head>`.
- Confirm no ASCII box-drawing diagrams remain in `<pre><code>` blocks — replace them with Mermaid definitions.
- Ensure every ordinary spec file follows the `DS0xx-description.md` convention, includes `Introduction`, `Core Content`, `Decisions & Questions`, and `Conclusion`, and fits into a contiguous numbering sequence.
- Confirm the specs matrix links correctly via `specsLoader.html?spec=matrix.md`.
- Confirm each DS entry in `matrix.md` uses the specs-loader path format `/specsLoader.html?spec=DS0xx-description.md`.
- Confirm `AGENTS.md` points to the correct HTML documentation paths, the correct specs path, and `DS001-coding-style.md`.
- Confirm `AGENTS.md`, `docs/index.html`, and `docs/specs/matrix.md` all mention the current skill set consistently.
- Confirm the HTML documentation and specs are synchronized with the implementation, with specs kept authoritative if wording diverges.
- Confirm downstream-consumer documentation rules are explicit: imported skills stay documented inside `skills/`, not in the host project's `/docs` DS set.
- Confirm numbered `Decisions & Questions` entries exist wherever rationale or unresolved choices matter, and confirm no guidance still requires a separate decision-log file.
- Read `README.md`, `AGENTS.md`, the HTML pages, and the DS files in their intended order. Confirm each project-specific term is explained at first use and no list, heading, diagram, or navigation label introduces unexplained concepts.
- Confirm feature documentation states the role and practical use before internal behavior, configuration, or architecture.
- Replace unexplained abstract nouns, literary phrases, and decorative comparisons with concrete statements about verified actors, actions, data, or results.
- Confirm `README.md` contains an introduction, a high-level overview, and every applicable installation, configuration, startup, integration, and basic-usage procedure.
- Confirm no user-facing documentation treats the product as a temporary step, reports that code is absent or unfinished, or labels its interfaces as merely planned. The documentation must read as the final product contract even while development continues.

## Resources

### scripts/
- `generate_specs_matrix.mjs` - generates `docs/specs/matrix.md` from DS frontmatter metadata and fails if DS numbering has gaps.
- `verify_docs_links.mjs` - verifies that local links, local assets, specs-loader targets, and partial includes resolve across the HTML documentation.
- `verify_static_site.js` - optional runtime verification helper that serves a generated `docs/` folder through a temporary local HTTP server and checks key pages and assets over real HTTP.

### references/
- `documentation-writing-guidelines.md` - shared audience, terminology, reading-order, concrete-language, and comparison rules for every persistent document.
- `docs-structure.md` - required documentation layout, file naming, and document set expectations.
- `technical-docs-guidelines.md` - writing and presentation rules for `docs/*.html`.
- `specs-guidelines.md` - writing rules for `docs/specs/*.md`.

### assets/
- `fileSizesCheck.sh` - portable file-size and line-length checker to copy into initialized projects.
- `specsLoader.html` - canonical specs loader that must be copied into `docs/specsLoader.html`.
