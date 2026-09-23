---
name: summarize-agent-impact
description: Explain the impact of an agent's important decision or consequential completed work in a short, plain-language summary. Skip routine steps and minor edits.
---

# Summarize agent impact

Use this skill when reporting an agent decision that changes the direction or scope of work, or after completing work that materially changes a feature, user behavior, operation, or project outcome. A substantial fix or a decision to leave a requested behavior unimplemented also qualifies. Do not invoke it for routine tool calls, minor edits, or repeated progress notes about the same outcome.

Add one summary block to the relevant user-facing message. If several related actions lead to one outcome, summarize them together. Put the block after any detail the user needs for review, usually at the end of the message. Use the literal marker `<<summarize-agent-impact>>` on its own line before and after the text. The second marker is identical to the first; it is not an HTML closing tag. Do not wrap the block in a code fence.

<<summarize-agent-impact>>
Plain-language summary.
<<summarize-agent-impact>>

Inside the block, explain what was decided or completed and why it matters to the user. For implemented work, describe the behavior before and after when that distinction helps. If a decision has not been implemented, say so clearly. Mention a material limit or unfinished part when omitting it would give the wrong impression.

Write in the user's language. Assume the reader does not know the project's internal details. Prefer a short paragraph of two to four sentences; use fewer or more only when clarity calls for it. Use technical terms only when needed, and explain them in ordinary words. Leave code details, file lists, command logs, and detailed test results outside the block. Do not claim an outcome that the work or evidence does not support.

Example:

<<summarize-agent-impact>>
I changed how the app saves the form. If the internet connection drops, the entered information stays on screen so the user can try again instead of filling out the form from scratch.
<<summarize-agent-impact>>
