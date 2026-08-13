# Detect Main Behaviors Design Summary

## Introduction

The `detect-main-behaviors` skill identifies the small set of behaviors that define how a project achieves its primary purpose. It supplies an evidence-backed analysis to `gamp-specs` and does not modify the inspected repository.

## Core Content

Detection begins with the project's intended outcome and traces the implemented paths that produce it. A behavior qualifies when it represents a primary purpose path, covers a substantial part of the project, exposes an essential API or command, preserves the active consequence of a direction-changing decision, or forms the architectural skeleton used by major workflows. Complexity or code size alone does not qualify a candidate.

The analysis excludes ordinary helpers, leaf features, optional interfaces, speculative plans, and implementation details. It reports accepted and rejected candidates with repository-relative evidence, confidence, boundaries, and conflicts. The accepted set is passed to `gamp-specs`, which owns DS numbering, specification prose, matrix generation, and documentation updates.

## Conclusion

The skill provides a narrow, auditable boundary between repository analysis and specification generation so the Main Behavior DS records only the project's defining behaviors.
