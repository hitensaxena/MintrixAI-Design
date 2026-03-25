## Purpose

This document defines the **Persona AI Agent Architecture**.

Mintrix does not have a single, monolithic "AI chatbot." Instead, it utilizes a topology of specialized Intelligent Agents. These agents process the exact same operational substrate but apply completely different contextual filters based on the *mission* of the human they are serving.

---

## 1. Agent Topology Philosophy

A teacher does not care about institutional cash flow. An Owner does not care about a single missed homework assignment.

If the intelligence engine outputs the same data to everyone, it becomes noise. Mintrix mitigates this by routing raw computation through Persona Agents. Each agent has a defined **Mission Variable** and a **Context Horizon**.

---

## 2. Core Operational Agents

<FeatureGrid>

<SurfaceCard title="The Principal Agent">
*   **Mission Variable**: Academic and Operational Coherence.
*   **Context Horizon**: Daily to Weekly.
*   **Primary Duty**: Acting as the ultimate escalation buffer. It filters out routine noise but immediately escalates structural breakdowns (e.g., Staffing deficiencies, chronic class pacing failures).
*   **Key Interface**: The Approval Inbox and Exception Center.
*   **Autonomy Bias**: Heavily reliant on `Collaborator` judgment requests. It assumes the Principal wants control over high-impact decisions.
</SurfaceCard>

<SurfaceCard title="The Teacher Agent">
*   **Mission Variable**: Deep, contextual learning support.
*   **Context Horizon**: Period to Day.
*   **Primary Duty**: Fusing syllabus tracking with live classroom dynamics. It predicts bottlenecks, auto-drafts lesson plans based on historical pacing, and surfaces specific student intervention recommendations.
*   **Key Interface**: The Class Workspace.
*   **Autonomy Bias**: Acts predominantly as an `Assistant` to remove friction, leaving pedagogy strictly to the human.
</SurfaceCard>

<SurfaceCard title="The Admin Agent">
*   **Mission Variable**: Operational Synchronization.
*   **Context Horizon**: Hourly to Daily.
*   **Primary Duty**: Managing the grinding, multi-step dependencies of school life. It auto-spawns fee receipts, routes notices, tracks late arrivals, and cleanses the database substrate.
*   **Key Interface**: The Workspace Surface (Event/Setup) and Transparency Log.
*   **Autonomy Bias**: Highly aggressive use of `Operator` routines to automate drudgery, assuming the foundational Setup Architecture rules are met.
</SurfaceCard>

</FeatureGrid>

---

## 3. Peripheral Agents

<FeatureGrid>

<SurfaceCard title="The Owner Agent">
*   **Mission Variable**: Strategic Institutional Health across Campuses.
*   **Context Horizon**: Weekly to Quarterly.
*   **Primary Duty**: Synthesizing macro-trends. It does not deal in single events; it deals in attrition rates, fee collection velocity, and cross-campus academic disparities.
*   **Key Interface**: The Role Dashboard.
</SurfaceCard>

<SurfaceCard title="The Student / Parent Agents">
*   **Mission Variable**: Micro-Visibility and Support.
*   **Context Horizon**: Day to Week.
*   **Primary Duty**: Translating complex school operations into simple, actionable reality loops (e.g., "Your payment is due," "Here is a revision quiz for tomorrow's test").
*   **Key Interface**: Mobile Push & Daily Feed.
</SurfaceCard>

</FeatureGrid>

---

## 4. Agent Interoperability

Agents do not operate in silos; they communicate through the Autonomy Escrow.

**Example Scenario**: A Teacher Agent detects persistent failure in a student and drafts a harsh intervention note to the parents.
1.  **Teacher Agent**: Flags the drafted communication as "High Sensitivity" based on sentiment analysis parameters.
2.  **Autonomy Engine**: Refuses to let the Teacher Agent act as an `Operator`. It demands a structural `Collaborator` review.
3.  **Handoff**: The Teacher Agent passes the draft to the **Principal Agent**.
4.  **Principal Agent**: Receives it, calculates that this family recently lodged a complaint, packages that additional context, and places a highly visible **Recommendation Card** in the Principal's Approval Inbox.

This topology ensures that context is never lost, and authority is always respected.
