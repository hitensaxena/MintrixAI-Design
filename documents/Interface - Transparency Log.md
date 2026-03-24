## Purpose

The Transparency Log is the "Memory Surface" for system behavior. It is designed to earn trust by revealing what the system did, why it did it, and what resulted from the action.

In Mintrix, transparency is not a back-office audit feature; it is a **front-facing user surface** for awareness and reversal.

---

## 1. Surface Characteristics

-   **Chronological**: Actions are ordered by time, providing a "Story" of the school's operational life.
-   **Filterable**: Users can filter by Persona, Category (e.g., Communication, Attendance), and Autonomy Mode (e.g., Operator actions).
-   **Explanation-Aware**: Every entry contains a "View Why" path explaining the data and rules used.
-   **Reversibility**: Actions that are "Reversible" (e.g., a sent message or an approved event) are highlighted for quick override.

---

## 2. Typical Log Entries

| Action Type | Trigger | Content Example |
| :--- | :--- | :--- |
| **Operator Action** | Routine Fee Rule | *"Sent 'Fee Reminder' to Parent A (Bus 12). Rule: Due date + 2 days."* |
| **Human Approval** | Principal Signature | *"Principal approved 'Field Trip 12 Consent Notice' for Grade 5."* |
| **System Recommendation** | Syllabus Drift | *"Agent recommended 'Recovery Path B' for Grade 8 History. Reason: Class behind by 3 topics."* |
| **Exception Resolution** | Admin Intervention | *"Admin manually assigned 'Substitute B' to Grade 3 Physics. Override: Initial suggestion rejected."* |

---

## 3. Structural Components of an Entry

Every entry in the Transparency Log must contain:

1.  **The Actor**: Who took the action (System, Admin, Principal, etc.).
2.  **The Action**: What was done (Sent message, updated schedule, approved plan).
3.  **The Context**: Which object was affected (Student A, Class 5B, Field Trip).
4.  **The Rationale**: "View Why" path (Rules used, data signals, confidence level).
5.  **The Outcome**: What happened after (Message delivered, parent acknowledged).

---

## 4. Persona-Specific Usage

-   **Owner**: High-level summary of all "Operator" actions across campuses to ensure institutional standards.
-   **Principal**: Reviewing recent "Operator" alerts and "Collaborator" approvals across departments.
-   **Admin**: Tracking the status of routine operational tasks and manual overrides.
-   **Teacher**: Viewing the history of "Agent Drafts" and "Autonomous Alerts" for their specific classes.

---

## 5. Design Rule: "Traceability over Mystery"

The Transparency Log must be the "No-Hidden-Magic" surface. If the user asks *"Why did this happen?"*, the Transparency Log should be the first place they go for an unambiguous, data-driven answer.
