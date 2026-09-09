---
title: DS007-node-coding-style
summary: Default Node.js .mjs coding rules, dependency exception records, portable external source, Python conversion decisions, and startup prerequisites.
---

# Node Coding Style

## Introduction

This specification defines the catalog contract for `node-coding-style`. The complete skill folder is the portable unit and contains no executable or third-party dependency.

## Core Content

When available for a coding task, the skill must supply the default unless explicit user or project instructions specify another approach. It must preserve scoped overrides and public interfaces and must not authorize unrelated rewrites. Generated executable code uses Node.js `.mjs` ECMAScript modules, async/await, explicit exports, built-ins, and local resources. Project guidance must preserve the effective default when guidance is initialized or updated as part of the task. Skill discovery is performed by the consuming agent environment; a folder copy alone does not guarantee invocation by every runner.

Dependencies must be avoided or eliminated where practical. Python or an external library or CLI may be used when no suitable equivalent meets the requirement, with preference for small standalone components and minimal transitive dependencies. Accepted external source must be pinned and preferably retained under project-local or skill-local `external/`, including its license, notices, assets, and local changes. A copied skill must not depend on hidden catalog-root imports, sibling directories, or undocumented environment installations.

The project or owning skill must keep `dependencies.md`, including an explicit empty inventory when applicable. Every direct, transitive, vendored, build, browser/CDN, or environment dependency must have a record of purpose, scope, required/optional status, version/revision, location, acceptance reason, rejected alternatives, authorization, upstream source URL, update URL/procedure, exact license and obligations, local modifications, startup check, installation instructions, and removal opportunity. Applicable approvals must be honored without requesting the same authorization again. MIT and Apache-2.0 are preferred; LGPL is permitted exceptionally with its actual limited-copyleft obligations documented. Unknown or incompatible licensing must not be treated as an accepted exception.

When executable Python skill logic is discovered, the agent must ask once whether to convert the relevant skills unless a prior decision or explicit requirement already applies. Silence does not authorize conversion. An authorized conversion must preserve interfaces and outputs, validate representative behavior, and remove obsolete requirements only after checking remaining consumers.

Unavoidable heavy dependencies may require an authorized global/environment installation. Mandatory availability and version/capability checks must run before application or affected skill-script work. A missing or incompatible prerequisite must cause an actionable stderr error and nonzero exit before side effects. Optional dependencies must be checked only when their feature is selected. Startup must not install dependencies or modify operating-system boot configuration.

`SKILL.md` owns the operational instructions, `DS.md` the portable design summary, `skill.json` the catalog metadata, `dependencies.md` the skill's empty dependency inventory, and `assets/dependencies.md` the consumer record template. All must survive copying the folder. GAMP must incorporate this default when available without adding a hard dependency on the skill.

## Decisions & Questions

### Question #1: Which coding instructions take precedence?

Response: Explicit user and project requirements override the default in their applicable scope. Existing Python implementations trigger a conversion question, not an automatic rewrite.

### Question #2: Where do dependency records belong?

Response: The project owns its root `dependencies.md`. A portable skill keeps its own complete dependency record inside its folder so the record survives copying the skill.
