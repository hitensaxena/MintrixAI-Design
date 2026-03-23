# Mintrix Workflow Priority Map

## Purpose

This document defines which workflows should be prioritized before UI screen design begins.

It is not a backlog. It is a strategic sequencing document that helps the team decide:

- which workflows deserve first-class product attention,
- which workflows should shape the first screen set,
- which workflows can remain secondary in the first design cycle,
- and how Mintrix should avoid drifting into a broad but shallow ERP product.

This prioritization is grounded in the Mintrix foundation documents, the audit report, the system brain map, the autonomy matrix, and the setup/event architecture map.

---

## Prioritization Logic

Each workflow is assessed against five criteria:

1. `Frequency`
How often the workflow appears in school life.

2. `Strategic value`
How strongly the workflow expresses Mintrix's AI-operating-system thesis.

3. `Trust complexity`
How important approval, transparency, and exception handling are to the workflow.

4. `Cross-persona impact`
How many core personas are affected by the workflow.

5. `Foundational dependency`
Whether the workflow helps define the product's core architecture and not just its surface.

---

## Priority Tiers

### Tier 1: Must shape the first design wave

These are the workflows that should drive the first screen set and interaction model.

| Workflow | Why it is Tier 1 | Primary personas | Core surfaces |
| --- | --- | --- | --- |
| Daily teaching and class preparation | It is where Mintrix proves it understands the school day in motion | Teacher | Daily feed, class workspace, recommendation panel |
| Syllabus pace and living curriculum tracking | It expresses the calendar-syllabus binding at the heart of the product | Teacher, Principal | Pace dashboard, class detail, risk summaries |
| Principal daily operations and exception management | It turns Mintrix into a judgment-support system rather than a passive dashboard | Principal, Admin | Morning brief, approval inbox, exception center |
| Attendance review and follow-up | It is high-frequency, operationally important, and suitable for mixed autonomy | Teacher, Admin | Alert queue, action list, transparency log |
| Setup progress and calibration visibility | It prevents the system from feeling magical but ungrounded during onboarding | Admin, Principal | Setup tracker, confidence view, missing-data prompts |
| Approval, exception, and transparency flows | These are core to anti-UI and trust; they should shape the whole product early | Principal, Admin, Teacher | Approval inbox, exception center, action log |

### Tier 2: Should be designed soon after the core wave

These workflows are strategically important, but they should build on the system model established by Tier 1.

| Workflow | Why it is Tier 2 | Primary personas | Core surfaces |
| --- | --- | --- | --- |
| Student intervention and support | It is a major strategic use case, but depends on curriculum, attendance, and assessment context | Teacher, Student, Parent | Student signal view, intervention workspace |
| Parent communication | High-value and emotionally sensitive; should inherit trust rules from the core product | Teacher, Admin, Principal | Communication drafts, approval flows, history |
| Timetable substitution and disruption handling | Important for operational continuity, but best designed after exception logic is stable | Admin, Principal, Teacher | Change view, substitute recommendations |
| Exam readiness and revision support | Important academically, but depends on a mature curriculum model | Teacher, Student, Principal | Readiness dashboard, action prompts |
| Fee follow-up and routine collections | Useful and operationally strong, but not the clearest expression of the product thesis | Admin, Parent, Owner | Reminder queue, status board |
| Event workflow orchestration | Important and document-backed, but should extend the core event architecture rather than define the first UI set | Admin, Principal, Teacher | Event console, approval state, participant views |

### Tier 3: Should be enabled after the core architecture is stable

These workflows matter, but they should not drive first-screen architecture.

| Workflow | Why it is Tier 3 | Primary personas | Core surfaces |
| --- | --- | --- | --- |
| Owner portfolio oversight | Valuable, but derivative of school-level intelligence already built for principals | Owner | Executive brief, risk summary |
| AI tutor and student-facing learning support | Important long term, but should inherit the academic intelligence layer first | Student, Teacher | Tutor panel, daily support view |
| Cross-campus benchmarking | Relevant for larger institutions, but downstream of stable school-level signals | Owner | Comparative analytics |
| Advanced event families | These should arrive once the shared event engine is stable | Admin, Teacher, Parent | Specialized event templates |

---

## Recommended First Design Program

Before broad screen exploration, the first screen program should focus on the smallest set of surfaces that can express the whole operating model.

### First-wave screen cluster

1. Teacher daily dashboard
2. Teacher class detail / teaching workspace
3. Principal morning brief
4. Approval inbox
5. Exception center
6. Setup progress and calibration view
7. Transparency log

These seven surfaces can demonstrate:

- living curriculum,
- proactive intelligence,
- trust boundaries,
- mixed autonomy,
- real-world operations,
- and post-setup confidence building.

---

## Workflow Ranking by Persona

<FeatureGrid>
<FeatureCard title="Teacher">
1. Daily teaching and preparation
2. Syllabus pace and curriculum adjustment
3. Student intervention
4. Attendance follow-up
5. Parent communication
6. Exam readiness
</FeatureCard>

<FeatureCard title="Principal">
1. Morning operations and academic brief
2. Exception management
3. Approvals and escalations
4. Syllabus drift visibility
5. Event risk monitoring
6. Parent-sensitive issue oversight
</FeatureCard>

<FeatureCard title="Admin">
1. Attendance and follow-up operations
2. Timetable substitution and routine continuity
3. Setup completion and calibration support
4. Notices and communication workflows
5. Event operations
6. Ad-hoc payment and fee follow-up
</FeatureCard>

<FeatureCard title="Owner">
1. Institutional risk visibility
2. Cross-campus drift spotting
3. Strategic intervention signaling
4. Fee and operational health monitoring
</FeatureCard>

<FeatureCard title="Student">
1. Daily academic expectations
2. AI tutor support
3. Revision and intervention guidance
4. Event participation clarity
</FeatureCard>

<FeatureCard title="Parent">
1. Important school communication
2. Student concern visibility
3. Payments and consent workflows
4. Event and schedule clarity
</FeatureCard>
</FeatureGrid>

---

## Design Implications

### 1. Do not start with module coverage

If the team starts by asking, "Which modules do we need?" the product will drift toward ERP logic.

The right question is:

Which workflows most clearly demonstrate that the system is active, contextual, and trustworthy?

### 2. Prioritize repeated judgment surfaces over one-off admin screens

The first UI set should not over-invest in low-frequency admin forms.

It should prioritize:

- recurring daily decision points,
- proactive recommendations,
- approval moments,
- and exception-handling experiences.

### 3. Setup deserves first-wave treatment

Setup and calibration are not internal implementation details.

They shape the user's trust in the entire product and must be visible in early product design.

### 4. Event design should inherit the shared architecture

The team should avoid designing isolated "trip screens" or "olympiad screens" too early.

Instead, it should first define the shared event engine and then specialize.

---

## Anti-Patterns to Avoid

- Designing fee, timetable, and notices as separate traditional modules before the shared surface logic exists
- Designing screens before the approval and exception pattern is stable
- Treating owner analytics as a first-wave UI priority
- Designing student and parent experiences before the internal school operating loop is coherent
- Over-prioritizing decorative dashboards over action-bearing surfaces

---

## Output for the Design Team

Before UI exploration begins, the team should treat the following as locked first-wave workflow priorities:

- teacher daily teaching workflow,
- living curriculum and pace workflow,
- principal operations and exception workflow,
- approval and transparency workflow,
- setup and calibration workflow.

Everything else should either inherit from those patterns or wait until those patterns are stable.

