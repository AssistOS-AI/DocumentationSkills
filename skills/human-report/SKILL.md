---
name: human-report
description: Write a clear report for every user prompt between identical human-report markers. For explicit workflow output contracts, put the technical payload after the report in the same final response.
---

# Human report

Apply this skill after every user prompt. Questions, minor edits, blocked tasks, and resumed conversations all require a report. Progress updates and tool calls do not each require one.

Write one final response with exactly one report between two identical literal `<<human-report>>` markers, each on its own line. The second marker has no slash. Do not wrap the report in a code fence. Combine related actions into one report. Use the markers only to delimit the actual report; do not reproduce them in progress messages, formatting explanations or draft examples.

For ordinary chat and tasks without an explicit machine-readable output contract, the report is the entire final response. Do not append a second answer outside the markers.

<<human-report>>
Plain-language response to the user's request.
<<human-report>>

Answer the actual request. When reporting work, explain what was decided or completed and why it matters to the user. Describe before and after behavior when useful. Distinguish decisions from completed implementation. Mention material limits, failed checks, or unfinished work when omission would give the wrong impression. Do not claim an outcome unsupported by the work or evidence.

Write in the user's language. Assume the reader does not know the project's internals. Prefer a short paragraph of two to four sentences, adjusting length to answer the request fully. Explain necessary technical terms in ordinary words. Omit implementation details, file lists, command logs, and detailed test results unless the user needs them to understand or use the answer. Any necessary details stay inside the report.

When the caller explicitly requires workflow routing, child delegation or graph-generation output, use two consecutive parts in the same final response. First write the plain-language report between the markers. Then put the required technical Markdown or JSON payload after the closing marker, outside the report. Keep control fields such as nextEdgeId and workflow definitions outside the report. Do not add explanations around the payload or duplicate the report in an optional message field. Use that field only for additional context the workflow needs. The runtime chooses the output contract; do not infer one from the robot name or invent control fields for an ordinary chat.

Example:

<<human-report>>
I changed how the app saves the form. If the internet connection drops, the entered information stays on screen so the user can try again instead of filling out the form from scratch.
<<human-report>>
