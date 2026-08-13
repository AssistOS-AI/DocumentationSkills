# Semantics Check

This reference defines the content and language review performed after syntax and flow checks. The goal is to determine whether a new reader can understand the product and move through its documentation without relying on source-code knowledge.

All examples in this reference use fictional, project-neutral terminology. Examples must demonstrate documentation principles without importing names, components, or architecture from a project previously reviewed with this skill.

## Preservation baseline

Treat correct, understandable, and compliant documentation as protected content. Do
not propose alternate wording, formatting, section organization, diagrams, or prose
style when the existing material already communicates its contract clearly. A
different formulation is not evidence of a defect.

Create a finding only when evidence identifies a negative effect on accuracy,
new-user comprehension, coherence, navigation, consistency, accessibility, or an
applicable repository rule. Make the remediation as narrow as possible and preserve
the surrounding content that already works.

## 1. Read in user order

Start at the home page, follow the primary navigation, open secondary pages from their parent pages, and then read the specifications reached through the documented matrix or loader. Read each page from its first sentence to its conclusion. Do not judge isolated paragraphs without checking the transitions around them.

For every principal page, ask:

- **Why:** Why does this project, subsystem, or page exist? What user problem does it address?
- **What:** What are the actors, components, inputs, outputs, responsibilities, and boundaries?
- **How:** How does the described workflow operate, and what observable result does it produce?

The page does not need literal `Why`, `What`, and `How` headings. The reader must be able to answer those questions from the order and content of the prose.

Example of a weak home page:

> “TaskRunner provides an extensible execution layer.”

This names no user, task, input, output, or reason. Report that the home page should say who uses TaskRunner, which problem it solves, what input it accepts, and what result it returns.

Example of a stronger version:

> “TaskRunner is a command-line application that lets analysts run reusable data-processing tasks. An analyst supplies an input file and selects a task; TaskRunner validates the input, runs the selected operation, and writes the result to an output file.”

## 2. Definitions and terminology

First determine whether an HTML documentation page introduces any new project-specific terms, acronyms, named components, or architectural concepts. If it does, require a visible `Definitions` section covering those terms. If it introduces no new terminology, the section is optional and its absence is not a finding. Common language and standard platform terms do not need entries unless the project gives them a specialized meaning.

For every term introduced by a page, verify all of the following:

- the page's `Definitions` section contains a corresponding entry;
- a locally defined term has a stable anchor and a concise, evidence-backed definition;
- when another page owns the canonical definition, the local entry links to that exact page and definition anchor instead of duplicating potentially divergent wording;
- every occurrence of the defined term outside the `Definitions` section links to the local or canonical definition anchor, including occurrences in headings, lists, captions, and callouts;
- headings, lists, diagrams, captions, navigation labels, and callouts do not leave the reader without a usable path to the definition.

Do not report an inline explanation as a defect merely because the page also has a `Definitions` section. Inline definitions remain useful when they preserve comprehension. The section is especially important when inserting the explanation into a sentence would interrupt the narrative.

Examples:

- Good inline definition: “A <a href="#definition-task-module">task module</a> is a reusable package containing the instructions and optional code required to perform one type of operation.” The page also records `Task module` under `Definitions` with a stable anchor, and later occurrences use the same link.
- Good linked definition: “The router invokes the <a href="#definition-task-module">task module</a>.” Every later occurrence of `task module` links to the same definition without interrupting the workflow.
- Good canonical reference: the local `Definitions` entry says `Task module — See the definition on the Runtime page` and links to `runtime.html#definition-task-module`.
- Weak: “The subsystem uses semantic mediation.” The page neither explains the term inline nor provides a linked, evidence-backed definition.

When a term reappears after several sections, check that a short reminder or another definition link prevents ambiguity. Check for inconsistent names such as `Task Router`, `TaskRouter`, and `task router` when they refer to one identifier.

## 3. New-user comprehension and coherence

Read as a person who knows nothing about the project. Report:

