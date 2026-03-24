## Purpose

This document provides the formal definitions for **Event Templates** and the **Exception Taxonomy** within Mintrix.

It defines how school events are structured as reusable workflows and how the system identifies, classifies, and surfaces operational breakdowns (exceptions).

---

## 1. Event Template Definitions

Every event in Mintrix is a **Typed Workflow**. Instead of creating events from scratch, users spawn them from templates that inherit shared logic while supporting type-specific requirements.

### Shared Event Primitives
All event templates must include these core components:

| Component | Definition | Requirement |
| :--- | :--- | :--- |
| **Audience** | The specific group (Grade 5, Section A, Parents of Bus 12). | Mandatory |
| **Ownership** | The primary persona responsible for the event. | Mandatory |
| **Approval Path** | The sequence of sign-offs required before the event goes "Active". | Conditional |
| **Comm Object** | The draft notice, circular, or message associated with the event. | Mandatory |
| **Acknowledgment** | Tracking mechanism for who has seen/responded to the event. | Optional |
| **Payment/Fee** | Linked financial obligation or ad-hoc charge. | Optional |
| **Roster** | The list of confirmed participants. | Optional |
| **Calendar Footprint** | The blocked time on the institutional/personal calendars. | Mandatory |
| **Transparency Log** | The audit trail of every automated and human action. | Mandatory |

---

### Core Event Templates

#### 1. The "Off-Campus" Template (Trips/Excursions)
*Focus: Safety, Consent, and Logistics.*
- **Specialized Primitives**: Parent Consent Flow, Medical Info Access, Emergency Contact Roster, Day-of Attendance Tracker.
- **Success Criteria**: 100% Consent + 100% Payment (if applicable) + Approved Staff Ratio.

#### 2. The "Competitive" Template (Olympiads/Contests)
*Focus: Targeting and Achievement.*
- **Specialized Primitives**: Candidate Eligibility Engine, Registration Window, Preparation Resource Bundle, Result Ledger.
- **Success Criteria**: Target Participation Rate + Result Entry Completion.

#### 3. The "Operational Notice" Template (Circulars/Updates)
*Focus: Reach and Acknowledgment.*
- **Specialized Primitives**: Read-receipt Tracking, Reminder Escalation Logic.
- **Success Criteria**: 90%+ Acknowledgment within defined timeframe.

#### 4. The "Financial Event" Template (Ad-hoc Payments)
*Focus: Reconciliation and Clarity.*
- **Specialized Primitives**: Fee Head Mapping, Payment Gateway Link, Outstanding Balance Nudge.
- **Success Criteria**: 100% Reconciliation or Documented Exception.

---

## 2. Exception Taxonomy

An **Exception** is any state where the operational reality of the school deviates from the "Institutional Truth" or the "Event Plan."

### Exception Levels & Routing

| Level | Severity | Definition | Surface |
| :--- | :--- | :--- | :--- |
| **Level 1: Drift** | Low | Minor delay or missing non-critical data (e.g., late acknowledgment). | Daily Feed (Nudge) |
| **Level 2: Conflict** | Medium | Contradictory data or resource clash (e.g., double-booked venue). | Approval Inbox (Resolve) |
| **Level 3: Breakdown** | High | Critical failure in safety, money, or continuity (e.g., missing consent on trip day). | Exception Center (Triage) |

---

### Exception Categories (The Taxonomy)

#### 1. Setup Exceptions (Foundation Failures)
*Errors in the institutional substrate.*
- **Data Gap**: Missing timetable, unmapped syllabus, or orphan student records.
- **Authority Mismatch**: Conflicting approval rights between two personas.
- **Logic Inconsistency**: A fee rule that contradicts a grade-level policy.

#### 2. Event Exceptions (Execution Failures)
*Errors during a live event workflow.*
- **Roster Mismatch**: Student on roster but marked absent in class.
- **Consent Gap**: Event is "Active" but critical participants lack parent approval.
- **Financial Leak**: Unpaid obligations for a "Payment-Required" event.
- **Resource Conflict**: Staff reassigned to a substitution while owning an active event.

#### 3. Intelligence Exceptions (Trust Failures)
*Errors in the AI's orientation or action.*
- **Interpretation Error**: Misidentifying a routine absence as a chronic risk.
- **Boundary Breach**: Agent attempted an autonomous action in a "Human-Only" workflow.
- **Context Starvation**: Agent making recommendations without enough data signals.

---

## 3. The Exception Lifecycle

1.  **Detection**: The Event Engine identifies a deviation (e.g., a "Date Change" event).
2.  **Classification**: The system assigns a Level (1, 2, or 3) and a Category.
3.  **Surfacing**: The exception is routed to the appropriate persona's Exception Center or Daily Feed.
4.  **Resolution**: The human provides an **Override**, a **Correction**, or a **Policy Change**.
5.  **Learning**: The Shadow Agent records the resolution to improve future "Collaborator" recommendations.
