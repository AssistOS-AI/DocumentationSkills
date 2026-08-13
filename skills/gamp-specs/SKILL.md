---
name: gamp-specs
description: Rebuild or initialize a software project with a `README.md` that introduces the project and documents verified setup and usage, repository guidance in `AGENTS.md`, HTML documentation under `docs/`, and consecutively numbered design specifications under `docs/specs/`. Use when Codex must create, normalize, or synchronize these documents with the implementation and the repository's current skill catalog.
---

# GAMP Specs

## Overview

Normalize or initialize a project into a consistent repository structure. Store human onboarding in `README.md`, agent instructions in `AGENTS.md`, explanatory HTML pages under `docs/`, and design specifications (DS files) under `docs/specs/`. A DS file records requirements, constraints, rationale, confirmed limitations, and contract boundaries as declarative statements. Always ingest existing guidance first and reshape it into the standard structure without discarding verified project information. This skill absorbs and supersedes the previous `gamp-structure` behavior, so the scripts, references, assets, and structural guarantees from that skill must remain available here.

Read `references/documentation-writing-guidelines.md` before writing any persistent documentation. Use `references/docs-structure.md` for layout, README content, and file placement; `references/technical-docs-guidelines.md` for HTML pages; `references/diagrams-guidelines.md` for diagrams; and `references/specs-guidelines.md` for DS files. Apply HTML-specific rules only to HTML pages.

Run `detect-main-behaviors` after repository discovery and before defining or updating the DS set. Treat its accepted-behavior handoff as the required evidence boundary for the Main Behavior DS.

## Final-Product Documentation Policy

The generated documentation must describe the product as it is intended to exist when delivered to its users: its stable purpose, supported interfaces, responsibilities, workflows, constraints, and operational behavior. Documentation is a product contract, not a progress report.

- Do not describe the target repository as an intermediate development step.
- Do not include phrases such as “currently contains,” “not implemented yet,” “planned interface,” “future implementation,” “design only,” or equivalent status commentary in `README.md`, HTML pages, or ordinary explanatory prose.
- Do not weaken final behavior into progress language merely because the source repository is incomplete while the product design is being developed. Describe the required or delivered product behavior directly.
- Record confirmed behavior, missing contract details, and implementation boundaries in the affected DS file as declarative statements; do not surface repository-progress commentary in user-facing documentation.
- When a capability is part of the product contract but its concrete command, setting, or provider mapping is not specified, document the stable behavior and state that boundary declaratively without narrating the development phase.
- Review every generated document for temporal qualifiers about repository state and remove them unless the qualifier is part of the product's user-visible lifecycle or versioning contract.
- Treat documentation-generation and documentation-review skills as internal authoring tools. Their use is implementation detail of the documentation workflow, not part of the product contract.
- Never mention the documentation skills used to create, rebuild, normalize, or review the project documentation in `README.md`, `AGENTS.md`, HTML pages, DS files, the specification matrix, comments, captions, footers, provenance notes, or generated content. Do not state that documentation was generated, reviewed, validated, or remediated by `gamp-specs`, `review-specs`, or any equivalent documentation skill.
- Do not create pages, sections, DS files, glossary entries, badges, credits, navigation links, or dependency lists for those internal documentation skills merely because they were available or used during authoring.
- Mention a skill only when the target repository implements, distributes, or exposes that skill as part of the product itself. This product-scope exception does not permit authoring-process commentary about using the skill to produce the documentation.

## Workflow

### 1. Discover Source Material

- Read `AGENTS.md`, `README.md`, and any existing `docs/` content.
- Read the source code in the same manner you normally do when asked to analyze a project: scan the tree, inspect entry points, follow key dependencies, and review the current skill folders.
- Verify every substantive technical claim against the implementation before documenting it.
- Extract required narrative, constraints, and terminology from those sources.
- Remove existing authoring-process references to documentation-generation or documentation-review skills unless the referenced skill is itself an implemented product subject. Preserve product behavior while removing tool provenance.
- Identify the project's intended users and the verified installation, configuration, startup, integration, and usage paths that apply to its project type.
- Keep all written output in English, including `README.md`, HTML documentation, specs, and `AGENTS.md`.
- Run `detect-main-behaviors` against the discovered source, documentation, tests, public interfaces, architecture, and relevant development evidence. Preserve its accepted and rejected candidate boundary for specification generation.

### 2. Apply the Standard Structure

