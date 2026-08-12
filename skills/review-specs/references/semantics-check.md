# Semantics Check

This reference defines the content and language review performed after syntax and flow checks. The goal is to determine whether a new reader can understand the product and move through its documentation without relying on source-code knowledge.

## 1. Read in user order

Start at the home page, follow the primary navigation, open secondary pages from their parent pages, and then read the specifications reached through the documented matrix or loader. Read each page from its first sentence to its conclusion. Do not judge isolated paragraphs without checking the transitions around them.

For every principal page, ask:

- **Why:** Why does this project, subsystem, or page exist? What user problem does it address?
- **What:** What are the actors, components, inputs, outputs, responsibilities, and boundaries?
- **How:** How does the described workflow operate, and what observable result does it produce?

The page does not need literal `Why`, `What`, and `How` headings. The reader must be able to answer those questions from the order and content of the prose.

Example of a weak home page:

> “ALA is an extensible capability layer for intelligent workflows.”

This names no user, task, input, output, or reason. Report that the home page should say who invokes ALA, what kind of instruction it accepts, what result it returns, and why task repositories exist.

Example of a stronger version:

> “ALA gives people and other agents one command-line entry point for research, documentation, and language transformations. It accepts an instruction plus optional input, selects a task-specific A-Skill, and returns the result while keeping routing diagnostics separate.”

## 2. First-use terminology

At the first occurrence of every project-specific term, acronym, component, or architectural concept, verify that the surrounding sentence gives a plain-language definition. A link to another page may provide depth, but it cannot replace a first-use explanation.

Examples:

- Good: “An A-Skill is an Achilles skill that defines the method for one task family.”
- Weak: “The router invokes the A-Skill.” If neither “router” nor “A-Skill” has been defined, report both terms.
- Weak: “The subsystem uses semantic mediation.” “Semantic mediation” is abstract unless the text explains which component transforms what data and for what result.

When a term reappears after several sections or on an independently reachable page, check that a short reminder prevents ambiguity. Check for inconsistent names such as `Main Agent`, `MainAgent`, and `main agent` when they refer to one identifier.

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

If the document has not defined “capability resolver”, “deep execution”, or “review loop”, report a coherence and terminology problem. Recommend introducing the actors and sequence before describing escalation.

Check diagrams semantically as well as syntactically. A valid diagram that omits a required actor, reverses the data flow, or uses labels absent from the prose is a semantic defect.

## 4. Prose, bullets, and section density

Documentation should use complete sentences with a subject and predicate for explanation. Bullet points are appropriate for short enumerations, compact option sets, file lists, or quick checks. They should not replace the argument that explains how the listed items relate.

Example of excessive bullets:

```markdown
- ALA accepts instructions.
- ALA selects a skill.
- ALA chooses a model.
- ALA returns a result.
```

When this is the entire explanation, recommend a paragraph or sequence diagram: “ALA accepts an instruction, selects the task skill, resolves an executor, and returns the result.” Keep the list only if the items are being compared or enumerated for a practical reason.

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
- Clearer: “ALA passes the selected task name and session identifier from the CLI request to the executor so a retry can use the same task context.”

Flag “fancy” vocabulary when a simpler word carries the behavior more accurately:

- “utilize” → “use”;
- “facilitate execution” → “start the task” or “let the executor run the task”;
- “capability substrate” → name the concrete service or operation;
- “semantic mediation” → describe the transformation and its input/output.

Professional documentation can use technical terms, but technical style is not a reason to obscure the actor, action, condition, or result.

## 6. Main pages and DS pages

Give the highest attention to the home page, principal feature pages, and DS pages. Check that DS `Core Content` states requirements and boundaries clearly, while `Decisions & Questions` records rationale or unresolved options without contradicting the contract. Check that the matrix title, summary, and status do not misrepresent the subject of the DS.

Report a DS issue when the prose is explanatory but never states what must, should, or may happen; report a user-documentation issue when a contract is technically precise but never explains why the reader should care or how the behavior appears in use.

## 7. Finding format and remediation

Use this form:

`[severity] path — heading or line — observed semantic problem — why a new reader is affected — repair direction for gamp-specs`

Example:

`[warning] docs/architecture.html — “Boundary of responsibility” — “generic capability” is used before the page says whether it is a service, interface, or model category — a new reader cannot tell who performs the operation — define it as an ALA execution requirement and name one concrete example before listing the categories.`

Separate confirmed comprehension failures from stylistic preferences. If a page is clear and concrete, record that it passed rather than adding cosmetic rewrites.
