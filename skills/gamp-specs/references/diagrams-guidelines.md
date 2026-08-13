# Diagram Guidelines

Use this reference when creating or revising diagrams in HTML documentation. Apply `documentation-writing-guidelines.md` first so diagram labels, captions, and concepts follow the same terminology and evidence rules as the surrounding prose.

## When To Use A Diagram

- Add a diagram only when it makes a runtime flow, generation pipeline, architecture, data flow, component relationship, sequence, state transition, or directory structure easier to understand than prose.
- Keep every diagram technically exact, visually restrained, and readable on mobile.
- If a diagram becomes crowded, reduce the number of actors. Split secondary detail into prose or a separate focused diagram instead of shrinking labels, adding more crossings, or compressing actors until the result is difficult to scan.
- Do not use ASCII box-drawing characters (`─`, `│`, `┌`, `└`, and similar characters) for diagrams. Browser monospace fonts do not render them at consistent widths.

## Titles And Subtitles

- Place each diagram inside a `<figure>` with a `<figcaption>`.
- Give every diagram a concise title and an explanatory subtitle that states what relationship, boundary, or flow the reader should notice.
- Render the subtitle in italic text, for example:

```html
<figure class="diagram">
  <figcaption>
    <strong>Request execution</strong>
    <em>How a validated request moves from the public API to the runtime worker.</em>
  </figcaption>
  <pre class="mermaid">flowchart LR
    API[Public API] --> Worker[Runtime worker]</pre>
</figure>
```

## Actor Hierarchy And Density

- Treat an actor as a system, component, process, role, data store, or other participating entity represented by a node or container.
- When a diagram contains several related actors, group them inside larger named entities instead of spreading every actor across one flat canvas. In Mermaid flowcharts, use labeled `subgraph` containers to express these ownership, subsystem, deployment, or category boundaries.
- Nest only where the containment relationship is real and useful to the reader. Do not create visual containers merely to decorate the diagram.
- Prefer fewer, larger conceptual groups with a small number of child actors. If grouping still leaves the diagram crowded, remove less important actors or create multiple diagrams, each with one clear purpose.
- Use short node and container labels. Let the layout engine position actors unless its default result is unreadable.

## Visual Differentiation

- Use distinct, accessible fill and border colors for actors from different categories. Actors in the same category may and normally should reuse the same color treatment.
- Use typography such as font weight, font style, or a project-compatible font family to reinforce meaningful differences between actor categories. Actors in the same category may reuse the same typography.
- Keep each category's color and typography consistent within the diagram and across related diagrams.
- Do not rely on color alone. Preserve explicit labels and visible group boundaries so the categories remain understandable in grayscale and for readers with color-vision differences.
- Keep text-to-background contrast readable and avoid using so many visual variants that the category system becomes harder to understand than the relationships it explains.

## Mermaid Requirements

Every generated HTML page must include the Mermaid ESM module in `<head>` so inline Mermaid diagrams render:

```html
<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true, theme: 'neutral' });
</script>
```

- Use `<pre class="mermaid">` for Mermaid definitions. Do not wrap them in `<code>` tags.
- Prefer Mermaid over static SVG for architecture diagrams, data-flow diagrams, component relationships, sequences, and state machines because the definition remains maintainable alongside the code.
- Use Mermaid `subgraph` containers when related child actors belong inside a larger entity.
- Use Mermaid classes, `classDef`, or theme variables to apply the category colors and typography required by this reference.
- The Mermaid theme may be adjusted to match the documentation stylesheet. Use `neutral` as the default.

## Static Visuals And Directory Trees

- Reserve static SVG files under `docs/assets/` for diagrams that need precise custom layout, branding elements, or visual detail that Mermaid cannot express.
- Keep all static SVG and other diagram assets outside the HTML files under `docs/assets/`.
- In static SVG diagrams, shorten, wrap, or fit labels so text stays inside its visual container.
- When showing a representative directory layout, prefer a visual tree component over a raw ASCII directory dump when the tree is easier to scan. Preserve the real file and folder names.

## Review Checklist

- Confirm the diagram has a concise title and an italic subtitle.
- Confirm its actors, relationships, and containment boundaries match the implementation.
- Confirm related actors are grouped inside meaningful larger entities rather than spread across a flat canvas.
- Confirm the diagram contains only the actors required for its stated purpose and remains readable at desktop and mobile widths.
- Confirm distinct actor categories use consistent, accessible colors and typography, while actors in the same category share the same visual treatment.
- Confirm Mermaid and static assets follow the placement and markup rules in this reference.
