## Purpose

This document outlines **Policies, Trust, and Governance**. 

If the `Setup Architecture` maps the physical reality of the school, the Governance Layer dictates the philosophical boundaries of Mintrix. It formally defines what the `Intelligence Layer` is *legally and ethically prohibited from doing autonomously*.

---

## 1. The Core Law of Mintrix Governance

**"Algorithms advise; Humans authorize."**

The platform is designed to automate the operational drudgery (Timetable syncing, fee invoicing, attendance aggregation) so that humans can focus entirely on high-judgment domains (Discipline, Pedagogy, Employment). 

Mintrix algorithmically enforces this boundary by hard-coding specific workflow types to specific Autonomy Ceilings.

---

## 2. The Hard-Coded Autonomy Ceilings

The system allows school Admins to tune `Settings`, but certain domains have hard-coded ceilings that cannot be bypassed, ensuring trust and legal compliance.

<FeatureGrid>

<SurfaceCard title="Disciplinary & Reputational Workflows">
**Examples**: Suspension letters, Academic probation warnings, Staff performance notes.
**Hard Ceiling**: `Collaborator` (Requires Signature).
**Governance Rule**: The `Teacher Agent` or `Principal Agent` may use historical data to draft a perfectly articulated warning letter. However, the system is permanently banned from executing (`Operator` mode) reputational workflows. It must route through the `Approval Inbox`.
</SurfaceCard>

<SurfaceCard title="External Financial Execution">
**Examples**: Auto-debiting parent bank accounts, paying vendor invoices.
**Hard Ceiling**: `Collaborator` (Requires Signature).
**Governance Rule**: While Mintrix can freely generate ledgers and *issue* invoices internally via `Operator`, it cannot autonomously interface with external payment gateways to withdraw funds. Financial transfer demands human liability.
</SurfaceCard>

<SurfaceCard title="Pedagogical Override">
**Examples**: Marking a student as passing/failing, forcefully changing a syllabus mapping.
**Hard Ceiling**: `Assistant` (Proactive Drafting).
**Governance Rule**: Mintrix tracks the `Living Curriculum State` and highlights Drift. It will recommend passing marks based on math, but it cannot override a Teacher's final Workspace input. The human remains the absolute arbiter of academic truth.
</SurfaceCard>

<SurfaceCard title="Structural Real-Time Logistics">
**Examples**: Auto-assigning substitute teachers, generating daily absence notices.
**Hard Ceiling**: `Operator` (Autonomous Execution).
**Governance Rule**: This is the designated playground of Mintrix AI. Provided the Confidence Score remains $>85\%$, the system is fully authorized to manipulate daily logistics to keep the school functional without human micro-management.
</SurfaceCard>

</FeatureGrid>

---

## 3. Trust Erosion and The Dead-Man's Switch

Because Mintrix acts as an active `Operator` in logistics, it must possess a fail-safe against compounding hallucination. 

**The Exception Threshold (The Dead-Man's Switch)**:
1.  The `Autonomy Matrix` monitors the `Exception Center`.
2.  If the platform generates $>15$ unresolved high-severity exceptions in a 1-hour window (e.g., a massive data corruption causes 15 classes to be double-booked).
3.  The Governance Layer triggers the Dead-Man's Switch.
4.  **Action**: The system globally degrades ALL `Operator` workflows to `Collaborator` mode. 
5.  **Surface Result**: The `Daily Feed` updates with a massive red banner indicating "Operational Degradation." The AI will not fire a single automated email, calculation, or roster change until the Principal manually clears the exception queue, restoring Trust.

---

## 4. The View Why Receipt

True governance requires auditing. Mintrix enforces Trust by guaranteeing every recommendation and execution mathematically proves its logic.

Any time the AI acts, it generates a `View Why` receipt in the `Transparency Log`. This receipt is written in human-readable causal logic:
*   *"I executed substitution workflow X..."*
*   *"Because Teacher Y logged sick in Workspace A..."*
*   *"And Policy Z stated Teacher X was the only available backup..."*

This prevents the "black box" syndrome that causes institutions to abandon traditional AI platforms.
