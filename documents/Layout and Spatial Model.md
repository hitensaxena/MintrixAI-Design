## Purpose

This document defines the **Layout and Spatial Model** for the Mintrix AI OS.

Mintrix does not use traditional grid-based dashboard layouts where every inch of screen real estate is filled with widgets. Instead, it employs an **Editorial Spatial Model** — using aggressive whitespace and intentional density zones to guide the eye through high-priority data.

---

## 1. The Spatial Philosophy

The fundamental layout rule: **Whitespace is not wasted space; it is the primary tool for cognitive load management.**

A Principal processing 50 decisions per hour cannot parse a screen that looks like an airline cockpit. The layout must breathe.

*   **Entry Screens (Feeds, Dashboards)**: 60% whitespace, 40% data. The eye should be able to rest between cards.
*   **Execution Screens (Workspaces, Approval Detail)**: 30% whitespace, 70% data. Density is acceptable because the user has consciously entered a "work mode."

---

## 2. The Surface Container Model

All content in Mintrix lives inside **Surfaces** — large, full-viewport containers. There are no floating windows or popup modals that obscure the user's spatial context.

### Surface Types
1.  **Primary Surface**: The main content area. This is the `Daily Feed`, `Approval Inbox`, `Exception Center`, or `Role-based Dashboard`. It always occupies the full viewport width minus the persistent `Sidebar`.
2.  **Workspace Surface**: Spawns inline or as a slide-over panel when the user needs to execute a deep action (e.g., building a timetable, entering grades). It respects the user's spatial memory — they can always see *where they came from*.
3.  **Intelligence Sidebar**: A contextual panel that slides in from the right when the `Persona Agent` needs to present its reasoning. It never obscures the primary surface — it compresses it.

---

## 3. The Grid System

Mintrix uses a responsive **12-column grid** with generous gutters.

*   **Desktop (≥1280px)**: 12-column grid, `32px` gutters, `80px` side margins.
*   **Tablet (768px–1279px)**: 8-column grid, `24px` gutters, `48px` side margins.
*   **Mobile (≤767px)**: 4-column grid, `16px` gutters, `16px` side margins.

### Card Placement Rules
*   `Event Cards` always span **full width** on mobile, **6 columns** (half) on tablet, and **4 columns** (third) on desktop.
*   `Workspace Surfaces` always span the **full remaining width** to immerse the user.
*   The `Sidebar` is fixed at `280px` on desktop and hidden behind a hamburger on mobile.

---

## 4. Spacing Scale

All spacing in Mintrix uses a strict **4px base unit**. No arbitrary pixel values.

| Token          | Value   | Usage                                           |
|----------------|---------|--------------------------------------------------|
| `space-1`      | `4px`   | Tight inline gaps (icon + label)                  |
| `space-2`      | `8px`   | Micro padding inside pills and tags               |
| `space-3`      | `12px`  | Gap between metadata items                        |
| `space-4`      | `16px`  | Standard card padding, input padding              |
| `space-6`      | `24px`  | Gap between card sections                         |
| `space-8`      | `32px`  | Section dividers, major content blocks            |
| `space-12`     | `48px`  | Hero section padding                              |
| `space-16`     | `64px`  | Page section vertical rhythm                      |

---

## 5. Content Density Zones

The UI dynamically adjusts density based on the user's cognitive mode:

### Ambient Mode (Feed, Dashboard)
*   Large card margins, generous line height (`1.75`)
*   Hero-scale numbers (`text-5xl`) for KPI surfaces
*   Easy to scan at arm's length

### Action Mode (Workspace, Approval)
*   Tighter spacing, denser tables
*   Compact line height (`1.5`)
*   Smaller type scales for data-heavy surfaces
*   Dense but never claustrophobic — always maintain the `space-4` minimum padding rule

### Emergency Mode (Exception Center)
*   Maximum density, every pixel counts
*   Structural grid borders *allowed* (the only exception to the No-Line Philosophy)
*   Crimson severity indicators span full width
