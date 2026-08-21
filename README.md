# DocumentationSkills

DocumentationSkills is a reusable catalog of self-contained instruction bundles and supporting utilities for maintaining technical documentation as an implementation-backed contract. Consumers copy the skill folders they need and retain each skill’s local references, examples, scripts, and assets.

## Using the catalog

Choose the skill whose description matches the task, read its complete `SKILL.md`, and copy the full `skills/<skill-name>/` directory into the consuming environment. Preserve all local references, examples, scripts, assets, and metadata because they are part of the portable contract.

## Skills

| Skill | Responsibility |
| --- | --- |
| [`achilles-specs`](docs/achilles-specs.html) | Adds AchillesAgentLib dependency resolution, runtime configuration, model-tier, and LLMAgent conventions to a project bootstrap. |
| [`article-build`](docs/article-build.html) | Incrementally rebuilds research articles from article-owned plans, chapters, bibliography evidence, and SVG assets. |
| [`detect-main-behaviors`](docs/detect-main-behaviors.html) | Analyzes a project to identify the small evidence-backed set of behaviors that define its primary purpose. |
| [`gamp-specs`](docs/gamp-specs.html) | Creates and synchronizes repository onboarding, agent guidance, HTML documentation with a required Documentation Map and reading flow, and design specifications. |
| [`review-specs`](docs/review-specs.html) | Performs a read-only structural, syntactic, semantic, navigation, Documentation Map, reading-flow, and terminology audit of repository documentation. |

## Repository layout

- `skills/` contains the distributed skill folders.
- `docs/index.html` is the technical documentation entry point.
- `docs/specs/` contains the authoritative design specifications.
- `docs/specsLoader.html?spec=matrix.md` opens the generated specification matrix.
- `AGENTS.md` defines the mandatory reading order for repository work.
- `fileSizesCheck.sh` checks source-file size and line-length limits.

## Maintenance

When a skill changes, update its descriptor and local artifacts together with the corresponding HTML page and DS specification. Keep DS numbering contiguous, regenerate `docs/specs/matrix.md`, and verify documentation links before publishing.
