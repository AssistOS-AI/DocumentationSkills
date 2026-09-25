---
title: DS001-coding-style
summary: Defines default Node.js .mjs code, dependency exceptions, portable source layout, documentation synchronization, and validation rules.
---

# Coding Style

## Introduction

This specification is the coding-style, source-layout, and test-organization authority for DocumentationSkills.

## Core Content

Persistent documentation, specifications, descriptors, and code comments must be written in English. The available `node-coding-style` skill supplies the default when no explicit user or project instruction specifies another style. New executable code must use Node.js `.mjs` ECMAScript modules, async/await for asynchronous control flow, explicit exports, and focused functions with narrow responsibilities. Built-ins and local code are the default; external dependencies must not be introduced without explicit approval. Existing documented interfaces and platform requirements remain valid until an authorized migration changes them.

Dependencies must be eliminated or avoided where practical. A requirement without a suitable equivalent may justify Python or an external library or tool, with preference for small standalone source pinned under the project's or owning skill's `external/` folder. The relevant `dependencies.md` must record direct and transitive dependencies, accepted reasons and alternatives, authorization, versions, licenses and notices, upstream source/update URLs, local changes, startup checks, and removal opportunities. The complete exception contract is defined in DS007 and the portable `node-coding-style` descriptor.

Discovery of executable Python skills requires a conversion question unless explicit project guidance or a prior session decision already settles it. Conversion must preserve interfaces and requires authorization. Unavoidable heavy environment dependencies require installation authorization and availability/version checks before application startup or affected skill-script work. Missing or incompatible required dependencies must produce actionable stderr errors and nonzero exit status before side effects. Optional dependencies must be checked only for their selected feature.

Skill-specific implementation, references, examples, tests, templates, and assets must remain inside the owning skill folder unless a repository-wide validation concern genuinely applies to every skill. A root production `src/` tree must not become a hidden dependency for portable skills. Repository-level tests, when present, should be grouped by the skill or shared contract they validate and must use deterministic fixtures rather than machine-specific paths or secrets.

Files should remain focused and reviewable. Run `./fileSizesCheck.sh` after substantial changes and split files when size or line length obscures responsibilities. Documentation changes must regenerate `docs/specs/matrix.md`, verify local HTML and asset links, and test browser-resolved resources over HTTP when partials or relative assets are involved.

## Conclusion

Repository changes must preserve modular skill folders, explicit contracts, deterministic validation, and synchronized documentation.
