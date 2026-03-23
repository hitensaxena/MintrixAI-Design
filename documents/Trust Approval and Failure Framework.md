# Mintrix Trust, Approval, and Failure Framework

## Purpose

This document defines how Mintrix should earn trust before UI screens are designed.

It explains:

- what the system may do on its own,
- what always requires human approval,
- how recommendations should be explained,
- how failures and reversals should be handled,
- and what interaction patterns must exist to keep the system safe and believable.

This is one of the most important pre-UI documents. Without it, the interface may look intelligent but will behave unpredictably or feel unsafe.

---

## Core Trust Thesis

Mintrix should not ask for trust as a brand promise.

It should earn trust through visible behavior.

That means:

- acting only within clear boundaries,
- explaining why something was suggested or done,
- revealing confidence and uncertainty,
- keeping humans in control of sensitive actions,
- and making reversals and overrides easy to understand.

---

## Trust Principles

<SurfaceCard title="1. Context before action">
The system should not recommend or execute meaningful actions without enough context.

If context is incomplete, the system should either:

- ask for clarification,
- lower its confidence,
- or reduce autonomy.
</SurfaceCard>

<SurfaceCard title="2. Sensitive action requires human authority">
The more reputational, academic, disciplinary, or parent-facing an action is, the more likely it should require approval.
</SurfaceCard>

<SurfaceCard title="3. Every action needs a visible source of truth">
Users should be able to see:

- what triggered the action,
- which data was used,
- whether a rule, pattern, or recommendation engine was involved,
- and what happened after the action.
</SurfaceCard>

<SurfaceCard title="4. Reversibility matters">
Where possible, actions should be reversible or at least clearly auditable.
</SurfaceCard>

<SurfaceCard title="5. Confidence must shape behavior">
Low-confidence systems should not act like high-confidence systems.

During setup and calibration, autonomy should be deliberately limited.
</SurfaceCard>

---

## Decision Ladder

Mintrix has four kinds of system behavior:

| Mode | System behavior | Human role |
| --- | --- | --- |
| `Inform` | Show signal or status | Observe |
| `Recommend` | Suggest next action with rationale | Judge |
| `Approve` | Prepare action and request sign-off | Decide |
| `Operate` | Execute pre-approved routine and log it | Supervise |

This ladder should appear consistently across the product.

---

## Approval Policy by Action Type

| Action type | Default policy | Why |
| --- | --- | --- |
| Routine attendance reminder | Can operate if rule set is approved | Low sensitivity, repetitive |
| Standard fee reminder | Can operate if policy and timing are approved | Routine, bounded |
| Basic notice reminder | Can operate if content is already approved | Operationally repetitive |
| Lesson shift suggestion | Recommend only | Academic judgment required |
| Student intervention suggestion | Recommend or require approval | Sensitive and contextual |
| Parent communication draft | Approval required unless routine and low-risk | Tone and reputational sensitivity |
| Timetable substitution | Approval usually required; safe auto-rules can operate | Operational continuity but can affect teaching quality |
| Event reminder and follow-up | Mixed; routine reminders can operate | Depends on severity and audience |
| Escalation to principal | Approval or visible recommendation | Leadership intervention is sensitive |
| Disciplinary or reputational action | Never autonomous | Human authority must remain explicit |

---

## Confidence Model

The system should present and use confidence in three layers:

### 1. Data confidence

Does the system have enough reliable information?

Examples:

- timetable completeness
- syllabus mapping quality
- attendance consistency
- relationship mapping accuracy

### 2. Pattern confidence

Is the system confident in its interpretation?

Examples:

- class drift detection
- student risk identification
- communication timing prediction

### 3. Action confidence

Is the system confident enough to move from recommendation to operation?

Examples:

- routine reminders
- event follow-ups
- low-risk nudges

### Product rule

If any of these are low, the visible system behavior should step down.

For example:

- from `Operate` to `Approve`
- from `Approve` to `Recommend`
- from `Recommend` to `Inform`

---

## Failure Categories

<FeatureGrid>
<FeatureCard title="1. Data failure">
The system is missing or misunderstanding key operational data.

Examples:

- incomplete timetable
- wrong parent mapping
- missing syllabus structure

**Product response:**

- show confidence warning
- reduce automation
- route to setup/confidence surface
</FeatureCard>

<FeatureCard title="2. Interpretation failure">
The system infers the wrong pattern or priority.

Examples:

- over-flagging a student concern
- misreading temporary syllabus drift as chronic

**Product response:**

- show rationale
- make correction easy
- use the correction to improve future behavior
</FeatureCard>

<FeatureCard title="3. Action failure">
The system acts correctly in logic but the action has a poor outcome.

Examples:

- reminder sent at the wrong moment
- substitution accepted but causes teaching quality issues

**Product response:**

- log the action visibly
- allow override and review
- expose policy tuning points
</FeatureCard>

<FeatureCard title="4. Boundary failure">
The system acts where it should not have acted autonomously.

Examples:

- sending a sensitive parent message without approval
- escalating a reputational issue automatically

**Product response:**

- treat as a severe trust incident
- require audit visibility
- tighten future policy constraints
</FeatureCard>
</FeatureGrid>

---

## Override and Recovery Rules

Every critical workflow should support:

1. `View why`
The user can inspect the reason behind a suggestion or action.

2. `Change decision`
The user can override or correct the system's recommendation.

3. `Stop this pattern`
The user can prevent similar future actions until reviewed.

4. `Escalate`
The user can raise the issue to the appropriate authority.

5. `Learn from correction`
The system should incorporate corrections where safe and appropriate.

---

## Trust Surfaces the Product Must Have

These surfaces are non-negotiable if Mintrix is to operate as an AI system inside schools.

### Approval inbox

For judgment-requiring actions prepared by the system.

### Transparency log

For recent actions, triggers, rationale, and outcomes.

### Confidence indicators

For setup, recommendation quality, and automation readiness.

### Exception center

For unresolved or risky situations needing human attention.

### Policy and automation settings

For workflow-level control over what the system may do autonomously.

---

## Persona-Specific Trust Expectations

| Persona | Main trust need | Main fear |
| --- | --- | --- |
| Owner | early risk visibility without noise | discovering damage too late |
| Principal | safe delegation with clear authority | hidden escalation or loss of control |
| Admin | reliable routine automation | public-facing or operational mistakes |
| Teacher | useful support without academic override | AI making teaching decisions for them |
| Student | guidance that feels supportive, not intrusive | being reduced to a score or alert |
| Parent | clarity and correctness | impersonal or incorrect communication |

---

## Design Implications

### 1. Do not hide decisions inside polished cards

If the system is asking for approval, the user should clearly understand:

- what is being approved,
- why now,
- what happens if they accept,
- and what the downstream effect will be.

### 2. Every recommendation needs an explanation path

Not every screen needs to show full rationale at once, but every recommendation needs a fast path to explanation.

### 3. Logs are part of the product, not a back-office feature

The transparency log should be designed as a trust-building surface, not a technical audit appendix.

### 4. Calibration should be visible

In the first weeks, the system should openly show that it is learning the school rather than pretending full certainty.

### 5. Sensitive workflows should feel more deliberate

The interaction design for sensitive actions should have stronger confirmation, more context, and clearer ownership.

---

## Pre-UI Decisions to Lock

Before visual screen design begins, the team should lock:

1. which workflow categories may become `Operator`
2. which actions always require human approval
3. how confidence changes surface behavior
4. what explanation metadata is visible for every recommendation
5. how overrides, reversals, and policy tuning work
6. what counts as a severe trust incident

If these are not locked, the UI will be forced to absorb unresolved product contradictions.

