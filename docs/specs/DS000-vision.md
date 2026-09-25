---
title: DS000-vision
summary: Portable skills for repository documentation, coding style, dependency management, technical review, research articles, prose editing, web interface design, and clear execution summaries.
---

# DocumentationSkills Vision

## Introduction

DocumentationSkills is a portable skill catalog for software documentation and clear communication of coding work. It gives consuming agents and projects explicit operational guidance without requiring repository-level runtime coupling.

## Core Content

The repository must keep every distributed skill self-contained inside `skills/<skill-name>/`. A copied folder must preserve its descriptor, references, examples, scripts, assets, and catalog metadata when those artifacts exist. Root documentation must describe the catalog itself, while downstream projects that import a skill must keep their own documentation focused on the host system.

The design specifications under `docs/specs/` are the source of truth for catalog structure and durable behavior. HTML documentation must remain synchronized with those contracts and with the actual skill folders.

## Conclusion

DocumentationSkills must remain a coherent, implementation-backed catalog whose skill folders can be understood and moved independently.
