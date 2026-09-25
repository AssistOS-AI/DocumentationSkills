---
name: web-design
description: Design and review clean HTML and CSS interfaces for desktop pages. Use when building or changing web pages, forms, dialogs, navigation, layouts, or themes, and when the user asks for a good-looking, well-spaced UI.
---

# Web design

Apply these rules when creating or reviewing HTML and CSS interfaces. They describe the desktop version by default. When the user also requires a mobile version, design and verify the responsive behavior for small screens as well.

## Structure and navigation

1. **Never open a popup inside a popup.** Nested modals look broken and trap the user. Move the inner content to a separate page, or turn the steps into tabs inside one surface.
2. **Prefer pages and tabs over stacked overlays.** When one popup would open another, use a real navigation change or a tab strip in the same surface. Keep overlays for a single, self-contained task.
3. **One decision per surface.** Confirmations, short forms, and pickers stay small and focused. Anything with multiple steps or sections is a page or a tabbed surface, not a chain of dialogs.

## Popups and dialogs

4. **Scale the surface to the content.** When a popup collects many fields or a lot of information, make it large: between 80% and 100% of the viewport on both the vertical and horizontal axes. Small centered popups are only for short confirmations and single questions.
5. **Do not force content into a small centered box.** If the content needs scrolling inside a cramped dialog, the dialog is too small. Grow it or move the task to a page.

## Forms and inputs

6. **Textareas never resize.** Set `resize: none` on every textarea so the layout does not shift while the user types.
7. **Input width follows expected content.** Before building an input, estimate how much text the answer needs, then size the control. A `Name` field that expects two or three words stays narrow. Do not stretch a short field across the page.
8. **Group and compact related fields.** Arrange fields in a sensible grid and keep them tight on the horizontal axis. Reclaim the free space for content rather than for empty inputs.
9. **Labels and help sit with their control.** Keep each label, hint, and error next to its input so the form reads as one unit.

## Spacing

10. **Keep page padding moderate.** Avoid wasted space. Around `40px` is a good target for desktop pages.
11. **Large padding only for a deliberate book-like page.** Extra whitespace is acceptable when the user asks for a reading or article layout that imitates a book. Otherwise, keep it restrained.

## Depth and layering

12. **Avoid box-in-box-in-box.** Keep at most two or three defined box layers, such as a page surface, a section, and a single nested panel. Deeper nesting becomes tiring to read.
13. **Re-check the layers after implementing.** Review the finished design and count the visible boxes. If there are too many, remove outlines and signal grouping another way, such as spacing, alignment, a lighter background, or a single divider.

## Responsive and theming

14. **Desktop by default, responsive when asked.** These rules target the desktop version. If the user mentions a mobile version, also design and verify the layout at small widths.
15. **Maintain dark mode alongside the light mode.** If the user requires dark mode, implement both and keep them synchronized for every new color, border, and surface. A new element added in one theme must exist in the other.

## Self-check before finishing

- Confirm no popup opens another popup.
- Confirm large forms use a large surface, not a cramped dialog.
- Confirm every textarea sets `resize: none`.
- Confirm each input is sized to its expected content and not stretched without reason.
- Confirm page padding is moderate unless a book-like page was requested.
- Confirm the visible box layers stay within two or three.
- Confirm the responsive layout when a mobile version was requested.
- Confirm dark mode matches the light mode when dark mode was requested.
