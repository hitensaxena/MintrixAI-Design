## Purpose

This document defines how Mintrix should distribute work between humans and AI across the major school workflows.

It is not a list of features. It is a decision-rights document.

It should help answer:

- where the system behaves like a tool,
- where it behaves like an assistant,
- where it behaves like a collaborator,
- where it behaves like an operator,
- and where humans must always retain explicit control.

---

## Autonomy Model

| Level | Definition | Typical user feeling |
| --- | --- | --- |
| `Tool` | Mintrix responds when explicitly asked | “I asked, it answered.” |
| `Assistant` | Mintrix prepares for predictable needs | “It got things ready for me.” |
| `Collaborator` | Mintrix detects patterns and recommends action | “It noticed what I should consider next.” |
| `Operator` | Mintrix executes pre-approved routines | “It handled that automatically and showed me after.” |

## Governance Rule

As a default:

- high-frequency, low-risk workflows can move toward `Operator`
- context-rich but judgment-heavy workflows should stay in `Collaborator`
- reputational, disciplinary, or institution-shaping actions should never bypass explicit human approval

---

## Matrix by Workflow

| Workflow | Primary persona | Supporting personas | Tool | Assistant | Collaborator | Operator | Approval owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Attendance review and follow-up | Teacher, Admin | Principal, Parent | Query student/class history | Pre-build absence list and context | Flag patterns, suggest escalation | Send routine absence alerts | Teacher/Admin |
| Daily teaching plan | Teacher | Principal, Student | Show timetable and topic | Prepare lesson context from syllabus | Suggest lesson shifts or reinforcement | None by default | Teacher |
| Syllabus pace management | Teacher, Principal | HOD-style academic lead if present | Show pace vs plan | Prepare class-by-class pace summary | Recommend recovery or redistribution | None by default | Teacher/Principal |
| Student academic intervention | Teacher | Student, Parent, Principal | Retrieve learner profile | Prepare support options and resources | Recommend intervention and communication | Trigger low-risk student nudges | Teacher |
| Parent communication | Teacher, Admin | Principal | Show communication history | Draft message in correct tone and context | Recommend escalation level | Send routine reminders | Teacher/Admin/Principal by sensitivity |
| Fee recovery | Admin | Parent, Owner | Show dues and payment context | Prepare reminder queue | Recommend prioritization and escalation | Send standard reminders | Admin |
| Timetable substitution | Admin | Principal, Teacher | Show open slots and conflicts | Prepare substitute options | Recommend best-fit continuity plan | Apply safe substitution rule sets | Admin/Principal |
| Exam readiness | Teacher, Principal | Student | Show coverage and assessment schedule | Prepare readiness summary | Recommend revision focus and exam support | None by default | Teacher/Principal |
| Principal morning briefing | Principal | Admin, Teacher | Query issue status | Prepare daily briefing digest | Recommend interventions | None except routine briefing generation | Principal |
| Owner portfolio briefing | Owner | Principal | Query school/campus state | Prepare trend summary | Recommend strategic focus areas | None by default | Owner |
| School setup progress | Admin, Onboarding lead | Principal | Show missing configuration | Prepare next setup steps | Recommend minimum viable setup path | Validate routine completeness checks | Admin/Principal |
| Calibration period management | Onboarding lead, Admin | Principal, Product team | Show confidence and missing signals | Summarize what the system has learned | Recommend next data/config actions | Apply low-risk defaults as confidence grows | Admin/Principal |
| School trip workflow | Admin, Principal | Teacher, Parent, Student | Show trip state | Prepare forms, rosters, consents, notices | Recommend unresolved next actions | Send reminders and routine updates | Principal/Admin |
| Olympiad workflow | Admin, Teacher | Student, Parent | Show participation and deadlines | Prepare targeting and comms | Recommend who should participate and what is pending | Send standard reminders | Teacher/Admin |
| Tournament workflow | Admin, Teacher | Student, Parent | Show schedule and team state | Prepare logistics and rosters | Recommend team coordination actions | Send logistics reminders | Teacher/Admin |
| Co-curricular workflow | Admin, Teacher | Student, Parent | Show participation records | Prepare enrollment and attendance views | Recommend student follow-up | Send low-risk reminders | Admin/Teacher |
| Notices and circulars | Admin | Principal, Parent | Retrieve notice history | Draft audience and structure | Recommend follow-up and acknowledgment targeting | Send standard reminders | Admin/Principal |
| Ad-hoc payments | Admin | Parent, Principal | Show obligation and reconciliation state | Prepare parent bundle and tracking view | Recommend follow-up | Send approved reminders | Admin |
| High-severity exception resolution | Principal | Admin, Teacher | Show full context trail | Summarize affected entities and choices | Recommend resolution paths | Never autonomous | Principal |
| Transparency and audit | All leadership personas | All users | Query action history | Summarize recent autonomous activity | Highlight suspicious or unusual patterns | Always-on background logging | No approval; visibility only |

