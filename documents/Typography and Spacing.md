## Purpose

This document outlines the **Typography and Spacing** standards for the Mintrix ecosystem. 

Like everything in an Editorial Intelligence application, type is not just "text on a screen." It is the primary means of navigating high-density cognitive tasks and reducing alarm fatigue for Principals and Teachers.

---

## 1. Primary Typestyle: Plus Jakarta Sans
We utilize `Plus Jakarta Sans` as the overarching structural typeface. It balances geometric modernism with high legibility in dense numerical environments. 

*   **Weight Mapping**:
    *   `font-bold (700)`: Used exclusively for Noun-level Object Headers (e.g., **Class 10 Biology**, **Approval Required**).
    *   `font-medium (500)`: Used for micro-labels, toggles, and primary navigation elements.
    *   `font-normal (400)`: The fallback reading weight for paragraph text (e.g., The "View Why" AI rationale body text).

---

## 2. Secondary Typestyle: Inter
`Inter` is utilized strictly as a data-visualization and numeric utility font. 

*   **Usage Rule**: If the element represents tabular data, rolling metrics, or tightly packed financial outputs, use `Inter` for its superior kerning and tabular numeral alignment.

---

## 3. Typographic Scaling & Rhythm

Mintrix relies on extreme shifts in scale to command attention during triage, rather than relying on bright colors.

*   `text-[5.5rem]`: The Hero Scale. Reserved strictly for ambient un-authenticated landing pages or macro-level root hubs.
*   `text-3xl (30px)`: The Surface Header. Used to demarcate entirely distinct Surface families (e.g., The top of the `Exception Center`).
*   `text-xl (20px)`: The Noun Scale. Used for individual `Event Cards`.
*   `text-sm (14px)`: The Micro-Data Scale. Used for timestamping and dense metadata (e.g., `Dec 14th, 08:30 AM`).

---

## 4. Spacing Rules (The Deep Margin)

Because Mintrix avoids pixel borders (The No-Line Philosophy), spacing *is* the boundary.

*   **P-10 (40px) Surface Padding**: `Event Cards` and wide layout containers use luxurious 40px internal padding. This explicitly isolates cognitive objects. A Judgment Card sitting in the `Approval Inbox` demands focus, so it buffers itself with massive whitespace.
*   **Gap-8 (32px) Grid Rhythm**: When looping over an array of multiple objects (e.g., rendering 5 active classes for a Teacher's `Daily Workpace`), the gap between cards must never be less than 32px. Tight gaps create enterprise UI clutter.

### Summary
To design a successful Mintrix screen: Increase the font size of the primary object, decrease the font size of the metadata by 2 levels, remove the borders, and double the `padding`.
