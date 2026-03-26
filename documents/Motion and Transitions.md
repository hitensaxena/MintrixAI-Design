## Purpose

This document defines the **Motion and Transitions** standards for the Mintrix AI OS.

In Mintrix, motion is not decorative animation. It is a communication mechanism — a way to tell the user what the system is doing, where data came from, and what just changed. Excessive motion induces anxiety in high-stress environments. Insufficient motion makes the UI feel broken.

---

## 1. The Motion Philosophy

**The Calm Machine.** Every transition must reinforce the feeling of a system that is in precise, measured control. Users operating under institutional pressure (Principals during a crisis, Teachers in a 45-minute window) must never feel that the UI is "loading" or "thinking." Motion must convey **instant confidence**.

### Rules
*   **No bouncing, no elastic overshoots.** These imply playfulness. Mintrix is not playful.
*   **No skeleton loaders for primary content.** The system should pre-fetch aggressively. If a skeleton must be shown, it should be a single, smooth fade from `#f8f9fa` to `#ffffff`.
*   **All transitions use easing curves that decelerate.** Content should arrive quickly and settle softly: `cubic-bezier(0.25, 0.1, 0.25, 1.0)`.

---

## 2. Duration Scale

| Token            | Duration   | Usage                                              |
|------------------|------------|-----------------------------------------------------|
| `duration-instant` | `100ms`  | Hover state changes, focus rings, icon color shifts   |
| `duration-fast`    | `200ms`  | Button presses, toggle switches, pill selections     |
| `duration-normal`  | `300ms`  | Card expansions, sidebar slides, panel transitions   |
| `duration-slow`    | `500ms`  | Full-page surface transitions, workspace spawning    |
| `duration-ambient` | `1000ms` | Confidence score gauge animations, ambient data flow |

**Rule:** No UI-critical action may take longer than `300ms` to visually respond. The `500ms` and `1000ms` durations are reserved for background ambient effects.

---

## 3. Transition Types

### Surface Transitions
When a user navigates between major surfaces (e.g., Feed → Approval Inbox), the transition is a **crossfade** (`opacity 0→1`) with a subtle `translateY(8px → 0)` slide. The old surface fades out as the new one fades in. No horizontal slides (this is not a mobile carousel).

### Panel Spawning
When a `Workspace Surface` or `Intelligence Sidebar` spawns:
*   It slides in from the right edge at `duration-normal` (300ms).
*   The primary surface compresses to accommodate it — it does not get obscured.
*   The slide uses `transform: translateX(100% → 0)` with deceleration easing.

### Card State Changes
When an `Event Card` changes state (e.g., from "Pending" to "Approved"):
*   The card does **not** animate or bounce.
*   The status badge color transitions at `duration-fast` (200ms).
*   A subtle background pulse (`opacity 0.5 → 1`) draws attention without alarm.

### Data Refresh
When new data arrives (e.g., a new Event Card appears in the Feed):
*   New cards fade in from `opacity: 0` at `duration-normal` (300ms).
*   They **do not** push existing cards down abruptly. The layout reflows smoothly.

---

## 4. Confidence-Driven Motion

The Confidence Score directly influences the *speed* and *density* of motion cues:

### High Confidence (>90%)
*   Minimal motion. Cards appear instantly. Blue AI glows pulse slowly and calmly.
*   The system is signaling: "Everything is handled."

### Mid Confidence (50-90%)
*   Moderate expansion animations. The `Comparison View` slides in at `duration-slow`.
*   Amber elements softly pulse to draw the user's eye toward required actions.

### Low Confidence / Failure (<50%)
*   Sharp, immediate transitions. Crimson elements appear with zero fade delay.
*   The system is signaling urgency. No ambient effects — pure functional immediacy.

---

## 5. Scrolling & Parallax

*   **Vertical scrolling only.** Horizontal scrolling is never used for primary content.
*   **No parallax effects.** They reduce scanability in data-heavy environments.
*   Sticky headers on `Workspace Surfaces` use a simple `box-shadow` reveal on scroll (not a blur or glassmorphism effect within the workspace itself).

---

## 6. Reduced Motion

Mintrix respects `prefers-reduced-motion`. When enabled:
*   All transitions become `duration-instant` (100ms).
*   Background ambient effects (gauge animations, pulse effects) are disabled.
*   Layout reflows still occur but without transform animations.
