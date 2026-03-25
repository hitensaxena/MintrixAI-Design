## Architectural Purpose

This document details the **Teacher Grading and Intervention Flow**. 

Teachers are the operational bedrock of the school. If their UI is slow, the entire data substrate decays. Mintrix explicitly designs this flow to optimize the "45-Minute Window"—the hyper-dense period where a teacher must input data while simultaneously managing a room of 30 humans.

---

## 1. The Entrance: The Daily Workspace

A Teacher does not click through a 3-layer menu to find "Gradebook." 

### UX State 1: The Context Lockdown
When a teacher logs in at 9:00 AM, the `Daily Feed` checks the global Timetable. It knows they are teaching 10th Grade Biology *right now*.
1.  **The Auto-Spawn**: The UI suppresses all other classes and spawns the `Class Workspace`. 
2.  **No-Line Visuals**: The Workspace is a massive, pure `#ffffff` canvas. There are no distracting grey grids. The 30 student names are arranged in a breathable `Gap-8` flexbox array, serving as interactive `Noun Objects`.

---

## 2. Ingestion: Rapid Grade Entry

Entering 30 exam scores must be achieved with zero mouse clicks. It must rely exclusively on keyboard tabbing for speed.

### UX State 2: 10-Key Input Mode
*   The teacher hits `Tab`, targeting the first student's input box.
*   **The UI Response**: The targeted student's row elevates slightly (shadow drop) and highlights its borders in `Blue Signature Gradient`, confirming focus.
*   **The Intelligence Loop**: As the teacher types "65" and hits `Tab` to move to the next row, they do *not* have to press "Save". The system autosaves on Tab.

---

## 3. The Detection: Real-Time AI Profiling

As the sequence of "65", "88", "42" is being ingested, the `Assistant Agent` is running active statistical deviations on the backend.

### UX State 3: The Silent Intervention (The "At-Risk" Tag)
Student C receives a 42%. 
*   **The Algorithm**: The Agent cross-references Student C's historical data and detects a 5-week negative trend slope crossing the critical threshold.
*   **The Visual Rupture**: The AI does not generate a pop-up. Pop-ups interrupt the flow of entering the remaining 27 grades. Instead, the UI injects a small, throbbing Crimson (`#dc2626`) `Pill Badge` next to Student C's name that reads `[At-Risk Vector]`.

---

## 4. The Action: The Intelligence Sidebar

Once grading is complete, the Teacher's eyes return to the Crimson badge. They click the student's name.

### UX State 4: Contextual Drafting
*   **The Slide-Out**: The `Intelligence Sidebar` slides out from the right (`w-96`, Framer Motion duration: 400ms). The main screen dims (`backdrop-blur-sm`).
*   **The Context Dump**: The sidebar does not just show "Grade: 42". It dumps the synthesized 'Why'. *"Student C has missed 4 assignments this month. Related metadata: Parents log recent address change."*
*   **The Draft**: At the bottom of the sidebar, the AI presents a pre-drafted intervention: a highly professional, empathetic Email to the parent regarding the drop in grades. 
*   **The Execution**: The teacher skims the text, clicks 'Send', and the sidebar retracts, returning them instantly to their blank, pristine Workspace.

### Failure Mode (The Disagreement)
If the Teacher disagrees with the AI's email draft, they hit `Dismiss`. The Agent silently logs the dismissal to retrain its local weights (learning that this specific Teacher prefers physical meetings over emails), and vanishes. It never forces compliance.
