## Purpose

The **User Profile and Settings** surface is the personalized control center for an individual user (Parent, Teacher, Admin, Student) interacting with the Mintrix platform. 

It defines the boundaries of notification cadence, personal historical access, and account security.

---

## 1. Structural Philosophy

This surface is intensely private and operates outside the global school execution loops. It resembles a standard SaaS settings schema, utilizing clean toggles, discrete profile avatars, and categorized parameter blocks.

*   **The "Quiet" UI**: This surface almost never utilizes `Amber` or `Red` urgency colors. It is not an execution workspace; it is a maintenance dashboard.

---

## 2. The Granularity of Notifications

Because Mintrix is driven by automated `Operator` workflows, a user can easily be overwhelmed by the AI's sheer speed. The Settings menu allows humans to throttle the AI's verbosity.

<FeatureGrid>

<SurfaceCard title="The Feed Throttle">
Users can toggle which `Event Cards` physically manifest in their `Daily Feed`.
*   *Teacher Example*: "Only push Absentee data if >5 students are out."
*   *Parent Example*: "Do not send 'Perfect Attendance' cards, only notify me on Tardy/Absent variations."
</SurfaceCard>

<SurfaceCard title="The Aggregation Mode">
Principals can shift the `Exception Center` alerts from *Instant Pushes* to a *Daily 4:00 PM Digest*, ensuring they aren't bombarded with triaging requests while actively walking the school campus.
</SurfaceCard>

</FeatureGrid>

---

## 3. Historical Record Access

The Profile surface acts as a personalized, filtered lens into the globally immutable `Transparency Log`.

*   **Parent View**: Under the "Children Profiles," a parent can scroll through the entire historical log of grades, attendance, and disciplinary signatures specific only to their child.
*   **Staff View**: A Teacher can access their "Employment Snapshot" containing all digitally signed HR documents, historical performance reviews, and generated paystubs. 

## 4. Calibration Toggles (Admin Only)

For users possessing Super Admin privileges, the `Settings` menu expands to include the **Intelligence Tuning** array. 

*   This is where the overarching "Tone parameters" for the `Semantic Processor` are defined (shifting from High-Formality to High-Empathy communication models).
*   It also contains the manual "Domain Reset" switches (The Policy Shock mechanic) needed to radically recalibrate Mintrix if the institution changes its foundational rules.
