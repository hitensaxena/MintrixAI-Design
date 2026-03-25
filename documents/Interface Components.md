## Purpose

This document outlines the **Interface Components** of Mintrix. These are the highly-reusable, LEGO-like `.tsx` building blocks that assemble to create the massive `Surfaces`.

Because of the "Editorial Intelligence" architecture, Mintrix uses very few unique components. It relies on varying the data *inside* the components instead of building 50 different button styles.

---

## 1. The Event Card

The `Event Card` is the atomic unit of the entire application. The system does not use flat tables. A student, a sick day, a fee payment, and a test score are all technically `Event Cards`.

### Core Anatomy
1.  **Icon Block**: A `w-14 h-14` heavily rounded (`rounded-[20px]`) div. Automatically colors itself based on the Card's Severity (Amber, Blue, Crimson).
2.  **Noun Header**: Bold, high-contrast text (`text-2xl text-[#2d3335]`).
3.  **Metadata Array**: Micro-text array detailing Timestamp, Confidence Score, and Owner.
4.  **"View Why" Hook**: The bottom row is reserved for the `Collaborator` AI to explain its math in a collapsable text accordion.

---

## 2. The Segmented Control (The Toggle)

Mintrix does not use multi-tier dropdown menus or standard HTML `<select>` tags for primary navigation. It uses massive, pill-shaped segmented controls.

### Implementation Rules
*   Housed inside a heavily rounded `$eef1f3` container.
*   The active button creates a physical drop-shadow floating *above* the pill (`bg-white shadow-md ring-1 ring-[#dee3e6]`).
*   Transitions are slow and deliberate (`duration-300`). 
*   Used for swapping modes (e.g., toggling the Principal dashboard from `Academics` view to `Financials` view).

---

## 3. The Comparison View

The most unique UI component in Mintrix. Exists primarily inside the `Approval Inbox`.

When the system hits an Autonomy Ceiling, it cannot act alone. It renders a 3-column `Comparison View` to demand a human signature.

### Layout Logic
1.  **Col 1: Baseline Context (Silver)**: Shows the current state of reality (e.g., Yesterday's unaltered timetable). Rendered with muted typography.
2.  **Col 2: The Logic (Blue)**: The "View Why" rationale connecting Column 1 to Column 3 (e.g., "Conflict detected. Re-routing required.").
3.  **Col 3: The Draft (Amber)**: The AI's proposed new state. Inputs here are interactive, allowing the human to manually tune the Draft parameters before hitting `Execute`.

---

## 4. The Intelligence Sidebar

A global, highly intrusive right-hand panel (`w-96`, sliding in via framer-motion).

### Function
When a user is doing deep work inside a `Workspace` (e.g., a Teacher grading papers), they do not want to be taken to a different URL to view a student's medical history. 
The Intelligence Sidebar is spawned. The AI dumps all relevant Context Queries (Attendance drops, missing fees, parental notes) into the sidebar without breaking the Teacher's physical grading focus in the center screen.
