## Architectural Purpose

This document details the **Core Event Spawning Flow**. 

In Mintrix, users rarely "fill out a generic web form." Traditional web forms place the cognitive burden of system logic falling onto the human (e.g., checking if a room is available before booking it). 

Mintrix flips this dynamic by initiating large-scale operations through tightly-typed `Event Templates` (e.g., A Field Trip, An Exam, A Disciplinary Action, A Substitute Request). This flow details the UX journey of initiating operations where the AI handles the logic burden.

---

## 1. The Origin: The Spawning Substrate

Mintrix abandons the concept of "Settings Menus" for daily operations. 

1.  **The Trigger**: The user invokes the `Action Bar`—a persistent, floating `white` UI element residing at the bottom center of the `Role-based Dashboard` or any active `Workspace`.
2.  **The Catalog Modal**: The user clicks `Spawn Event`. The system darkens the background (`blur-sm bg-[#2d3335]/20`) and renders a massive, center-aligned modal. 
3.  **The Contextual Recommendations**: The system does not show an alphabetical list. If the Agent detects it is October 15th, it will automatically bump "Quarterly Exam", "Parent-Teacher Conference," and "Fall Pep Rally" to the Top 3 slots based on historical metadata.

---

## 2. The Configuration: The Wizard

Once a template is selected (e.g., "Field Trip"), the user enters the Configuration Flow. This is not a scrolling vertical form; it is a segmented, multi-step Wizard, broken down by cognitive load. The UI physically prevents users from moving to Step 2 if Step 1 contains a logic failure.

### UX State 1: Temporal Constraints (The "When")
*   **Action**: The user defines Date, Time, and Duration using large, clickable pill toggles (`bg-[#f1f4f5]`).
*   **Agent Intervention (The Block)**: If the selected Date conflicts with a mandated school holiday, the `Operator Agent` intervenes immediately. It locks the 'Next' button, turning it grey (`text-[#8a9296]`), and flashes an Amber tooltip: *"System Policy 4A Prohibits Events on Mandated Holidays. Select an alternative date."*

### UX State 2: Roster Selection (The "Who")
*   **Action**: The user selects participating entities (Class 10 Biology, or specifically Students A, B, and C).
*   **The Ripple Calculation**: The `Intelligence Engine` instantly cross-references the selected roster against the `Operational Substrate`. It calculates that the Field Trip overlaps with Teacher Y's existing Algebra class.
*   **Agent Intervention (Drafting Dependency)**: The UI dynamically renders a Blue `Signature Gradient` card below the roster: *"Conflict Detected. I have drafted a Substitute Request for Algebra Class 10B."*

### UX State 3: Logistics (The "What")
*   **Action**: Inputting fees, transport requirements, or consent forms.
*   **Agent Intervention**: If the user toggles "Requires Transport," the AI auto-attaches the "Bus Requisition Protocol" to the event payload.

---

## 3. The Execution: Summary & Splintering

The final step is the **Review & Execute** screen. This is crucial for building trust. The human must see exactly what the machine is about to do.

1.  **The Blast Radius Visualization**: The UI renders a `Comparison View` summarizing the structural impact. 
    *   *Visuals*: "**Event Impact:** This will cancel 14 classes, require 2 substitute teachers, charge $20 to 120 parent accounts, and generate 120 digital consent forms."
2.  **The Human Signature**: The user clicks the primary blue `Spawn Event` button.
3.  **The Structural Splintering**: The Event ceases to be a single object. Mintrix physically shatters the Event into thousands of atomic micro-tasks. 
    *   The 120 Consent requests appear in the Parents' `Daily Feed`.
    *   The Bus Request appears in the Transport Admin's queue.
    *   The 14 classes are grayed out in the system timetable.
4.  **Final State**: The Event's root node state shifts from `Draft` to `Live`, and an immutable receipt is written to the `Transparency Log`.

---

## Failure Mode (The Over-Constraint)
*   **Scenario**: What happens if the Principal requests 4 buses, but the system only has 2 registered in its fleet data?
*   **The Triage Degrade**: The AI does not let them click `Spawn`. It triggers a local Exception. Instead of breaking the entire Field Trip, it suggests alternatives natively in the wizard: *"Transport Deficit: Only 2 buses available. Shift departure time by 2 hours, or rent 3rd-party transport?"*
