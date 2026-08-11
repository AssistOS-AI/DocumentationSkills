# Documentation Writing Guidelines

Use this reference for every persistent document produced or updated by this skill, including `README.md`, `AGENTS.md`, HTML pages, and design specification (DS) files. Apply the more specific HTML and DS references after these shared rules.

## Reader And Purpose

- Write for a reader who has no prior knowledge of the project, its architecture, or its vocabulary.
- State what the project or feature is for before explaining its internal implementation.
- Describe the person who uses the behavior, the task it supports, and the observable result. Then describe configuration, components, and runtime flow.
- Do not address the documentation to the developer who currently maintains the code.
- Keep introductory material at overview level. Move implementation detail to the later section where the reader needs it.

## Terms And Reading Order

- Introduce a project-specific term, acronym, component name, or architectural concept with a plain-language definition at or before its first use.
- Preserve exact code identifiers, but explain what each identifier represents when a new reader first encounters it.
- Do not rely on a definition that appears later in the page or in a later document in the stated reading order.
- Make every independently accessible page explain the concepts required to understand that page. A link may provide more detail, but it does not replace the first-use explanation.
- Do not present a list of unfamiliar terms and explain them only afterward. Define each new item inline, or introduce the concepts in prose before listing them.
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
- At every first occurrence of a project-specific term, confirm that the surrounding sentence gives enough information to understand it.
- Check headings, lists, diagrams, captions, navigation labels, and callouts as well as body prose; they must not introduce unexplained concepts.
- Check transitions between documents in any mandatory reading order. A later document may rely only on concepts that an earlier document has already introduced.
- Rewrite sentences that remain understandable only to a current maintainer or only after reading source code.