- Use `references/docs-structure.md` as the required layout and naming rules.
- Use `references/documentation-writing-guidelines.md` for reader assumptions, definition links and sections, concrete language, concept order, and comparison rules across every document.
- Use `references/technical-docs-guidelines.md` when writing or revising the HTML pages.
- Use `references/specs-guidelines.md` when writing or revising the DS specifications.
- Define the DS spec set based on project scope.
- Always begin with `DS000-vision.md` and `DS001-coding-style.md`.
- Create `DS002` for the next foundational project contract required by the repository, consolidating related material when necessary so the file has a substantive scope.
- Always create exactly one Main Behavior specification named `DS003-main-behavior.md` with the title `Main Behavior`. Reserve this identifier for Main Behavior and place it after the preceding foundational specifications.
- Build the Main Behavior DS only from candidates accepted by `detect-main-behaviors`. Include the project purpose and only the principal paths, broad project-spanning behaviors, essential APIs or commands, active consequences of direction-changing decisions, and architectural skeleton identified by that analysis.
- Keep feature catalogs, helpers, optional integrations, narrow configuration, and implementation detail out of the Main Behavior DS. Link to specialized DS files when a main behavior needs deeper contracts without duplicating them.
- When a project uses WebSkel, read the `webskel-ui-engineering` guidance, require that skill in `AGENTS.md`, and carry its coding rules into `DS001-coding-style.md`. Give every WebSkel-specific term a verified inline definition or an exact link to its local or canonical definition entry.
- In a skill-catalog repository, create one DS file for each skill that the repository implements or distributes as part of its product, plus any additional DS files needed for shared architectural topics such as model strategy. Exclude documentation skills that were merely used as internal authoring tools.
- In a downstream project that only consumes imported skills, keep the DS set focused on the host project itself. Do not create DS files under `docs/specs/` whose subject is the imported skills.
- Keep the DS sequence contiguous with no missing intermediate numbers. The foundational sequence is `DS000`, `DS001`, `DS002`, then `DS003-main-behavior.md`; subsequent files continue from `DS004`.
- Ensure the DS files are reachable from `matrix.md`, and link each DS entry through `/specsLoader.html?spec=DS0xx-description.md`.
- Treat `DS001-coding-style.md` as the canonical source for coding-style rules and make `AGENTS.md` point to it explicitly.
- Keep the HTML documentation workflow and the DS specification workflow distinct.
- Treat the DS specifications as the source of truth for documented behavior and structure.
- Make every ordinary DS file use only `Introduction`, `Core Content`, and `Conclusion` as its standard top-level content sections.
- Normalize all existing DS material into declarative requirements, rationale, constraints, invariants, limitations, or explicitly unspecified boundaries inside `Core Content`.
- When code changes alter behavior, interfaces, architecture, workflows, or constraints, update both the HTML documentation and the DS specifications to match the implementation.
- Record architectural interpretations, high-risk assumptions, conflict resolutions, and implementation alternatives directly inside the affected DS files as declarative contract statements.
- Keep repository example code inside the relevant skill folders rather than introducing a shared root `src/` tree that copied skills would not carry with them.

### 3. Rebuild HTML Documentation

- Update or create the required HTML pages and shared assets.
- Follow `references/diagrams-guidelines.md` for diagram selection, captions, actor grouping, visual categories, Mermaid markup, and static asset placement.
- Put each diagram's single centered, italic caption below the diagram. Do not place a separate diagram title above it, and do not frame the whole diagram in a border, background box, card, panel, or shadow.
- When an HTML documentation page introduces new project-specific terms or concepts, add a `Definitions` section. Link every eligible occurrence of each defined term outside that section to its stable local definition anchor, or to the exact canonical definition anchor on another page when that page owns the definition; retain inline definitions when they support the narrative. Never add definition links to page titles or section headings. Do not require the section on pages that introduce no new terminology.
- Do not force early text wrapping with manual line breaks, narrow fixed widths, or newline-preserving styles. Let text use the full width of its box and wrap naturally only at the box boundary.
- Make the main documentation panel use the full available page width. Do not constrain it with a centered `max-width`; use compact page and panel padding equivalent to `1rem` on desktop, reduced further on narrow screens.
- Keep the narrative consistent with the project’s role and interfaces, especially any agent or system responsibilities described in `AGENTS.md`.
- Review the actual contents of each skill folder and document the local artifacts, dependencies, conventions, and responsibilities instead of relying on shallow summaries.
- Follow `references/technical-docs-guidelines.md`.
- In a skill-catalog repository, provide one HTML page per skill that the repository implements or distributes as part of the product. Do not create pages for documentation skills merely because they were used as internal authoring tools.
- In a downstream project that only consumes imported skills, keep `/docs` focused on the host project. Do not create standalone skill pages there for the imported skills; keep any skill-local notes inside the local skill folders.
- Use one primary navigation system containing direct top-level links and submenus only for cohesive groups of multiple secondary pages. Do not require every header item to have a submenu, and do not create empty submenus or a submenu for a single destination. Do not add a second parallel primary navigation system.
- Put pages that belong at the primary navigation level directly in the header instead of hiding them inside a submenu. Make `Specifications` a direct top-level link to `specsLoader.html?spec=matrix.md`, with no parent submenu and no submenu of its own.
- Make every open submenu close when the user clicks or taps outside its menu. Keep the submenu structure and interaction behavior uniform across all HTML pages.
- Treat the project as a standalone system in the HTML documentation. Do not expose machine-specific absolute paths, home directories, usernames, or other workstation-local filesystem details unless the repository itself requires them as part of the documented contract.
- Ensure the HTML documentation reflects the current source code and remains aligned with the DS specifications.
- Provide an index page that explains how the system fits together, where the coding style is defined, and how tests are organized. Add one page per skill only when the repository itself is the skill catalog.

