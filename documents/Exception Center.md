## Purpose

The **Exception Center** is the emergency room of Mintrix. While the `Approval Inbox` handles *planned* human interventions, the Exception Center handles true mathematical and physical failures in the `Setup Architecture`.

It is a specialized triage surface primarily accessed by Principals and Admins.

---

## 1. Structural Philosophy

The Exception Center utilizes severe, high-contrast visual language to command immediate action.

*   **Red Domination**: Exception components bypass the soft "No-Line" UI standard, utilizing stark red borders and heavy typography.
*   **Zero Ambiguity**: Errors are written in absolute causal language. *"Cannot compute timetable: Cohort 10 lacks an assigned Math Educator."*

---

## 2. Typology of Exceptions

To prevent alarm fatigue, the Exception Center explicitly categorizes failures using the `Exception Taxonomy`.

<FeatureGrid>

<SurfaceCard title="Level 1: Configuration Void (Fatal)">
**What it is**: The system lacks the physical parameters to execute.
**Example**: An exam is scheduled, but no venue has been assigned in the Substrate.
**UI Remedy**: The UI blocks all downstream workflows across the school until an Admin injects a valid Room ID.
</SurfaceCard>

<SurfaceCard title="Level 2: Collision (Conflict)">
**What it is**: Two physical realities overlap illegally.
**Example**: Two different classes are scheduled for the Auditorium during Period 3.
**UI Remedy**: The Exception card forces a multi-select choice: The Admin must select which class gets booted out of the Venue.
</SurfaceCard>

<SurfaceCard title="Level 3: Protocol Breach (Policy)">
**What it is**: Humans attempt to bypass the `Autonomy Ceilings`.
**Example**: A Teacher tries to execute a suspension (Hard Ceiling: Principals Only).
**UI Remedy**: Execution is blocked. The Exception center flags the Principal regarding the unauthorized workflow attempt.
</SurfaceCard>

</FeatureGrid>

---

## 3. The Dead-Man's Switch Integration

The Exception Center drives the ultimate Trust safety net. 

If the Exception Center queue exceeds 15 unresolved `Fatal` tickets within a one-hour timeframe, it physically trips the Dead-Man's Switch. The UI of the entire application globally flashes red, degrading all `Operator` workflows to `Collaborator` mode until the Admin clears the queue and stabilizes the Substrate.
