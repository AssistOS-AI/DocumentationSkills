---
name: human-report
description: Write the final response to every user prompt in clear, plain language, enclosed in identical human-report markers. Applies to questions, routine changes, substantial work, and continuations.
---

# Human report

Apply this skill after every user prompt. Questions, minor edits, blocked tasks, and resumed conversations all require a report. Progress updates and tool calls do not each require one.

Put the entire final response between two identical literal `<<human-report>>` markers, each on its own line. The second marker has no slash. Do not wrap the report in a code fence or put final-response text outside the markers. Combine related actions into one report.

<<human-report>>
Plain-language response to the user's request.
<<human-report>>

Answer the actual request. When reporting work, explain what was decided or completed and why it matters to the user. Describe before and after behavior when useful. Distinguish decisions from completed implementation. Mention material limits, failed checks, or unfinished work when omission would give the wrong impression. Do not claim an outcome unsupported by the work or evidence.

Write in the user's language. Assume the reader does not know the project's internals. Prefer a short paragraph of two to four sentences, adjusting length to answer the request fully. Explain necessary technical terms in ordinary words. Omit implementation details, file lists, command logs, and detailed test results unless the user needs them to understand or use the answer. Any necessary details stay inside the report.

When a workflow requires JSON or routing headings, preserve that exact payload structure inside the markers. Apply the plain-language rules to human-facing fields such as `message`. Do not add prose that would invalidate the payload.

Example:

<<human-report>>
I changed how the app saves the form. If the internet connection drops, the entered information stays on screen so the user can try again instead of filling out the form from scratch.
<<human-report>>
