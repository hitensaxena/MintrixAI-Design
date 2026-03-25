## Purpose

This document details the **Setup and Onboarding** workflow.

Onboarding in Mintrix is not a singular checklist completed upon software purchase. It is the active, continuous workflow of defining the physical and operational realities required for the Intelligence engines to function.

---

## 1. The Initialization Sequence

When Mintrix boots up for the first time, it operates at `Tool` Autonomy. It has zero confidence in the data. The Admin must step through the 5 Layers of Setup.

<FeatureGrid>

<SurfaceCard title="Phase 1: Substrate Definition">
The `Admin Agent` presents a sequence of Workspace arrays. The human inputs the hard infrastructure: Campus size, Classroom counts, Timetable blocks, and Subject definitions.
*System Status*: Still `Tool` level. Intelligence routing cannot begin without Users.
</SurfaceCard>

<SurfaceCard title="Phase 2: Roster & Role Binding">
Users are added either via bulk CSV upload or manual entry. Mintrix instantly cross-references the Users against the Substrate.
*System Status*: Resolves to `Assistant` level. It now knows *Who* belongs *Where*.
</SurfaceCard>

<SurfaceCard title="Phase 3: Policy Injection">
The specific governance rules are toggled. (e.g., "Teachers cannot see the unified financial ledger", "3 Absences = Warning").
*System Status*: The `Autonomy Matrix` establishes its baseline ceilings. 
</SurfaceCard>

</FeatureGrid>

---

## 2. The Daily Handoff (Continuous Onboarding)

Because a school breathes, Setup is technically a daily workflow. 

### Resolving Missing Ground Truth
If a Teacher creates an ad-hoc class but forgets to assign it a Venue, they have broken Layer 1 Setup. 

1.  **Detection**: The `Exception Engine` instantly catches the void.
2.  **Workflow Trigger**: It does not allow the Teacher to proceed. It spawns an inline `Setup Override` card directly inside the Teacher's class creation workflow: *"Mintrix Error: You cannot schedule Cohort B without an available physical room. Click here to view unassigned venues."*
3.  **Resolution**: The Teacher corrects the data. The system absorbs the correction, restores its Confidence Score, and continues execution.

This micro-workflow ensures that the foundational `Setup Architecture` never rots over a 9-month school year.
