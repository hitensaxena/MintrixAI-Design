## Purpose

This document provides the canonical **Screen Inventory and Navigation Model** for Mintrix, mapping the architectural surface families directly to tangible application screens categorized by persona.

---

## 1. Top-Level Navigation Philosophy

Mintrix avoids mega-menus. Navigation is determined by **Cognitive Need**, split into three global zones:

1.  **The Ambient Zone**: What is happening now? (Daily Feed, Role Dashboards)
2.  **The Action Zone**: What requires my signature/execution? (Approval Inbox, Exception Center, Workspaces)
3.  **The Audit Zone**: What did the system do? (Transparency Log, Setup Configurations)

---

## 2. Screen Inventory Blueprint

This is the definitive list of screens the product requires, categorized by their underlying Architectural Surface Family.

<FeatureGrid>

<SurfaceCard title="1. Role-based Dashboard (Ambient)">
**Owner Hub**: Multi-campus financial/academic rollup widget UI.
**Principal Overview**: Academic drift pacing and operational severity meters.
</SurfaceCard>

<SurfaceCard title="2. The Daily Feed (Ambient)">
**Teacher Today Screen**: Linear breakdown of pending periods, fast-action attendance triggers, and ambient AI alerts.
**Parent Today Screen**: Notice feed, pending fee alerts, and student performance summaries.
</SurfaceCard>

<SurfaceCard title="3. The Approval Inbox (Action - Collaborator)">
**Principal Judgment Queue**: Filterable list of dense Judgment Cards requiring signatures (Communication drafts, Syllabus exceptions, Escalations).
</SurfaceCard>

<SurfaceCard title="4. The Exception Center (Action - Triage)">
**Admin Operations Triage**: High-alarm surface showing double bindings and structural data failures (e.g., Staffing deficiencies).
</SurfaceCard>

<SurfaceCard title="5. Workspaces (Action - Execution)">
**Class Teaching Workspace**: Deep context surface for a Teacher (Timetable + Syllabus Pacing + Student performance).
**Intervention Workspace**: Specialized drill-down surface for Principals reviewing a single failing student.
**Event Spawer Workspace**: Admin interface for creating Typed Event Workflows.
</SurfaceCard>

<SurfaceCard title="6. Transparency Log (Audit)">
**System Execution Record**: Chronological, searchable list of every action the `Operator` agent processed, complete with "View Why" and "Undo" actions.
</SurfaceCard>

<SurfaceCard title="7. User Profile and Settings (Maintenance)">
**Notification Toggles**: Where users define their Feed cadence and Admins adjust the overarching Intelligence configuration parameters.
</SurfaceCard>

</FeatureGrid>

---

## 3. Navigation State Model

The UI navigation must support deep linking and context retention without cluttering the screen. 

*   **The Context Bar Header**: The top 60px of the UI. It never shows navigation links. It displays *Current User Context* (e.g., `< Back to Approval Inbox | Managing Event: Field Trip 10>`).
*   **The Intelligence Sidebar**: A collapsable right-hand panel available on all Workspaces containing the Agent's recommendations and context queries.
*   **The Left Rail (Primary Navigation)**: A narrow, icon-driven sidebar switching between the 3 Cognitive Zones (Feed, Actions, Audit).

By adhering to this fixed inventory, we prevent the "ERP bloat" of nesting 40 different modules inside a hamburger menu. Every workflow resolves cleanly into one of these 6 surface types.
