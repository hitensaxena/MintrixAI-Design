## Purpose

This document defines the **Students Workflows** (and by extension, the Parent Workflows). 

Unlike staff who actively build the `Living Curriculum State` or manage the `Setup Architecture`, Students and Parents are strictly **Consumers of Reality**. They interact with the highest-level, most compressed surfaces of Mintrix to reduce cognitive friction.

---

## 1. The Daily Feed (The Awareness Loop)

Students do not manage settings or configure workspaces. They log into the mobile app or web portal and are presented exclusively with their `Daily Feed`.

### The Compression Strategy
The `Student Agent` aggregates all 8 hours of a school day into 4 or 5 linear, actionable cards.

<FeatureGrid>

<SurfaceCard title="The Temporal Card">
*   **Content**: "Next Class: Mathematics in Room 3B (Starts in 10 mins)."
*   **Behavior**: Live-updating. If a teacher is absent and the `Admin Agent` schedules a substitute, this card silently updates 5 minutes before the bell rings.
</SurfaceCard>

<SurfaceCard title="The Action Draft">
*   **Content**: "Pending Homework: 10 Algebra Problems (Due Tomorrow)."
*   **Behavior**: High visibility. Requires interaction (Submit/Upload). Once completed, the card permanently fades from the feed or physically animates into an "Archive" state.
</SurfaceCard>

<SurfaceCard title="The Repercussion Card (Parent View)">
*   **Content**: "Notice: John was marked absent during Period 1."
*   **Behavior**: Generated autonomously by the `Operator` engine based on the Teacher's roll call. Includes a single button: *Acknowledge*.
</SurfaceCard>

</FeatureGrid>

---

## 2. The Intervention Consumption Flow

When a Teacher or Principal flags a student for academic or disciplinary intervention, the student experiences a specialized consumption workflow.

1.  **The Generation**: The Principal signs an `Amber Judgment Card` authorizing a parent warning regarding failing grades.
2.  **The Delivery**: The `Daily Feed` for the Parent updates with a high-priority, red-bordered **Mandatory Notice Card**. 
3.  **The Signature Requirement**: The UI requires the parent to physically scroll to the bottom of the algorithmic rationale ('View Why' details on missing assignments) and click `Acknowledge & Sign`.
4.  **The Receipt**: The moment the Parent taps sign, a receipt fires back into the `Transparency Log` proving legal/ethical delivery of the warning.

---

## 3. The Rejection of "Chat"

Mintrix intentionally avoids providing a generative AI "Chatbot" text box for students to interact with. 

To prevent hallucinations, academic cheating, and data leakage, all interactions are pushed to the student via structured `<SurfaceCard>` components. The student consumes, acknowledges, and executes physical tasks (uploading homework), rather than relying on generative AI to synthesize the curriculum for them.
