## Executive Purpose

This document constitutes the architectural ruleset for **Agent Personas and Journeys**.

In Mintrix, "Agents" are not pop-up conversational chatbots, nor are they mystical black boxes. They are highly structured, permissioned background workers that constantly manipulate the UI based on strict mathematical boundaries. Every Agent acts within a defined **Autonomy Ceiling**.

The purpose of this document is to define *what* they are legally allowed to do, *when* they fail, and *how* they render their existence to the human user.

---

## 1. The Operator Agent (The Silent Actor)

**Vibe:** Unseen, mathematically constrained, brutally fast, completely invisible unless audited.
**Authority:** Level 4 (Highest Autonomy).
**Legal Capabilities:** The Operator is allowed to directly write to the system database without a human signature. 

### The Operator's Scope
The Operator only handles highly structured, low-risk, deterministic actions.
*   Advancing syllabus markers based on simple time passing.
*   Archiving expired notifications.
*   Batch-processing successful API callbacks from third-party payment providers.

### The Computation Journey & UI State
1.  **Detection (Background State)**: The timetable engine detects it is Friday at 5:00 PM.
2.  **Validation**: The Agent scans all teacher inputs for the week against the mandated syllabus structure. 
3.  **Action (The Database Write)**: It silently advances the "Syllabus Position" for 400 classes.
4.  **UI Output (The Transparency Log)**: The Operator *never* interrupts a human via the Inbox or Feed. Instead, it generates 400 silent receipts and dumps them directly into the `Transparency Log` component for audit purposes. A Principal can see that the Operator did this, but they are not required to acknowledge it.

### Failure Mode (The Graceful Drop)
If the Operator encounters an unprecedented variable (e.g., A teacher manually input "Chapter 5" instead of selecting it from the dropdown), its math breaks. It instantly aborts the database write, downgrades itself to a `Collaborator` Agent, and routes the exception to the human.

---

## 2. The Collaborator Agent (The Draftsman)

**Vibe:** Intelligent, highly visible, context-aware, hesitant, seeking approval.
**Authority:** Level 3 (Restricted UI Write).
**Legal Capabilities:** The Collaborator is **never** allowed to hit "Save" on the database if the action violates human policy. It is strictly limited to manipulating the `Approval Inbox`.

### The Collaborator's Scope
It handles high-stakes, non-deterministic logic: suspending a student, overriding a budget, or mass-canceling classes.

### The Computation Journey & UI State
1.  **Trigger (Human Action)**: A teacher logs into the system to report a student fighting.
2.  **Context Loading**: The Agent wakes up and aggressively cross-references. It pulls the student's 4-year disciplinary history, their current grades, and reads the *literal written School Policy document* regarding 4th infractions (Suspension).
3.  **The Draft State (UI Mutation)**: It writes a Suspension Notice and updates the student's internal risk score natively in memory, but *stops*.
4.  **UI Output (The Judgment Card)**: It packages all this data into a massive, Amber-colored `Judgment Card`, complete with a primary button reading "Sign & Execute," and routes it directly to the Principal's `Approval Inbox`. It formally pauses its own execution loop until the human clicks the Amber button.

### Failure Mode (The Expiry Override)
If the card sits in the Inbox for 48 hours without a human signature, the system prevents stalling. The Collaborator initiates a `Protocol Abandonment` exception, withdrawing the card and alerting the System Admin that the Principal is bottlenecking a critical operation.

---

## 3. The Assistant Agent (The Annotator)

**Vibe:** Helpful, ambient, un-intrusive, skimmable. 
**Authority:** Level 2 (Read-Only UI Mutation).
**Legal Capabilities:** The Assistant cannot execute system changes; it solely manipulates visual emphasis (tags, badges, highlights) to draw human attention to a specific part of a page.

### The Assistant's Scope
Providing deep context *while* a human is working on something else.

### The Computation Journey & UI State
1.  **Trigger (Surface Interaction)**: A teacher opens their `Class Workspace` to grade a mid-term exam.
2.  **Silent Analysis**: The Agent analyzes historical data and realizes Student Y has failed 3 consecutive exams in this subject, and their parents have a logged divorce 3 weeks ago.
3.  **UI Output (The Badge & Sidebar)**: It does not change grades, draft emails, or block the Teacher from entering the grade. It simply injects a dynamic red `pill warning badge` reading *"At-Risk Profile"* next to the student's name in the UI. 
4.  **Deep Dive**: If the teacher decides to click the badge, the `Intelligence Sidebar` slides out from the right, dumping the context (the divorce, the prior grades) onto the screen without breaking the teacher's central grading flow.

### Failure Mode
The Assistant cannot fail operationally, because it is purely additive UX. If the Assistant crashes or fails its data fetch, the badge simply does not render, and the teacher proceeds with grading normally. This is the definition of Graceful Degradation.