---

## Workflow Groupings

<SurfaceCard title="1. Academic workflows">
- daily teaching plan
- syllabus pace
- assessments
- student intervention
- AI tutor

**Default posture:**

- mostly `Assistant` and `Collaborator`
- very little `Operator`

**Reason:**

Academic work is highly contextual and should stay teacher-led even when deeply AI-supported.
</SurfaceCard>

<SurfaceCard title="2. Operational workflows">
- attendance follow-up
- timetable substitutions
- notices
- fee reminders
- routine event reminders

**Default posture:**

- strong `Assistant`
- selective `Operator` where category is trusted

**Reason:**

These are repetitive, high-frequency, and have clear rule boundaries.
</SurfaceCard>

<SurfaceCard title="3. Strategic workflows">
- principal interventions
- owner oversight
- cross-school prioritization

**Default posture:**

- mostly `Tool` and `Collaborator`

**Reason:**

Strategic judgment should stay human even when the system is proactive.
</SurfaceCard>

<SurfaceCard title="4. Setup and calibration workflows">
- post-sales handoff
- configuration sequencing
- calibration
- confidence building

**Default posture:**

- `Assistant` and `Collaborator`
- selective `Operator` only for validation and consistency checks

**Reason:**

The system can guide setup, but it should not invent institutional truth.
</SurfaceCard>

---

## Persona-to-Autonomy Tendencies

| Persona | Default autonomy comfort | Why |
| --- | --- | --- |
| Owner | Low to medium | Wants synthesized intelligence, not automated strategic decisions |
| Principal | Medium | Accepts strong preparation and recommendation, but must retain consequential authority |
| Admin | Medium to high | Gains the most value from routine operational automation |
| Teacher | Medium | Wants support and foresight, but not loss of instructional ownership |
| Student | Medium to high | Benefits from proactive guidance and tutoring nudges |
| Parent | Medium | Benefits from reliable communication, but sensitive messaging must stay governed |

---

## Approval Rules

<SurfaceCard title="Always require explicit approval">
- sensitive parent communication
- reputational or disciplinary escalations
- academic policy changes
- conflict resolution involving staff or safety
- unusual payment or fee exceptions
- ambiguous event changes with downstream consequences
</SurfaceCard>

<SurfaceCard title="Good candidates for autonomous execution">
- routine attendance reminders
- standard notice reminders
- event follow-up reminders after prior approval
- standard fee nudges
- low-risk student revision prompts
- routine transparency logging and daily digests
</SurfaceCard>

<SurfaceCard title="Strong collaborator zone">
- lesson plan changes
- syllabus recovery suggestions
- intervention suggestions
- substitute recommendations
- event dependency resolution
- principal operational interventions
</SurfaceCard>

---

## Surface Mapping

| Surface | Best autonomy use |
| --- | --- |
| Chat / Query | Tool |
| Daily content feed | Assistant + Collaborator |
| Role dashboard | Tool + Assistant |
| Approval inbox | Collaborator to human |
| Exception dashboard | Collaborator under uncertainty |
| Transparency log | Operator visibility |
| AI tutor | Assistant + Collaborator + selective Operator |

---

## Failure Checks

The autonomy model is wrong if:

- teachers feel replaced instead of supported
- principals lose visibility into why the system acted
- admins cannot stop a workflow quickly
- parents receive sensitive communication without human judgment
- students are nudged in ways that are context-blind
- the product behaves like a passive dashboard despite calling itself intelligent

---

## Immediate Use of This Document

This matrix should be used to:

- design the approval model,
- define the exception taxonomy,
- choose what appears in the transparency log,
- structure role dashboards,
- and align engineering on which workflows need rule-based automation versus recommendation support.
