## Purpose

These persona cards define how Mintrix should think for each primary stakeholder.

They are not demographic profiles. They are intelligence-shaping references.

Each card answers:

- what this person is trying to achieve,
- what they fear,
- what their AI agent should know,
- what the system should prepare for them,
- and what the right interaction surfaces are.

---

## Shared Persona Rules

- Every persona gets a role-shaped agent, not a generic dashboard.
- Every persona should feel that Mintrix knows their real day, not only their formal role.
- Each agent should optimize for reduced anxiety, faster judgment, and better timing.
- Each agent should know when to defer to human authority.

---

<SurfaceCard title="1. Owner Intelligence Card" roles={["Owner"]}>
### Mission

Help the owner see institutional health early, compare campuses clearly, and intervene only where leverage is highest.

### Time horizon

- weekly
- monthly
- term-level

### Core questions

- Which campus is drifting?
- Where is academic quality at risk?
- Where is fee or operational performance weakening?
- Which principals need help or intervention?

### What creates anxiety

- silent institutional drift
- late visibility into breakdowns
- inconsistent standards across campuses
- reputational risk emerging without warning

### What the agent should know

- campus-by-campus trend lines
- high-severity unresolved issues
- operational and academic anomalies
- fee collection health
- parent communication failure clusters

### What the agent should proactively prepare

- executive risk summary
- cross-campus comparison views
- strategic intervention suggestions
- short list of issues requiring owner involvement

### What must stay human

- strategic changes
- leadership interventions
- reputational calls

### Best surfaces

- `Role-based Dashboard`
- `Exception Center`
- `Transparency Log`
</SurfaceCard>

---

<SurfaceCard title="2. Principal Intelligence Card" roles={["Principal"]}>
### Mission

Help the principal keep the school coherent across academics, operations, staff, parents, and events.

### Time horizon

- day
- week

### Core questions

- Which classes or teams are at risk today?
- What needs my judgment right now?
- Which staff or parent issues could escalate?
- Which events threaten continuity?

### What creates anxiety

- discovering issues late
- operational chaos on busy days
- misalignment between academic plan and daily reality
- parent-facing escalation without preparation

### What the agent should know

- class-level syllabus drift
- staff absences and substitution pressure
- event and schedule conflicts
- sensitive parent communication contexts
- institution-level exceptions needing resolution

### What the agent should proactively prepare

- morning operations brief
- academic risk summary
- prioritized approvals
- exception options with tradeoffs

### What must stay human

- high-stakes academic decisions
- conflict resolution
- public-facing and reputational responses
- override decisions

### Best surfaces

- `Role-based Dashboard`
- `Approval Inbox`
- `Exception Center`
- `Transparency Log`
</SurfaceCard>

---

<SurfaceCard title="3. Admin Intelligence Card" roles={["Admin", "Operations"]}>
### Mission

Help the admin team keep the school operationally synchronized with less manual chasing and fewer dropped tasks.

### Time horizon

- hour
- day

### Core questions

- What is pending?
- What changed today?
- What needs to be sent, confirmed, or reconciled?
- Which workflows are blocked?

### What creates anxiety

- repetitive follow-up
- missing information
- conflicting changes
- scattered communication
- untracked event dependencies

### What the agent should know

- active queues
- missing acknowledgments
- event dependencies
- payment follow-ups
- timetable pressure points
- setup gaps

### What the agent should proactively prepare

- prioritized task bundles
- event packs
- reminder queues
- reconciliation views
- next-step setup guidance

### What must stay human

- unusual exceptions
- disputed payments
- sensitive notices
- operational judgment under ambiguity

### Best surfaces

- `Workspace`
- `Approval Inbox`
- `Exception Center`
- `Transparency Log`
</SurfaceCard>

---

<SurfaceCard title="4. Teacher Intelligence Card" roles={["Teacher", "Educator"]}>
### Mission

Help the teacher teach with context, stay ahead of syllabus risk, and act early on student needs without drowning in admin work.

