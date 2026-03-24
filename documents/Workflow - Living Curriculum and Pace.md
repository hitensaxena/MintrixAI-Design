## Purpose

This document defines the **Living Curriculum and Pace Workflow** in Mintrix. It explains how the system binds the static syllabus to the dynamic school calendar to identify academic risks and provide "Recovery Paths."

In Mintrix, the syllabus is not a static list; it is a "Living Organism" that responds to classroom reality.

---

## 1. The Core Concept: Calendar-Syllabus Binding

The system identifies "Drift" by comparing three things:
1.  **The Plan**: Where the school *hopes* to be (by the syllabus document).
2.  **The Reality**: Where the class *actually* is (from teacher logs and assessments).
3.  **The Available Time**: How many periods are left *on the calendar* before the next exam or term.

---

## 2. The Drift Lifecycle

### Stage 1: Detection (The Signal)
*Surface: Exception Center (Principal) / Class Dashboard (Teacher)*
- **Condition**: A class has fallen behind the plan by 3 or more periods.
- **System Action**: Agent generates a **Drift Alert**.

### Stage 2: Diagnosis (The Context)
*Surface: Syllabus Workspace*
- **Question**: "Why are we behind?"
- **System Context**: Shows holidays, previous substitutions, student performance trends, and the teacher's pace history.

### Stage 3: Recommendation (The Recovery Path)
*Surface: Recommendation Panel*
- **System Action**: Agent acts as a **Collaborator** and suggests one of three paths:
    1.  **Redistribution**: Spread the remaining topics across upcoming classes.
    2.  **Reinforcement**: Repeat the difficult topic but shift the next assessment.
    3.  **Substitution**: Use an available open period or substitution to catch up.

---

## 3. Surface Mapping

| Persona | Surface | Primary Use |
| :--- | :--- | :--- |
| **Teacher** | Class Dashboard | View current pace vs. plan and accept/reject recovery suggestions. |
| **Principal** | Exception Center | See which departments or grades are falling behind institutional standards. |
| **Admin** | Timetable Workspace | View the impact of syllabus drift on substitution requirements. |

---

## 4. Interaction Patterns

| Pattern | Description |
| :--- | :--- |
| **The "Pace Gauge"** | A visual indicator (On Track / Drift / At Risk) that changes based on calendar availability. |
| **The "Recovery Simulator"** | A tool where the Principal can "Drag and Drop" syllabus topics onto future calendar dates to see if the exam deadline is met. |
| **The "Pace Narrative"** | A generated text summary: *"Class 5A is 4 topics behind because of three consecutive holidays. I recommend shifting the Unit 2 exam by two days."* |

---

## 5. Decision Rights & Autonomy

-   **Syllabus Logging**: **Tool** (The teacher must manually log where they are).
-   **Drift Detection**: **Assistant** (System automatically flags the drift).
-   **Recovery Suggestion**: **Collaborator** (System recommends paths but never auto-updates the plan).
-   **Exam Schedule Change**: **Approve/Human Only** (Must be a human signature).

---

## 6. Success Criteria: "No Silent Failure"

The goal of this workflow is to prevent the "End-of-Term Surprise," where a school realizes too late that the curriculum wasn't covered. Intelligence must be proactive, identifying risks when they are still 2-3 periods small.
