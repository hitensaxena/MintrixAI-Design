## Purpose

This document defines the **Teacher Daily Teaching Workflow** in Mintrix. It is the primary "engine" of the teacher's day, moving from morning preparation to classroom execution and post-class reflection.

Unlike a traditional LMS, Mintrix does not just show a schedule; it prepares the teacher for the specific reality of *this* class on *this* day.

---

## 1. The Workflow Loop

The daily teaching workflow operates on a four-stage cycle:

### Stage 1: Morning Briefing (The Prep)
*Surface: Daily Feed*
- **The Question**: "What do I need to know before the first bell?"
- **System Action**: Agent prepares a "Ready-to-Teach" packet for the day's classes.
- **Content**:
    - Timetable with any room or schedule changes.
    - Student alerts (who is absent, who had a high-severity event yesterday).
    - Syllabus context (where we left off, what is the goal for today).

### Stage 2: Classroom Entry (The Orient)
*Surface: Class Workspace*
- **The Question**: "Who is here and are we ready to start?"
- **System Action**: One-tap attendance marking with "Smart Suggestions" based on bus data or parent leave notes.
- **Content**:
    - Real-time attendance roster.
    - "Quick-Start" lesson reinforcement based on previous class performance.

### Stage 3: Lesson Execution (The Act)
*Surface: Class Workspace*
- **The Question**: "How is the lesson progressing vs. the plan?"
- **System Action**: Simple "Pace Check" (On Track / Behind / Ahead).
- **Content**:
    - Core lesson objectives.
    - Resources prepared by the agent (handouts, digital assets).
    - Quick-log for student participation or behavioral nudges.

### Stage 4: Post-Class Reflection (The Close)
*Surface: Daily Feed / Workspace*
- **The Question**: "What needs to happen before tomorrow?"
- **System Action**: Agent drafts follow-up communications or suggests syllabus adjustments if the class fell behind.
- **Content**:
    - Summary of syllabus progress.
    - Draft messages to parents of struggling or absent students.
    - "What's Next" briefing for the next period.

---

## 2. Interaction Patterns

| Pattern | Description |
| :--- | :--- |
| **The "Smart Roster"** | Attendance view that highlights students with patterns (e.g., "Absent 3 days this week"). |
| **The "Pace Slider"** | A low-friction way for teachers to indicate if they covered the planned topic without typing a report. |
| **The "Agent Draft"** | Pre-written parent messages that the teacher can "Swipe to Send" or "Tap to Edit." |

---

## 3. Autonomy Levels in this Workflow

-   **Attendance**: **Operator** (Sends routine absence alerts to parents once teacher marks the roster).
-   **Lesson Planning**: **Assistant** (Prepares resources and context; never changes the plan autonomously).
-   **Syllabus Adjustment**: **Collaborator** (Recommends a "Recovery Path" if the teacher logs a "Behind" state).

---

## 4. Design Goal: "Focus over Friction"

The UI for this workflow must minimize data entry. The teacher is a "Director" of the classroom, not a "Data Entry Clerk." Every interaction should take less than 5 seconds.
