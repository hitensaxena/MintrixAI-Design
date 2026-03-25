## Purpose

This document details **Surface-based Navigation**, also known as "Contextual Routing." 

While `Primary Navigation` uses the persistent left-hand Sidebar to move users across massive categories (e.g., Feed -> Setup -> Inbox), Surface-based Navigation defines how the user drills *downward* into specific data relationships entirely within the boundaries of a single surface.

---

## 1. Structural Philosophy

Mintrix intentionally avoids deep nesting (e.g., clicking linking > linking > linking until the user is lost in a 4-tier deep page hierarchy). 

*   **The "Portal" Mechanic**: Instead of loading brand new pages, Mintrix heavily favors contextual slide-overs (Drawers) or expanding tables that keep the user visually grounded in their primary root sequence.
*   **Flat Architecture**: A Principal should never be more than two clicks away from the root `Daily Feed`.

---

## 2. Typology of Surface Drills

Different surfaces route in specifically constrained ways.

<FeatureGrid>

<SurfaceCard title="1. The Dashboard Drill-Down">
**Source Surface**: `Role-based Dashboard`.
**Interaction**: Principal clicks a red widget saying *"14 Discipline Strikes."*
**Routing Animation**: The widget physically expands to fill the entire Right Pane, transforming instantly into a temporary `Workspace` array pre-filtered to the 14 strikes. 
**Exit**: Clicking [X] instantly collapses the array back into the widget, returning the Principal to the Dashboard context.
</SurfaceCard>

<SurfaceCard title="2. The Inbox Split-Pane Swap">
**Source Surface**: `Approval Inbox`.
**Interaction**: Principal scrolls through 10 pending `Judgment Cards` stacked on the left.
**Routing Animation**: Clicking a judgment card does NOT load a new page. It instantly repaints the Right Pane with the deep `Comparison View` and `View Why` causality tree for that specific card.
</SurfaceCard>

<SurfaceCard title="3. The Floating Modal Escalation">
**Source Surface**: `Workspace` (Teacher marking attendance).
**Interaction**: Teacher attempts to mark a student absent, but the system flashes an error: *"Policy Error: John's guardian has disabled default absentee notices."*
**Routing Animation**: The system deploys an aggressive, center-screen `Exception Card` Modal overlaid on the gradebook. The dark background physically prevents the Teacher from navigating away until they triage the exception (Acknowledge / Force Override).
</SurfaceCard>

</FeatureGrid>

---

## 3. The Breadcrumb Trail

For any surface interaction that *must* exceed a depth of 2 (e.g., digging into specific historical log nodes within the `Transparency Log`), Mintrix utilizes stark, high-contrast Breadcrumb trails pinned to the top header. 

Example: `Setup Architecture` / `Venues` / `Science Wing` / `Lab 2B`. 

The breadcrumb allows instant upward navigation without abandoning the overarching Workspace context.