- a conclusion that appears before the objects or actors it depends on are introduced;
- a transition that changes from architecture to operations without explaining the relationship;
- paragraphs that use “this”, “it”, or “they” without a clear referent;
- claims that contradict another page or a DS file;
- an example that promises behavior the surrounding contract does not define;
- a page that assumes knowledge of an external library without explaining the part it uses.

Example:

> “The capability resolver escalates to deep execution after the review loop.”

If the document has not defined or linked “capability resolver”, “deep execution”, or “review loop”, report a coherence and terminology problem. Recommend defining the actors inline where necessary and adding or linking their entries in the page's `Definitions` section.

Check diagrams semantically as well as syntactically. A valid diagram that omits a required actor, reverses the data flow, or uses labels absent from the prose is a semantic defect.

## 4. Prose, bullets, and section density

Documentation should use complete sentences with a subject and predicate for explanation. Bullet points are appropriate for short enumerations, compact option sets, file lists, or quick checks. They should not replace the argument that explains how the listed items relate.

Example of excessive bullets:

```markdown
- The application accepts a request.
- The application selects a task handler.
- The application processes the input.
- The application returns the result.
```

When this is the entire explanation, recommend a paragraph or sequence diagram: “The application accepts a request, selects the appropriate task handler, processes the supplied input, and returns the result.” Keep the list only if the items are being compared or enumerated for a practical reason.

Check section density. Several headings with one or two sentences each often indicate that one continuous explanation was fragmented for visual structure.

Example:

```markdown
## Input
One sentence.

## Output
One sentence.

## Result
One sentence.
```

If all three describe one request lifecycle, recommend a single “Request lifecycle” section with connected prose and, if useful, one diagram. Do not merge genuinely independent contracts merely to reduce the heading count.

## 5. Concrete language and abstraction

Flag sentences that do not identify who acts, what changes, which data moves, under what condition, or what result follows. Explain the missing actor or action and suggest a concrete direction.

Examples:

- Too abstract: “The system provides a robust capability surface.”
  - Ask: Which component exposes which operation to whom?
- Too abstract: “Context is propagated through the orchestration layer.”
  - Ask: Which context fields are copied, from which caller, to which executor, and why?
- Clearer: “The command-line handler passes the selected task name and session identifier to the task executor so that a retry can use the same request context.”

Flag “fancy” vocabulary when a simpler word carries the behavior more accurately:

- “utilize” → “use”;
- “facilitate execution” → “start the task” or “let the executor run the task”;
- “capability substrate” → name the concrete service or operation;
- “semantic mediation” → describe the transformation and its input/output.

Professional documentation can use technical terms, but technical style is not a reason to obscure the actor, action, condition, or result.

## 6. Main pages and DS pages

Give the highest attention to the home page, principal feature pages, and DS pages. Check that DS `Core Content` states requirements, boundaries, rationale, confirmed limitations, and unresolved contract details as declarative statements. Report any retained question-and-answer design section and direct `gamp-specs` to convert resolved answers into requirements or rationale and unresolved material into statements that distinguish confirmed behavior from unspecified boundaries. Check that the matrix title, summary, and status do not misrepresent the subject of the DS.

Report a DS issue when the prose is explanatory but never states what must, should, or may happen; report a user-documentation issue when a contract is technically precise but never explains why the reader should care or how the behavior appears in use.

## 7. Finding format and remediation

Use this form:

`[severity] path — heading or line — observed semantic problem — why a new reader is affected — repair direction for gamp-specs`

Example:

`[warning] docs/architecture.html — “Processing components” — “execution capability” has no inline explanation, local definition entry, or canonical definition link — a new reader cannot identify whether it refers to a service, interface, or operation — add an evidence-backed entry under Definitions and link the term to it; retain an inline explanation if the distinction is needed immediately.`

Separate confirmed comprehension failures from stylistic preferences. Omit
stylistic preferences from findings and remediation guidance. If a page is clear and
concrete, record that it passed rather than adding cosmetic rewrites or replacement
wording.