### 4. Create or Update `README.md`

- Create `./README.md` if it does not exist; otherwise update it without discarding verified project guidance.
- Begin with a short introduction that identifies the project, the user problem it addresses, and its main role. Follow with a high-level overview that does not require knowledge of the source code.
- Document every applicable onboarding path supported by the project: prerequisites, installation, configuration, application startup, library or service integration, and basic usage.
- Include only the onboarding sections that apply to the project. For example, document integration instead of startup for a library that has no standalone process.
- Verify commands, filenames, environment variables, configuration values, and examples against the implementation. Do not infer a setting's purpose, accepted format, or effect from its name, and do not invent a missing setup path.
- When the repository confirms that a setup value is required but does not explain how to obtain or format it, document only the confirmed requirement. State declaratively in the affected DS what the repository confirms and which acquisition or format detail remains unspecified. Do not propose alternative implementations unless the project establishes a genuine unresolved design choice.
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
- State explicitly that `AGENTS.md` must mention the skills implemented or distributed by the repository as product artifacts and must be updated when that product skill catalog changes. Exclude documentation skills used only as internal authoring tools.
- State explicitly that downstream consumer projects must not put imported-skill DS files or skill pages inside the host project's `docs/` tree.
- State explicitly that DS numbering must remain gap-free.
- Instruct future agents to run `detect-main-behaviors` before creating the Main Behavior DS and whenever source or product changes may alter the project's purpose, essential paths, public interfaces, broad subsystems, architectural skeleton, or active direction.
- State explicitly that DS rationale, limitations, assumptions, and contract boundaries use declarative prose in `Core Content` and do not depend on a separate repository decision log.
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
- Verify that the specification matrix has exactly two columns: `Name`, containing the linked `DS0xx-description` filename stem, and `Description`, containing a short explanation. Do not generate `Title`, `Status`, `Owner`, or other columns.
- Verify that the generated spec files exist at the paths referenced by the HTML documentation.
- Verify that DS numbering is contiguous by checking the current spec directory contents rather than trusting a template.
- Verify that exactly one `DS003-main-behavior.md` exists, that the matrix reaches it, and that every behavior it contains appears in the accepted handoff from `detect-main-behaviors`.
- Regenerate `docs/specs/matrix.md` from the DS files instead of editing it manually.
- Run the documentation link verifier after documentation work so shared navigation, specs-loader links, and partial includes stay valid.
- When the HTML documentation uses relative asset paths, `fetch()`-loaded partials, or other browser-resolved resources, run `node scripts/verify_static_site.js <docs-dir>` against the generated `docs/` folder. Add `--path` checks for project-specific resources when needed.
- Verify that each affected DS file states important rationale, tradeoffs, limitations, and contract boundaries declaratively in `Core Content`.
- Verify each applicable README onboarding procedure against the current source, manifest, configuration, and executable entry points.
- Verify that README, HTML pages, and DS files describe the final product contract and contain no repository-progress commentary. Express implementation alternatives and unspecified contract details as bounded declarative statements in the affected DS file.
- Verify that no persistent project documentation reveals which documentation-generation or documentation-review skills were used. Treat any such mention as prohibited internal-tool leakage and remove it.

### 8. Quality Checks

