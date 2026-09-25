import { readFile, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const moduleDir = dirname(fileURLToPath(import.meta.url));
const defaultRepoRoot = resolve(moduleDir, '../../..');
const requiredSkillFiles = ['SKILL.md', 'DS.md'];

function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) {
    return {};
  }

  const endIndex = markdown.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return {};
  }

  const values = {};
  for (const line of markdown.slice(4, endIndex).trim().split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) {
      values[match[1]] = match[2];
    }
  }

  return values;
}

async function readSkillDefinition(repoRoot, skillId) {
  const skillDir = resolve(repoRoot, 'skills', skillId);
  const [descriptor, designSpec] = await Promise.all([
    readFile(resolve(skillDir, 'SKILL.md'), 'utf8'),
    readFile(resolve(skillDir, 'DS.md'), 'utf8')
  ]);
  const frontmatter = parseFrontmatter(descriptor);

  return {
    id: skillId,
    directory: `skills/${skillId}`,
    descriptorPath: `skills/${skillId}/SKILL.md`,
    designSpecPath: `skills/${skillId}/DS.md`,
    descriptor,
    designSpec,
    title: frontmatter.name ?? skillId,
    summary: frontmatter.description ?? '',
    aliases: [...new Set([skillId, frontmatter.name].filter(Boolean))],
    dependsOn: [],
    entrypoints: [`skills/${skillId}/SKILL.md`, `skills/${skillId}/DS.md`],
    selfContained: true
  };
}

async function readSkillCatalog(repoRoot = defaultRepoRoot) {
  const skillEntries = await readdir(resolve(repoRoot, 'skills'), { withFileTypes: true });
  const directoryNames = skillEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const catalogCandidates = await Promise.all(
    directoryNames.map(async (skillId) => ({
      skillId,
      files: new Set(await readdir(resolve(repoRoot, 'skills', skillId)))
    }))
  );
  const skillIds = catalogCandidates
    .filter(({ files }) => requiredSkillFiles.every((requiredFile) => files.has(requiredFile)))
    .map(({ skillId }) => skillId)
    .sort((left, right) => left.localeCompare(right));

  return Promise.all(skillIds.map((skillId) => readSkillDefinition(repoRoot, skillId)));
}

function validateSkillCatalog(skillCatalog) {
  const knownIds = new Set(skillCatalog.map((skill) => skill.id));
  const issues = [];

  for (const skill of skillCatalog) {
    for (const dependency of skill.dependsOn) {
      if (!knownIds.has(dependency)) {
        issues.push(`${skill.id} depends on unknown skill ${dependency}.`);
      }
    }

    if (!skill.selfContained) {
      issues.push(`${skill.id} must remain self-contained.`);
    }

    if (!skill.descriptorPath) {
      issues.push(`${skill.id} is missing SKILL.md.`);
    }

    if (!skill.designSpecPath) {
      issues.push(`${skill.id} is missing DS.md.`);
    }
  }

  return issues;
}

export { defaultRepoRoot, parseFrontmatter, readSkillCatalog, readSkillDefinition, validateSkillCatalog };
