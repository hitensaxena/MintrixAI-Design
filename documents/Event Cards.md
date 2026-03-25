## Purpose

This document defines **Event Cards**, the fundamental atomic unit of information in the Mintrix user interface. 

The application rarely uses dense blocks of narrative text. Instead, data, actions, logic, and intelligence are all packaged into standardized, self-contained `<SurfaceCards>`.

---

## 1. Structural Anatomy

Every Event Card globally adheres to a strict visual structural template. They heavily leverage whitespace, stark drop-shadows (elevation modeling), and rigorous typographic hierarchy.

An Event Card consists of 5 potential zones:
1.  **The Meta-Tag**: Origin point (e.g., `From: Teacher Agent`, or `System Triggered`).
2.  **The Core Payload**: Massive, high-contrast headline (e.g., **"John Doe missed 5 periods."**)
3.  **The Confidence Badge**: A visual indicator of the AI's certainty (Green Sparkle = 100% verified, Amber Dot = Judgement Required).
4.  **The Causal Block**: The 'View Why' logic proving how the system arrived at the Payload.
5.  **The Action Footer**: The primary interaction buttons (Acknowledge, Approve, Edit Workspace).

---

## 2. Typology of Event Cards

Mintrix restricts UI components to four strict archetypes of cards. 

<FeatureGrid>

<SurfaceCard title="1. Awareness Cards (Ambient)">
**Location**: `Daily Feed`, `Role-based Dashboards`.
**Behavior**: High compression, minimal interaction. Read-only records of execution.
**Example**: *"45 Late Reminders sent autonomously by the Admin Agent today at 09:00."*
**Actions**: Click to expand log data, or swipe to formally 'Archive'.
</SurfaceCard>

<SurfaceCard title="2. Action Cards (Tasks)">
**Location**: `Daily Feed` (Parent/Student).
**Behavior**: Halts downstream workflows until the task is physically satisfied by the user.
**Example**: *"Pending Final Exam Fee: $45.00."*
**Actions**: Features a primary high-contrast execution button (e.g., [Pay Securely], [Submit Homework Document]).
</SurfaceCard>

<SurfaceCard title="3. Judgment Cards (Collaborator)">
**Location**: `Approval Inbox` (Principals/Admins).
**Behavior**: High friction. Represents an AI draft that hit a hard `Autonomy Ceiling`.
**Example**: *"Autonomy Restrained: Recommendation to suspend Michael. Requires Signature."*
**Actions**: Split-pane Comparison View. Requires [Approve], [Reject], or [Edit Draft in Workspace].
</SurfaceCard>

<SurfaceCard title="4. Exception Cards (Fatal)">
**Location**: `Exception Center`.
**Behavior**: Highest priority. Colored stark Red. Signals a mathematical or structural void mapping the `Setup Architecture`.
**Example**: *"Scheduling Collision: No English Teacher available for Cohort A."*
**Actions**: Usually requires the user to click [Force Override] to manually drag-and-drop a resolution. 
</SurfaceCard>

</FeatureGrid>

---

## 3. The Lifecycle of a Card

Cards physically transition through states via animations. 
1.  **Spawning**: An Exception Card enters the center violently from the top.
2.  **Transformation**: If a Principal signs a `Judgment Card`, it flashes green, violently collapses on the Y-axis, and morphs into a flat `Awareness Card` receipt in the `Transparency Log`.
3.  **Archiving**: A parent swipes an `Action Card` off their screen; it animates physically off the canvas to the right.
