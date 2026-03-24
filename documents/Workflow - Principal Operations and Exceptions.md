## Purpose

This document defines the **Principal Operations and Exception Workflow** in Mintrix. It is the primary "Command and Control" engine for school leadership.

The Principal's mission is to maintain institutional coherence. This workflow enables them to move from "Managing everything" to "Managing by Exception."

---

## 1. The Workflow Loop

The Principal's daily operations are structured into a three-stage cycle:

### Stage 1: The Morning Briefing (The Pulse)
*Surface: Daily Feed*
- **The Question**: "What is the health of the school *right now*?"
- **System Action**: Agent generates a synthesized briefing.
- **Content**:
    - Staff attendance and substitution status.
    - High-severity student or parent incidents from the last 24 hours.
    - Major event status (e.g., today's field trip).
    - Top three issues requiring judgment.

### Stage 2: Triage and Resolution (The Action)
*Surface: Exception Center & Approval Inbox*
- **The Question**: "What is breaking, and what needs my signature?"
- **System Action**: Agent routes unresolved issues to the **Exception Center** and prepared actions to the **Approval Inbox**.
- **Actions**:
    - Sign off on a student intervention plan.
    - Resolve a "Venue Conflict" for an upcoming tournament.
    - Approve a high-sensitivity parent communication draft.

### Stage 3: Operational Oversight (The Reflection)
*Surface: Principal Dashboard*
- **The Question**: "Where are the long-term risks?"
- **System Action**: Agent prepares trend summaries.
- **Content**:
    - Syllabus drift by department.
    - Fee collection health by campus.
    - Staff performance and substitute frequency.

---

## 2. Exception Management Logic

Mintrix uses a three-tier exception system to keep the Principal focused on high-leverage issues.

| Tier | Severity | Definition | Surface |
| :--- | :--- | :--- | :--- |
| **Tier 1** | High | Safety, financial, or reputational breakdown (e.g., missing consent on trip day). | Daily Feed & Exception Center |
| **Tier 2** | Medium | Process or logic breakdown (e.g., class without a substitute for 2 periods). | Exception Center |
| **Tier 3** | Low | Routine delay or drift (e.g., late acknowledgment of a notice). | Admin Dashboard (Hidden from Principal unless chronic) |

---

## 3. Surface Mapping

| Surface | Principal's Use Case |
| :--- | :--- |
| **Daily Feed** | The "Urgent Now" briefing. |
| **Approval Inbox** | Final judgment on prepared system actions. |
| **Exception Center** | Triage of operational and academic breakdowns. |
| **Principal Dashboard** | Long-term school health and campus comparison. |

---

## 4. Interaction Patterns

| Pattern | Description |
| :--- | :--- |
| **The "Judgment Card"** | A summary card in the Approval Inbox showing: Choice, Context, Rationale, and Potential Impact. |
| **The "Drift Alert"** | A visual indicator for when a department or grade is falling behind plan. |
| **The "Context Thread"** | One-tap access to the history of a student or teacher when an exception occurs. |

---

## 5. Autonomy & Trust

-   **Briefing Preparation**: **Assistant** (System summarizes; Principal reads).
-   **Routine Alerting**: **Operator** (System notifies Admin of Tier 3 exceptions).
-   **High-Severity Triage**: **Collaborator/Human Only** (System suggests paths; Principal decides).
-   **Staff Intervention**: **Approve/Human Only** (Human signature is mandatory).

---

## 6. Success Criteria: "Judgment at the Speed of Data"

The goal is to eliminate "Discovering issues too late." The Principal should feel that the system is their "Chief of Staff," preparing the battlefield so they can focus on making high-quality leadership decisions.
