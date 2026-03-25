## Purpose

This document details the **Intelligence Layer/Processor Architecture**.

The Intelligence Layer sits exactly between the Operational Substrate (databases) and the Human Interfaces. It is the computational heart of Mintrix. It takes raw database queries and transforms them into operational insights, exception alerts, and actionable recommendations.

---

## 1. Engine Topology

The Intelligence Layer is not a single process; it is a modular stack of specific analytical engines running continuously.

<FeatureGrid>

<SurfaceCard title="1. The Aggregation Engine">
**Function**: Data Normalization.
It constantly sweeps the Operational Substrate, pulling structured data (Timetables) and unstructured data (Chat queries, manual text inputs) and forcing them into the unified Mintrix Data Schema so the other engines can compute them smoothly.
</SurfaceCard>

<SurfaceCard title="2. The Semantic Processor">
**Function**: Context Parsing.
It reads the *intent* of inputs. When a teacher types "Field trip tomorrow, skip chapter 4," this processor translates human phrasing into hard algorithmic commands (e.g., `Update Calendar`, `Suspend Syllabus node 4_x`).
</SurfaceCard>

<SurfaceCard title="3. The Recommendation Engine">
**Function**: The "Next-Best-Action" Generator.
It uses historical baselines and current policies (Setup constraints) to propose workflows. If attendance is dropping, it predicts the next step and packages it into a `Judgment Card` for human review.
</SurfaceCard>

<SurfaceCard title="4. The Exception Engine">
**Function**: Anomaly & Conflict Detection.
It runs constant collision simulations. It ensures that Event Spawning logic does not inadvertently double-book teachers or venues. If a collision is unresolvable by the AI, it hard-routes an alarm to the Exception Center.
</SurfaceCard>

<SurfaceCard title="5. The Autonomy Engine (The Governor)">
**Function**: Trust & Permission Mapping.
The absolute final gatekeeper. It takes output from the Recommendation Engine, cross-references it against the school's configured Trust Levels, and decides whether the system acts passively (`Tool`), proactively (`Assistant`), requires a signature (`Collaborator`), or fires silently (`Operator`). 
</SurfaceCard>

</FeatureGrid>

---

## 2. Processing Speed and UI Feedback

Because the Intelligence Layer is heavily analytical, some calculations take fractions of a second (e.g., predicting a timetable clash) while others take longer (e.g., generating a full semester recovery syllabus).

The UI must reflect the layer's processor state to maintain user trust.

### Real-Time Heuristics (Instant)
*   **Behavior**: Handled instantaneously. 
*   **UI Result**: The *Intelligence Sidebar* in a Workspace updates dynamically as the user types, warning of venue clashes or minor policy breaches immediately.

### Deep Generative Processing (Asynchronous)
*   **Behavior**: Handled via background queues.
*   **UI Result**: The system cannot block the human. The UI shows a processing skeleton or toaster notification: *"Mintrix is drafting the recovery syllabus..."* Once complete, it generates a new Event Card in the Daily Feed or Approval Inbox.

---

## 3. The "View Why" Mechanism (Transparency Protocol)

To prevent AI hallucination anxiety, the Intelligence Layer must keep a perfect receipt of its own computational branches. 

Every time the Recommendation Engine generates an output, it bundles a `Rationale Payload` alongside it.

**Example Process:**
1.  **Engine Output**: Recommends canceling the Friday assembly.
2.  **Rationale Payload Attached**: 
    - *Variable 1*: "75% chance of severe rain (External API)."
    - *Variable 2*: "Auditorium is under maintenance (Operational Substrate)."
    - *Variable 3*: "Substitute venues exceed fire code capacity for current enrollment (Setup Policy)."
3.  **UI Interaction**: The human clicks "View Why" on the recommendation card. The UI decodes the Rationale Payload and displays the precise mathematical logic that led to the recommendation, allowing the human to trust the decision.
