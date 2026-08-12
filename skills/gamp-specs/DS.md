# GAMP Specs Design Summary

## Introduction

This skill defines how a project creates and maintains its README, HTML documentation, agent guidance, design specifications (DS files), and coding-style reference. It preserves the former `gamp-structure` behavior and adds synchronization rules for repositories that contain a catalog of skills.

## Core Content

The skill ties `README.md`, `AGENTS.md`, `docs/`, and `docs/specs/` together. It requires README instructions that let a new user install, configure, start, integrate, or use the project through every path that applies. Across all documents, it requires concrete language, first-use explanations for project-specific terms, a reading order that introduces concepts before relying on them, and feature descriptions that explain purpose before implementation. Documentation must represent the final product contract rather than the repository's intermediate development state: user-facing pages must not report missing code, unfinished work, or “planned” interfaces. Genuine unresolved choices belong in numbered `Decisions & Questions` entries in the affected DS files. Comparisons must identify a practical difference between real alternatives; they must not decorate a direct statement with an obviously undesirable alternative. The skill also defines three-digit DS names, gap-free numbering, English persistent content, diagram placement under `docs/assets/`, and numbered `Decisions & Questions` subchapters in ordinary DS files.

When a target project uses WebSkel, GAMP guidance must require `webskel-ui-engineering` and carry its verified coding rules into `DS001-coding-style.md`. The target documentation must define WebSkel-specific terms from that guidance before using them.

## Conclusion

Future project bootstraps must use this skill as the starting point for repository documentation rules. Changes to project layout, DS policy, coding-style rules, reader onboarding, or documentation synchronization must be reflected here first.
