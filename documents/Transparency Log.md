## Purpose

The **Transparency Log** is an immutable, perpetual receipt ledger. Every single action executed by a human, an `Operator` Agent, or a `Collaborator` Agent is physically written to this surface.

It exists to completely eliminate the "Black Box" problem of generative AI and provide perfect legal/operational auditing for institutions.

---

## 1. Structural Philosophy

The Transparency Log resembles an ultra-compressed terminal or banking ledger. It does not prioritize large typography or soft padding; it prioritizes maximum data density and chronologic absolute truth.

*   **Immutable Rendering**: Once a row is written to the log, it cannot be deleted by *any* user, not even a Super Admin.
*   **Filter Density**: The primary interaction is via a robust tagging system (Filter by Agent, User, Policy Trigger, Date, Gravity).

---

## 2. The "View Why" Mechanics

The core feature of the Transparency Log is the unpacking of causal logic.

When a user clicks on an `Action Receipt` (e.g., *"Late Fee issued to John Doe"*), the row expands downwards to reveal the exact mathematical and temporal chain of events that formulated the action.

<FeatureGrid>

<SurfaceCard title="Execution Authority">
Explicitly states *who* pulled the trigger. 
"Executed by: Background Operator Engine (Autonomy Level: 100%)" or "Executed by: Signed by Principal Sarah."
</SurfaceCard>

<SurfaceCard title="Policy Triggers">
Explicitly lists the exact Configuration variable that caused the action. 
"Trigger: Reached Day 45 Past Invoice Issue Date (Setup Rule #142)."
</SurfaceCard>

<SurfaceCard title="Data Vectors">
Explicitly lists the variables accessed. 
"Read: Ledger Array Row 421. Read: User Profile ID John Doe."
</SurfaceCard>

</FeatureGrid>

---

## 3. The Reversibility (Undo) Window

Mintrix acknowledges that mistakes happen. To foster trust, the Transparency Log uniquely facilitates actions in a temporary "Active State."

1.  **The Window**: Upon execution of a high-impact action (like a mass email or roster shift), the institution's predefined `Undo Window` (e.g., 15 minutes) begins via a live countdown timer.
2.  **The Active State**: The Receipt row pulses with a bright "Recall Execution" button. 
3.  **The Rollback**: Clicking the button physically reverses the Substrate modifications. It injects a *new* Receipt into the log: *"Action recalled by Admin."*
4.  **Immutability**: Once the timer hits 00:00, the button physically fades, and the action resolves into permanent reality.
