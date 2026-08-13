# Documentation Writing Guidelines

Use this reference for every persistent document produced or updated by this skill, including `README.md`, `AGENTS.md`, HTML pages, and design specification (DS) files. Apply the more specific HTML and DS references after these shared rules.

## Reader And Purpose

- Write for a reader who has no prior knowledge of the project, its architecture, or its vocabulary.
- State what the project or feature is for before explaining its internal implementation.
- Describe the person who uses the behavior, the task it supports, and the observable result. Then describe configuration, components, and runtime flow.
- Do not address the documentation to the developer who currently maintains the code.
- Keep introductory material at overview level. Move implementation detail to the later section where the reader needs it.

## Terms And Reading Order

- Preserve exact code identifiers and use verified plain-language definitions for project-specific terms, acronyms, component names, and architectural concepts.
- Define a term inline when the explanation is part of the narrative or needed immediately to understand the surrounding behavior.
- When an inline definition would interrupt the narrative, use the page's `Definitions` section instead of inserting a parenthetical or detour into the prose.
- When an HTML documentation page introduces one or more new project-specific concepts or terms, add a `Definitions` section covering them. A page that introduces no new terminology does not need this section. Give every local definition a stable anchor.
- Link every occurrence of a defined project-specific term outside the `Definitions` section to its local definition anchor. If another page owns the canonical definition, link every occurrence and the corresponding local `Definitions` entry directly to that page's exact definition anchor. Do not duplicate wording that may diverge from the canonical definition.
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

## Comparisons

- Use a comparison when it explains a meaningful difference from a real alternative, previous version, or common implementation.
- Name both alternatives and the practical consequence of the difference.
- Do not use “rather than,” “instead of,” or similar contrast as decoration or to say that the system performs a desirable action instead of an obviously undesirable one.
- Prefer a direct affirmative statement when no useful tradeoff or alternative needs explanation.

## Review Method

- Read each document from start to finish in the order available to its intended reader.
- For every HTML page, inventory the project-specific concepts it introduces. If the page introduces any, confirm that it has a `Definitions` section and that each new concept appears there; do not require the section on a page with no new terminology.
- Confirm that every occurrence of each defined project-specific term outside the `Definitions` section links to its verified local or cross-page definition anchor, including occurrences in headings, lists, captions, and callouts.
- Check headings, lists, diagrams, captions, navigation labels, and callouts as well as body prose. Their unfamiliar terms must be represented by the page's definition links or definitions section.
- Check cross-page definition links and confirm that both the target page and definition anchor exist.
- Rewrite sentences that remain understandable only to a current maintainer or only after reading source code.
