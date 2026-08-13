---
name: detect-main-behaviors
description: Analyze a software project's source code, documentation, public interfaces, architecture, tests, and development evidence to identify the small set of behaviors that define how the project fulfills its primary purpose. Use before gamp-specs creates or updates the project's Main Behavior design specification, or when a project change may have altered its central execution paths, essential APIs or commands, architectural skeleton, broad subsystems, or active product direction.
---

# Detect Main Behaviors

## Overview

Identify the behaviors that define the project as a product and return an evidence-backed handoff for `gamp-specs`. Perform analysis only; do not create or edit DS files or other repository content.

## Analysis Workflow

### 1. Establish the project purpose

- Read `README.md`, `AGENTS.md`, existing HTML documentation, DS files, manifests, entry points, and user-facing commands or APIs.
- Inspect source code and tests to verify which documented outcomes and workflows are implemented.
- Use repository history or recorded rationale only when needed to confirm a development decision that changed the project's direction and still affects its current contract.
- State the project's primary purpose as one concrete outcome: who or what uses the project, which problem it solves, and what result it produces.
- Distinguish the primary purpose from supporting concerns such as logging, formatting, generic storage, build tooling, or incidental integrations.

### 2. Trace the primary paths

- Start from public entry points, essential commands, or required API calls and follow them through the components that produce the project's primary outcome.
- Record the initiating actor, trigger or input, major processing stages, important boundary crossings, output, and observable effect for each path.
- Confirm each path with source and test evidence. Documentation describes intent but does not by itself prove implemented behavior.
- Consolidate paths that are variations of one central behavior. Keep separate paths only when they produce materially different primary outcomes or preserve different system-wide contracts.

### 3. Apply the inclusion criteria

Classify a candidate as a main behavior when evidence establishes at least one of these conditions:

- **Primary-purpose path:** it is a principal end-to-end path through which the project achieves its central purpose.
- **Broad project coverage:** the feature, behavior, or component governs a substantial portion of the repository or coordinates several major subsystems.
- **Essential public interface:** it is an API, command, protocol, or entry point without which the project's essential use case cannot be completed.
- **Direction-changing decision:** it is an adopted development decision that materially redirected the product and whose consequence remains part of the active contract. Record the current consequence, not a chronological development diary.
- **Architectural skeleton:** it defines the structural backbone that major workflows depend on, including system-wide boundaries, orchestration, ownership, lifecycle, or data movement.

A candidate does not become a main behavior merely because it is complex, has many lines of code, has a public symbol, or appears prominently in one document. Explain how it affects the primary purpose or a large portion of the system.

### 4. Exclude secondary material

- Exclude leaf utilities, internal helpers, formatting, logging, isolated adapters, narrow configuration switches, and ordinary implementation details unless they satisfy an inclusion criterion independently.
- Exclude optional APIs and commands that do not participate in an essential project outcome.
- Exclude aspirations, abandoned directions, speculative architecture, and documentation claims unsupported by the implementation or an authoritative active contract.
- Exclude details already owned by a specialized DS when the Main Behavior DS only needs a short reference to the larger behavior.
- Prefer a small, discriminating set. If the candidate list resembles a feature catalog, repeat the purpose and coverage analysis and remove secondary entries.

### 5. Resolve evidence and conflicts

- Cite repository-relative paths and identifying symbols, headings, tests, commands, or commits for every included behavior.
- When documentation and code disagree, report the conflict and use the narrowest claim supported by the authoritative current evidence.
- Do not infer a system-wide behavior from a component name or directory name.
- Mark confidence as `high`, `medium`, or `low`. Do not present a low-confidence candidate as accepted without explaining the missing evidence.

## Handoff To GAMP Specs

Return the analysis in this order:

1. `Project purpose` — one concise statement of the central outcome.
2. `Evidence reviewed` — the code, documentation, tests, interfaces, and history used.
3. `Accepted main behaviors` — one entry per accepted behavior containing:
   - name;
   - classification from the inclusion criteria;
   - declarative behavior statement;
   - initiating actor and trigger;
   - primary path and observable result;
   - project-wide boundary or invariant;
   - inclusion rationale;
   - evidence paths and symbols;
   - confidence.
4. `Rejected candidates` — plausible features excluded as secondary, with a short reason.
5. `Evidence conflicts and unspecified boundaries` — only confirmed conflicts or missing contract details, written as statements rather than questions.

Keep the handoff factual and compact. Do not write the final DS, assign a DS number, edit the matrix, or change project documentation. `gamp-specs` owns those actions.

## Quality Check

- Confirm the project purpose is supported by implementation and documentation evidence.
- Confirm every accepted behavior satisfies at least one inclusion criterion and explains its connection to the project purpose.
- Confirm essential commands and APIs were evaluated even when their implementations are small.
- Confirm broad components and architectural elements were evaluated by their system-wide effect rather than their size alone.
- Confirm active direction-changing decisions describe their present contractual consequence.
- Confirm the accepted set contains only the project's defining behaviors and is not a general feature inventory.
- Confirm all claims have repository-relative evidence and all uncertainties are explicit.
