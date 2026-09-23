# DocumentationSkills

DocumentationSkills is a reusable catalog of self-contained instruction bundles for documenting software, reviewing technical writing, and explaining consequential coding work. Consumers copy the skill folders they need and retain each skill’s local references, examples, scripts, and assets.

## Using the catalog

Choose the skill whose description matches the task, read its complete `SKILL.md`, and copy the full `skills/<skill-name>/` directory into the consuming environment. Preserve all local references, examples, scripts, assets, and metadata because they are part of the portable contract.

When `node-coding-style` is available, use it as the default for coding tasks unless explicit user or project guidance selects another style. It specifies dependency-free Node.js `.mjs` code, a project-local or skill-local `dependencies.md`, portable external source when exceptions are needed, and startup checks for required environment dependencies. It asks before converting existing Python skills. The consuming agent must discover and follow the skill; copying a folder alone does not configure every runner.

## Skills

| Skill | Responsibility |
| --- | --- |
| [`achilles-specs`](docs/achilles-specs.html) | Adds AchillesAgentLib dependency resolution, runtime configuration, model-tier, and LLMAgent conventions to a project bootstrap. |
| [`article-build`](docs/article-build.html) | Incrementally rebuilds research articles from article-owned plans, chapters, bibliography evidence, and SVG assets. |
| [`detect-main-behaviors`](docs/detect-main-behaviors.html) | Analyzes a project to identify the small evidence-backed set of behaviors that define its primary purpose. |
| [`gamp-specs`](docs/gamp-specs.html) | Creates and synchronizes repository onboarding, agent guidance, HTML documentation with a required Documentation Map and reading flow, and design specifications. |
| [`node-coding-style`](docs/node-coding-style.html) | Supplies default Node.js `.mjs` coding rules, dependency records and portability requirements, Python conversion prompts, and prerequisite checks. |
| [`review-specs`](docs/review-specs.html) | Performs a read-only structural, syntactic, semantic, navigation, Documentation Map, reading-flow, and terminology audit of repository documentation. |
| [`summarize-agent-impact`](docs/summarize-agent-impact.html) | Explains the impact of an agent's important decisions or completed work in plain language. |
| [`unslop`](docs/unslop.html) | Edits prose to remove formulaic AI writing patterns while preserving meaning and the intended tone. |

## Repository layout

- `skills/` contains the distributed skill folders.
- `docs/index.html` is the technical documentation entry point.
- `docs/specs/` contains the authoritative design specifications.
- `docs/specsLoader.html?spec=matrix.md` opens the generated specification matrix.
- `AGENTS.md` defines the mandatory reading order for repository work.
- `fileSizesCheck.sh` checks source-file size and line-length limits.

## Maintenance

When a skill changes, update its descriptor and local artifacts together with the corresponding HTML page and DS specification. Keep DS numbering contiguous, regenerate `docs/specs/matrix.md`, and verify documentation links before publishing.