### Time horizon

- current period
- today
- this week

### Core questions

- What am I teaching now?
- Which class is behind?
- Which students need attention?
- What did the AI already prepare?
- What do I need to approve?

### What creates anxiety

- admin burden
- weak visibility into student struggle
- fragmented lesson context
- late knowledge of schedule and event changes
- being held accountable without support

### What the agent should know

- timetable and live syllabus state
- section-by-section pace
- student weaknesses and at-risk patterns
- upcoming assessments
- communication obligations
- substitutions and event impacts

### What the agent should proactively prepare

- today’s teaching context
- lesson shifts and recovery suggestions
- intervention suggestions
- parent communication drafts
- class risk summary

### What must stay human

- final teaching decisions
- high-context student handling
- sensitive parent communication

### Best surfaces

- `Daily Feed`
- `Workspace`
- `Approval Inbox`
</SurfaceCard>

---

<SurfaceCard title="5. Student Intelligence Card" roles={["Student", "Learner"]}>
### Mission

Help the student understand what matters now, where they are weak, and how to improve before risk becomes failure.

### Time horizon

- today
- this week
- next assessment

### Core questions

- What am I learning now?
- What is coming next?
- Where am I weak?
- What should I revise tonight?

### What creates anxiety

- unclear expectations
- generic learning support
- discovering problems too late
- feeling invisible in the system

### What the agent should know

- current syllabus location
- recent performance
- topic-level gaps
- attendance and participation context
- upcoming deadlines and exams

### What the agent should proactively prepare

- micro-lessons
- revision prompts
- risk warnings before exams
- tailored next actions

### What must stay human

- serious academic escalation
- sensitive pastoral intervention
- disciplinary interpretation

### Best surfaces

- `Daily Feed`
- `Workspace`
</SurfaceCard>

---

<SurfaceCard title="6. Parent Intelligence Card" roles={["Parent", "Guardian"]}>
### Mission

Help the parent feel informed, reassured, and able to act without chasing the school for clarity.

### Time horizon

- day
- week
- event or payment cycle

### Core questions

- Is my child okay?
- What is happening academically?
- What do I need to acknowledge or pay for?
- What event or school requirement is coming up?

### What creates anxiety

- being told too late
- lost circulars
- vague academic signals
- inconsistent communication

### What the agent should know

- communication history
- acknowledgment state
- attendance and progress context
- event participation
- payment obligations

### What the agent should proactively prepare

- concise progress summaries
- notice reminders
- consent and payment prompts
- parent-facing explanations with context

### What must stay human

- sensitive escalation
- reputation-sensitive communication
- disciplinary interpretation

### Best surfaces

- `Daily Feed`
- `Workspace`
- `User Profile and Settings`
</SurfaceCard>

---

## Cross-Persona Comparison

| Persona | Primary mode | Main need | What “good” feels like |
| --- | --- | --- | --- |
| Owner | Oversight | Strategic visibility | “I know where intervention matters.” |
| Principal | Judgment | Institutional control | “I see what matters before it breaks.” |
| Admin | Execution | Operational coherence | “The system keeps the day moving.” |
| Teacher | Daily action | Teaching context | “I’m supported, not overloaded.” |
| Student | Learning support | Timely academic help | “I know what to do next.” |
| Parent | Confidence | Reliable visibility | “I’m informed without chasing.” |

---

## Design and Product Implications

These cards imply that:

- Mintrix should not have one generic home screen
- agent behavior should differ by role, not just permissions
- microcopy, alerting, and recommendation tone should vary by persona
- trust boundaries must vary by workflow and authority
- the daily content feed should look and feel different for teacher, student, and parent even when the underlying curriculum state is shared

---

## Immediate Use of This Document

Use these persona cards to:

- design role dashboards,
- define feed logic,
- shape approval and exception surfaces,
- write UX copy,
- choose what each agent prepares proactively,
- and validate whether a proposed UI actually feels role-native.
