## Purpose

This document defines the **Living Curriculum And Pace** workflow.

The core differentiator of Mintrix for educators is tracking the "Delta" (the gap) between the static syllabus plan and the harsh reality of the school timetable. 

---

## 1. The Temporal Calculation Loop

Unlike standard planners where a Teacher writes "Chapter 4" in a box, Mintrix automatically schedules the future.

### The Background Process
1.  **The Substrate Input**: Admin uploads a syllabus requiring 45 math periods for the semester.
2.  **The Timetable Binding**: The system maps the school timetable, physically counting exactly 45 math periods available for Class 10.
3.  **The Baseline Generation**: The `Teacher Agent` pre-fills the entire planner, perfectly distributing topics across periods.

---

## 2. The Teacher Update Workflow

The Teacher is only required to log reality against the AI's baseline.

<FeatureGrid>

<SurfaceCard title="Scenario A: Perfect Alignment">
**Teacher Action**: clicks "Complete" on the predicted topic. 
**System Consequence**: The system's confidence score holds at 100%. The delta remains 0. Tomorrow's prediction is locked.
</SurfaceCard>

<SurfaceCard title="Scenario B: The Micro-Drift">
**Teacher Action**: Teacher changes topic in the Workspace to review yesterday's material because the class didn't understand it.
**System Consequence**: Delta = 1. The `Living Curriculum Architecture` instantly triggers. It bumps Chapter 4 to tomorrow, but calculates that the semester now misses one period of content at the very end. The `Teacher Agent` flags the lowest-weight topic in the semester and highlights it in amber, recommending it be skipped later to make up time.
</SurfaceCard>

<SurfaceCard title="Scenario C: The Structural Drift">
**System Action**: A flu outbreak closes school for 4 days.
**System Consequence**: Delta = 4. The math says it is physically impossible to teach the syllabus before the midterm. The `Teacher Agent` refuses to act (`Tool` Mode). It drops a high-priority `Judgment Card` into the Principal's `Approval Inbox`.
</SurfaceCard>

</FeatureGrid>

---

## 3. The Recovery Spawning

When Scenario C is triggered, the Principal resolves the math using the system's predictive drafting.

1.  **Principal opens AI Draft**: The `Recommendation Engine` suggests spawning 2 weekend extra classes and absorbing 2 PE periods into Math periods. 
2.  **Execution**: The Principal signs off (`Collaborator` mode). 
3.  **The Wave**: Mintrix instantly fires notifications to the parents (about the weekend classes), alerts the PE teacher their periods are gone, re-syncs the timetable, and auto-updates the Teacher's daily planner. The Delta returns to 0.
