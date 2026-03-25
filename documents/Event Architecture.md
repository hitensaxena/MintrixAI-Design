## Purpose

This document defines the **Event Architecture**.

In Mintrix, an event is not a static block on a calendar. It is a **Typed Spawning Workflow**. Because the system is built on an active Intelligence Engine, deploying an event triggers a cascade of autonomous dependencies across routing, personnel, communication, and finance.

---

## 1. The Philosophy of Typed Spawning

A traditional calendar treats a "Meeting" and a "Field Trip" as the exact same object: a start time, an end time, and a title.

Mintrix rejects this. Every event belongs to a strictly defined `Type`. Knowing the type allows Mintrix's Autonomy Engine to instantly draft all required prerequisite labor.

<FeatureGrid>

<FeatureCard title="The Origin Draft">
A human uses the Event Workspace to input core intent: *"Class 10 Field Trip to the Museum on Friday."* 
</FeatureCard>

<FeatureCard title="Intelligence Spawning">
Because the system knows it is a `Field Trip` type, the AI auto-spawns a 5-step dependency logic:
1. Identify overlapping timetable classes for Class 10.
2. Identify teachers who are going; draft substitution requests for their other classes.
3. Draft the digital parental consent form.
4. Draft the $15 fee notice.
5. Create a transport roster.
</FeatureCard>

<FeatureCard title="Judgment and Execution">
The drafted dependency tree is shown to the human. They sign off. The `Operator` agent permanently blocks the calendar, sends the fee notices, and requests the substitutions.
</FeatureCard>

</FeatureGrid>

---

## 2. Core Event Primitives

Every Typed Workflow in Mintrix is composed of a mixture of these core logical primitives.

<FeatureGrid>

<SurfaceCard title="1. Temporal Binding">
The rigid tie to the Academic Calendar. Events can consume periods, full days, or span across term breaks.
</SurfaceCard>

<SurfaceCard title="2. Spatial Validation">
The system cross-checks the physical infrastructure (Layer 1 Setup) to ensure the required venues (e.g., Auditorium) are not double-booked.
</SurfaceCard>

<SurfaceCard title="3. Roster Dynamics">
The definition of exactly who is involved. This dictates who receives alerts, whose timetable is disrupted, and who must grant approval.
</SurfaceCard>

<SurfaceCard title="4. Communication Payload">
The required messaging logic. Does the event demand simple awareness (`Notice`), or rigorous legal compliance (`Mandatory Consent`)?
</SurfaceCard>

<SurfaceCard title="5. Financial Trigger">
If the event incurs a cost, it automatically binds to the Fee Ledger, spawning dynamic invoices attached strictly to the involved Roster.
</SurfaceCard>

</FeatureGrid>

---

## 3. The Event Exception Rerouting Model

Because events impact the physical reality of a school, they are highly prone to **Drift** (decay of ideal conditions). The Event Architecture includes native exception handling.

### The Breakdown Scenario
An event is scheduled: A guest lecture in the Main Hall requiring PA equipment.
*Drift*: The Admin realizes 2 hours prior that the PA equipment is broken. They log it in the Workspace.

### Triage Routing
1.  **Engine Action**: The Intelligence Layer detects a conflict in the `Spatial Validation` primitive. 
2.  **Autonomy Matrix**: The system recognizes a venue alteration less than 24 hours out is a high-severity disruption. The AI refuses to auto-cancel the event (`Tool` limitation).
3.  **UI Surface**: It generates an aggressive, pulsing **Exception Card** in the Principal's *Exception Center*.
4.  **Resolution Options**: The card offers pre-drafted options: 
    *   *Option A*: Migrate event to the Library (verified open).
    *   *Option B*: Postpone to next week and auto-draft an apology notice to rosters.

---

## 4. UI Implications for Events

Because Events are active multi-dependency workflows, they **cannot** be managed via simple popup modals.

1.  **Creation**: Always use a dedicated **Workspace Surface**. The workspace must feature an *Intelligence Sidebar* that live-updates with dependency conflicts as the user types.
2.  **Display**: Events appearing in the *Daily Feed* are compressed for awareness. Unresolved dependencies (e.g., waiting on 5 parent consents) highlight on the card as warning flags.
