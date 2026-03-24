## Purpose

The Exception Center is the surface for active breakdowns, anomalies, and continuity risks. It is not a dashboard of metrics; it is an **operational triage layer**.

The goal is to move the user from "Watching everything" to "Fixing what is broken."

---

## 1. Surface Characteristics

-   **Severity-Based**: Issues are ordered by their impact on school continuity (High/Medium/Low).
-   **Grouped by Impact**: Exceptions are clustered into **Academic** (e.g., Syllabus drift) or **Operational** (e.g., Unpaid trip fee).
-   **Action-Oriented**: Every exception must point toward a clear "Resolution Path" (e.g., *"Reassign Teacher"* or *"Send Final Nudge"*).
-   **Linked to Context**: One-tap access to the underlying data signals and histories.

---

## 2. Typical Exception Types

| Category | Type | Example |
| :--- | :--- | :--- |
| **Academic** | Syllabus Drift | *"Grade 5 History is 3 topics behind the planned exam date."* |
| **Operational** | Missing Dependency | *"Bus 12 Field Trip has 14 students without parent consent."* |
| **Continuity** | Substitution Gap | *"Staff absence in Grade 3 Physics with no qualified substitute found."* |
| **Trust/Data** | Calibration Gap | *"System confidence in Grade 7 attendance alerts is too low due to missing timetable."* |

---

## 3. The "Exception Lifecycle"

1.  **Identification**: System detects a deviation from the plan or rule set.
2.  **Notification**: The exception appears in the center of the relevant persona's dashboard.
3.  **Triage**: User assesses the severity and context.
4.  **Resolution**: User chooses a path (e.g., *"Override Rule"* or *"Execute Plan B"*).
5.  **Audit**: The resolution is logged in the Transparency Log.

---

## 4. Persona-Specific Usage

-   **Principal**: Triage of academic drift across grades, major event breakdowns, and reputational risks.
-   **Teacher**: Attendance risks, individual student academic drift, or missing parent acknowledgment.
-   **Admin**: Setup gaps, fee collection failures, and logistics conflicts.

---

## 5. Design Rule: "No Hidden Failures"

The Exception Center must be the "No-Surprise Surface." If something is breaking, it should be visible here before it becomes a crisis. The interface should avoid decorative charts in favor of actionable status cards.
