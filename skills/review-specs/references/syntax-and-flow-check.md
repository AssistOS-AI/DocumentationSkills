# Syntax and Flow Check

This reference defines the read-only checks for file validity, cross-file references, documentation structure, and navigation. Complete these checks before semantic review.

## 1. Inventory and review graph

Locate `README.md`, `AGENTS.md`, `docs/`, all files under `docs/`, and every target reached through documentation links. Classify each file as a home page, primary page, secondary page, specification, matrix, loader, partial, diagram, stylesheet, script, or asset.

Build a simple reachability map from the home page and primary navigation. Record links that are valid, broken, external, conditional, or unreachable. A page can be secondary and intentionally absent from the home menu, but it must be reachable from the primary page that introduces its subject.

Example of a coherent flow:

```text
Home → Architecture → Components → Component details
Home → Usage → Configuration
Home → Specifications → Matrix → DS files
```

Example of a confusing flow to report:

```text
Home links directly to 18 detail pages, but no page explains the reading order.
The “Architecture” page links to “Configuration”, while “Configuration” links back
to Architecture without explaining the dependency.
```

Do not require every site to use exactly this shape. Report a problem when a new user cannot tell which page is the starting point, which pages are foundational, or where a secondary topic belongs.

## 2. HTML syntax and assets

Inspect each HTML document for a valid document skeleton, balanced tags, valid nesting, meaningful `lang`, charset and viewport metadata, and consistent title/navigation structure. Check local `href`, `src`, stylesheet, script, image, partial, and loader targets. Confirm that shared fragments are loaded using the mechanism the page actually includes.

When an HTML documentation page contains a `Definitions` section, confirm that it has a stable section anchor, that each local definition has a unique anchor, and that local and cross-page definition links resolve to the intended page and exact anchor. Do not treat the absence of the section as a syntax defect; the semantic review determines whether the page introduces new terminology and therefore requires it. Treat duplicate definition anchors and broken definition links as structural defects.

Examples:

- Report an `error` when `<main>` is opened but never closed, or when a link points to `docs/specsLoader.html?spec=DS009.md` and `DS009.md` does not exist.
- Report a `warning` when one primary page has a different navigation model from all others and no reason is given.
- Report a `recommendation` when a long secondary page has no breadcrumb or link back to its parent, even though the reader can technically reach it.

Check Mermaid blocks separately. A Mermaid diagram must use the expected `<pre class="mermaid">` form (or the repository's documented equivalent), begin with a supported diagram declaration such as `flowchart`, `sequenceDiagram`, or `stateDiagram-v2`, and contain syntactically valid statements. Verify that unfamiliar labels are covered by the page's `Definitions` section or a valid canonical definition link and that the diagram agrees with the surrounding prose.

Example diagram defect:

```html
<pre class="mermaid">
flowchart LR
  Caller -->
</pre>
```

The dangling arrow is a syntax error. A semantic diagram defect is different: a diagram may parse successfully while showing `LLM → Database` even though the prose says the LLM only returns text and never writes the database.

Check SVG/XML assets for well-formed markup and verify that referenced assets are stored in the documented asset directory. Do not treat an external CDN as a local asset; report it as an external dependency if availability matters.

## 3. Markdown syntax and heading structure

Inspect `README.md`, `AGENTS.md`, every Markdown file under `docs/`, and every DS file. Check front matter delimiters and fields where used, closed code fences, valid links, table delimiters, list indentation, and heading hierarchy. A heading level may occasionally be skipped for a deliberate structural reason, but unexplained jumps should be reported.

Check whether headings make sense for the content that follows. A heading called `Runtime` followed by only repository history is misleading even if the Markdown parses.

Examples:

```markdown
# Project
### Installation
```

Report a warning for the unexplained jump from `#` to `###`; suggest `## Installation` unless the missing level is structurally intentional.

```markdown
## Configuration

- API key
- Model
- Timeout

## Examples

- The system reads the API key from the environment.
- The model tag selects a configured executor.
```

The syntax is valid, but the second list likely replaces explanatory prose. Report that under language/information design, not as a Markdown syntax error.

Validate DS naming, required numbering, front matter, `Introduction`, `Core Content`, `Conclusion`, and matrix links when the repository uses the GAMP specification structure. Confirm that substantive requirements, rationale, limitations, alternatives, and contract boundaries are declarative content under `Core Content`; remediation must normalize any additional DS content structure into these standard sections. Verify that `DS003-main-behavior.md` exists exactly once and that `specsLoader.html?spec=...` targets resolve to the intended DS files.

## 4. Other documentation-support files

Parse JSON manifests and configuration examples. Run JavaScript syntax checks for documentation loaders or helpers when the command is read-only. Inspect CSS for malformed blocks when a parser is available. Check code snippets only to the extent needed to identify syntax that the documentation presents as executable; do not turn this skill into a source-code review.

If a checker cannot run because a dependency or local server is unavailable, state the limitation and continue with static inspection. Never edit a file to make a checker pass.

## 5. Navigation and documentation map

The home page must explain the project at a high level and provide a primary menu to the main pages. Secondary pages should normally be linked from the main page that introduces them. The home page should not become an exhaustive list of every small detail page when a hierarchical path is clearer.

Check:

- one obvious home page and a visible path back to it;
- primary menu labels that match page titles;
- parent-to-child links for secondary pages;
- no orphan pages or dead-end required flows;
- a coherent specification entry point and matrix;
- a documentation map or reading guide, when present, that matches actual links;
- no duplicated primary navigation systems competing with one another;
- stable breadcrumbs or equivalent orientation on deep pages.

Example finding:

> `docs/index.html`, “Documentation map”: the text lists “API”, “Architecture”, and “Operations”, but only “Architecture” is linked. Add valid links or remove the claim from the map. `gamp-specs` should repair the map and then re-run link verification.

## 6. Finding format

For each finding, record:

`[severity] path — location — observed evidence — consequence — remediation direction`

Example:

`[error] docs/specsLoader.html — specification loader: target DS007-runtime.md is missing — readers cannot open the linked contract — regenerate the matrix after restoring or removing the target through gamp-specs.`