- Validate that links between `index.html`, other HTML pages, and specs loader work.
- Validate that the HTML pages expose valid navigation paths to the specs set.
- Confirm the HTML documentation uses one primary navigation system with stable direct links and only necessary submenu groups across the set. Confirm `Specifications` is a direct top-level link with no submenu.
- Confirm an open submenu closes when the user clicks or taps outside it, every submenu groups multiple related secondary pages, and no empty, single-item, or fabricated submenu exists.
- Confirm the HTML documentation does not mention workstation-specific absolute filesystem paths or other local-machine details that are not part of the project's real interface.
- Validate that any HTML link pointing to specs, the specs matrix, or the specs loader resolves to an existing target.
- Confirm referenced static assets are stored under `docs/assets/` rather than embedded into the HTML files.
- Confirm the main documentation panel spans the available page width, has no fixed or centered maximum width, and uses compact responsive outer and inner padding.
- Confirm every diagram complies with `references/diagrams-guidelines.md`.
- Confirm every diagram caption is centered below the diagram, the diagram has no enclosing visual frame, and text is not manually wrapped before reaching its container boundary.
- Ensure every ordinary spec file follows the `DS0xx-description.md` convention, includes only the standard `Introduction`, `Core Content`, and `Conclusion` content structure, and fits into the required numbering sequence.
- Confirm the Main Behavior DS contains only defining project behaviors, stays aligned with the detector's evidence, and refers readers to specialized DS files for lower-level detail.
- Confirm the specs matrix links correctly via `specsLoader.html?spec=matrix.md`.
- Confirm each DS entry in `matrix.md` uses the specs-loader path format `/specsLoader.html?spec=DS0xx-description.md`.
- Confirm `AGENTS.md` points to the correct HTML documentation paths, the correct specs path, and `DS001-coding-style.md`.
- Confirm `AGENTS.md`, `docs/index.html`, and `docs/specs/matrix.md` mention the implemented or distributed product skill set consistently and exclude authoring-only documentation skills.
- Confirm the HTML documentation and specs are synchronized with the implementation, with specs kept authoritative if wording diverges.
- Confirm downstream-consumer documentation rules are explicit: imported skills stay documented inside `skills/`, not in the host project's `/docs` DS set.
- Confirm rationale, alternatives, limitations, and contract boundaries are written as declarative statements in `Core Content` and that no DS depends on a separate decision-log file.
- Read `README.md`, `AGENTS.md`, the HTML pages, and the DS files in their intended order. Confirm each HTML page that introduces new project-specific terminology has a complete `Definitions` section and that every eligible occurrence of each defined term outside that section links to a valid local or canonical definition anchor. Confirm page titles and section headings contain no definition links. Do not flag the section as missing when the page introduces no new terminology.
- Confirm feature documentation states the role and practical use before internal behavior, configuration, or architecture.
- Replace unexplained abstract nouns, literary phrases, and decorative comparisons with concrete statements about verified actors, actions, data, or results.
- Confirm `README.md` contains an introduction, a high-level overview, and every applicable installation, configuration, startup, integration, and basic-usage procedure.
- Confirm no user-facing documentation treats the product as a temporary step, reports that code is absent or unfinished, or labels its interfaces as merely planned. The documentation must read as the final product contract even while development continues.
- Confirm `README.md`, `AGENTS.md`, HTML pages, DS files, the specification matrix, comments, captions, footers, and navigation contain no mention of internal documentation skills or their use, except where a skill is itself an implemented and distributed subject of the product. Even under that exception, do not describe the documentation as generated or reviewed by that skill.

## Resources

### scripts/
- `generate_specs_matrix.mjs` - generates the two-column `docs/specs/matrix.md` from DS filenames and descriptions and fails if DS numbering has gaps.
- `verify_docs_links.mjs` - verifies that local links, local assets, specs-loader targets, and partial includes resolve across the HTML documentation.
- `verify_static_site.js` - optional runtime verification helper that serves a generated `docs/` folder through a temporary local HTTP server and checks key pages and assets over real HTTP.

### references/
- `documentation-writing-guidelines.md` - shared audience, terminology, reading-order, concrete-language, and comparison rules for every persistent document.
- `docs-structure.md` - required documentation layout, file naming, and document set expectations.
- `technical-docs-guidelines.md` - writing and presentation rules for `docs/*.html`.
- `diagrams-guidelines.md` - diagram selection, captions, actor hierarchy, visual differentiation, Mermaid, and static-asset rules.
- `specs-guidelines.md` - writing rules for `docs/specs/*.md`.

### assets/
- `fileSizesCheck.sh` - portable file-size and line-length checker to copy into initialized projects.
- `specsLoader.html` - canonical specs loader that must be copied into `docs/specsLoader.html`.
