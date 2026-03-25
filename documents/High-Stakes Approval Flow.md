## Architectural Purpose

This document outlines the deepest friction point in the Mintrix OS: **The High-Stakes Approval Flow**. 

Whenever Mintrix reaches an `Autonomy Ceiling` (e.g., executing a process that requires moving physical money, suspending a human student, firing a teacher, or mass-canceling classes), the AI cannot execute the final state change. It degrades from an `Operator` into a `Collaborator`, routing a draft to a human arbiter via the `Approval Inbox`.

This flow details exactly how the Principal interacts with this queue.

---

## 1. The Arrival: The Judgment Queue

The Principal does not receive 50 distinct emails requesting permission. They open the `Approval Inbox`—a highly specialized, incredibly dense UI surface built exclusively to accelerate binary decision-making.

### The Density Algorithm (Sorting)
The Inbox is **not** sorted chronologically. A chronological inbox causes critical emergencies to be buried under trivial PTO requests. The UI sorts cards via a multi-variate severity matrix:

1.  **Level 1 (Red Expiry)**: Approvals explicitly tied to a ticking clock (e.g., "Approve Exam Delay: Exam starts in 1 Hour"). These render with `bg-[#dc2626]/10` and are physically pinned to the top of the viewport.
2.  **Level 2 (High Impact)**: Decisions affecting large swaths of the operational grid (e.g., "Approve Emergency Evacuation Route for 500 students").
3.  **Level 3 (Routine)**: A single teacher requesting a $50 supply reimbursement.

---

## 2. The Evaluation: The Comparison View

When the Principal clicks an Amber `Judgment Card` (e.g., "Suspend Student X"), they are not asked to read a dense 4-paragraph essay. The screen splits into the **Comparison View**, utilizing the No-Line philosophy to isolate three cognitive columns.

### Zone 1: The Baseline Context (Left)
*   **Visuals**: `#f8f9fa` background, Slate grey text.
*   **Purpose**: Displays the "Current Reality." (e.g., Student X's attendance, grades, and the fact that they are currently permitted on campus).

### Zone 2: The Evidence ("View Why") (Center)
*   **Visuals**: White background, Blue `system gradient` highlights.
*   **Purpose**: The AI defends its logic. (e.g., The AI cites hard policy: "Code of Conduct Rule 4.2 mandates suspension after 3 violent infractions. This is Infraction 3: Fighting in Hallway B.")

### Zone 3: The Proposed Draft State (Right)
*   **Visuals**: White card bordered heavily in Amber `ring-2 ring-[#f59e0b]`.
*   **Purpose**: Shows exactly what will happen if the Principal approves. (e.g., "Parent receives Notice 4B. Student loses network access. Absentee records marked Code 9.")

### Frictionless Manual Override
The AI is not infallible. If the Principal feels a 3-day suspension is legally sound but contextually wrong (perhaps the student was defending themselves), they do not have to "Cancel" the AI's draft and start over.
*   **The UX**: The Principal clicks directly into the Draft State column. They change the 'Duration' dropdown from `3 Days` to `1 Day`. 
*   **The AI Recalculation**: The Agent instantly recalculates all downstream effects based on the Human overwrite, updating the Draft State in real-time.

---

## 3. The Execution & The Decay Exception

Once the Principal is satisfied, they must execute the workflow.

### UX State: Execution
1.  **Approval**: The Principal clicks the primary "Sign & Execute" button. The status shifts from `Draft` to `Live`. The UI card dissolves cleanly. The AI resumes `Operator` authority to fire all notifications and db writes.
2.  **Rejection**: The Principal clicks "Reject." The card flips, demanding a mandatory 1-sentence "Feedback Reason" to retrain the school's local policy weights (e.g., "First offense exception").

### Edge Case: The 48-Hour Silence Loop
*   **Scenario**: The Principal is sick or ignoring the system. A $5,000 vendor payment sits in the `Approval Inbox` for 48 hours. 
*   **The Systemic Escalation**: Mintrix hates stasis. If an object remains unsigned for 48 hours, the system executes a `Protocol Abandonment` exception. It physically un-pins the card from the Principal's inbox and escalates it to the `Owner Dashboard` (The School Board/Superintendent), citing a SLA breach by the Principal.
