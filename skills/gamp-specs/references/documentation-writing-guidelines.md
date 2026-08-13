# Documentation Writing Guidelines

Use this reference for every persistent document produced or updated by this skill, including `README.md`, `AGENTS.md`, HTML pages, and design specification (DS) files. Apply the more specific HTML and DS references after these shared rules.

## Reader And Purpose

- Write for a reader who has no prior knowledge of the project, its architecture, or its vocabulary.
- State what the project or feature is for before explaining its internal implementation.
- Describe the person who uses the behavior, the task it supports, and the observable result. Then describe configuration, components, and runtime flow.
- Do not address the documentation to the developer who currently maintains the code.
- Keep introductory material at overview level. Move implementation detail to the later section where the reader needs it.

## Internal Authoring Tools

- Treat every skill used only to generate, structure, review, validate, or repair documentation as an internal authoring tool that is outside the documented product.
- Never name or reference those documentation skills in persistent project documentation, including `README.md`, `AGENTS.md`, HTML pages, DS files, matrices, comments, captions, footers, credits, badges, navigation, or provenance statements.
- Do not say that a document was generated, reviewed, validated, or remediated by `gamp-specs`, `review-specs`, or an equivalent skill. Describe only the project, its supported behavior, and its actual product dependencies.
- Do not add internal documentation skills to product dependency lists, skill catalogs, architecture diagrams, definitions, or specifications solely because they participated in the authoring workflow.
- Document a skill when the repository itself implements, distributes, or exposes that skill as product functionality. Keep authoring provenance prohibited even when the skill is a legitimate product subject.

## Terms And Reading Order

- Preserve exact code identifiers and use verified plain-language definitions for project-specific terms, acronyms, component names, and architectural concepts.
- Define a term inline when the explanation is part of the narrative or needed immediately to understand the surrounding behavior.
- When an inline definition would interrupt the narrative, use the page's `Definitions` section instead of inserting a parenthetical or detour into the prose.
- When an HTML documentation page introduces one or more new project-specific concepts or terms, add a `Definitions` section covering them. A page that introduces no new terminology does not need this section. Give every local definition a stable anchor.
- Link every occurrence of a defined project-specific term outside the `Definitions` section to its local definition anchor, except occurrences in page titles and section headings. If another page owns the canonical definition, link eligible occurrences and the corresponding local `Definitions` entry directly to that page's exact definition anchor. Do not duplicate wording that may diverge from the canonical definition.
- Keep page titles and section headings as plain, unlinked text. Never wrap a title, heading, or a word within one in a definition link; provide the definition link in the first relevant body-text occurrence instead.
- A linked definition is an alternative to interrupting the narrative, not a prohibition on useful inline definitions. A page may both define a central term inline and record it in `Definitions` for scanning and direct linking.
- Do not invent definitions that the implementation or authoritative project material cannot support. Remove or narrow unsupported terminology.
- Repeat a short explanation when an important concept returns after several sections or takes on a new role. Do not repeat definitions mechanically when the meaning remains clear from nearby text.

## Concrete Language

- Name the real actor, component, action, data, or outcome instead of using a broad noun by itself. Words such as “capability,” “authority,” “mechanism,” “context,” and “layer” need a concrete explanation when they do not identify a specific code construct.
- Name people by their relevant role or field. For example, replace “people with a defined kind of work” with the verified role, such as “people specialized in a certain field.”
- Replace an abstract claim with an observable statement. For example, replace “provides a durable capability” with the operation the user can continue to perform and the condition that keeps it available.
- Avoid literary phrases, slogans, and compressed parallels whose meaning depends on interpretation. State the cause, behavior, and result directly.
- Use the project's established terminology only when it is defined in the source material. If the source does not define a term, remove it or narrow the statement instead of inventing a definition.
- Use examples when they make an abstract rule concrete, but keep each example tied to verified project behavior.

## Text Flow

- Do not insert manual line breaks or hard-coded early wrapping in headings, paragraphs, lists, captions, callouts, diagram labels, or other text containers.
- Let text flow across the full available width of its box and wrap naturally only when it reaches that box's boundary. Do not narrow a text container merely to force shorter lines.

## Comparisons

- Use a comparison when it explains a meaningful difference from a real alternative, previous version, or common implementation.
- Name both alternatives and the practical consequence of the difference.
- Do not use “rather than,” “instead of,” or similar contrast as decoration or to say that the system performs a desirable action instead of an obviously undesirable one.
- Prefer a direct affirmative statement when no useful tradeoff or alternative needs explanation.

## Review Method

- Read each document from start to finish in the order available to its intended reader.
- For every HTML page, inventory the project-specific concepts it introduces. If the page introduces any, confirm that it has a `Definitions` section and that each new concept appears there; do not require the section on a page with no new terminology.
- Confirm that every eligible occurrence of each defined project-specific term outside the `Definitions` section links to its verified local or cross-page definition anchor. Titles and section headings are required exceptions and must remain unlinked.
- Check headings, lists, diagrams, captions, navigation labels, and callouts as well as body prose. Represent unfamiliar heading and title terms in the page's definitions section, and place their definition links in relevant body prose rather than inside the heading or title.
- Check cross-page definition links and confirm that both the target page and definition anchor exist.
- Confirm text uses the full available width of its container and contains no manual or artificially early wrapping.
- Search all persistent documentation for documentation-skill names and authoring-provenance language. Remove each occurrence that describes an internal authoring tool rather than implemented product functionality.
- Rewrite sentences that remain understandable only to a current maintainer or only after reading source code.
