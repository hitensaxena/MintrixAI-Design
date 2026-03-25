## Purpose

This document explains the **Setup, Tuning, Setting, and Maintenance of Intelligence**.

In traditional software, "Admin Settings" involve toggling booleans (`Enable Email = True`). In Mintrix, "Settings" are the ongoing process of calibrating the neural pathways of the `Persona Agents`. You do not set up Mintrix once; you continuously tune its intelligence.

---

## 1. Initial Intelligence Calibration (The Bootup)

When a school first deploys Mintrix, the AI exists in a state of high mathematical capability but zero contextual history. 

### The Tone & Ethos Tuning
During Layer 4 Setup (`Intelligence Calibration`), the Admin must define the institution's personality. This dictates how the `Semantic Processor` generates parent-facing emails and student interface prompts.
*   **Parameter**: `Strict/Formal` vs. `Warm/Nurturing`.
*   **Impact**: A late fee drafted by the Admin Agent under `Strict` reads: *"Your account is 5 days delinquent."* Under `Warm` reads: *"We noticed your payment hasn't arrived; please reach out if you need assistance."*

### The Escalation Timers
The Admin defines the "Patience Threshold" of the intelligence.
*   *If a syllabus drifts by 5 days, how long does the Teacher Agent wait before escalating a Warning Card to the Principal Agent?* 
*   This tuning prevents the Inbox from becoming flooded (Micro-management) or remaining silent during a crisis (Neglect).

---

## 2. Continuous Operational Tuning (The Maintenance)

Mintrix "learns" by measuring the delta between its recommendations and human actions. Maintenance is largely an automated process driven by the `Transparency Log` and `Approval Inbox`.

<FeatureGrid>

<SurfaceCard title="1. Rejection Analytics">
If the `Principal Agent` drafts 10 `Judgment Cards` recommending the suspension of students for uniform violations, and the Principal clicks **"Decline"** 10 times...
*   **Tuning Action**: The AI actively registers a policy shift. It lowers its internal weighting for uniform violations, effectively tuning itself out of generating those cards in the future.
</SurfaceCard>

<SurfaceCard title="2. The 'Edit Before Send' Heuristic">
If the `Teacher Agent` drafts an intervention email to a parent, but the Teacher uses the Workspace to manually edit the tone from hostile to supportive before hitting send...
*   **Tuning Action**: The Semantic Processor ingests the delta (the difference between its draft and the human edit), applying that tone correction to future drafts for that specific Teacher.
</SurfaceCard>

<SurfaceCard title="3. Syllabus Velocity Realignment">
Every semester, the `Living Curriculum State Architecture` compares the *Planned* period count vs. the *Historical Reality* count. 
*   **Tuning Action**: Next year, when the Admin imports the static syllabus, the AI will proactively warn: *"Historically, Chapter 4 takes 6 periods, not 3. Adjusting baseline expectations to prevent false alarms."*
</SurfaceCard>

</FeatureGrid>

---

## 3. Human-Triggered Calibration Resets

Occasionally, rapid physical shifts in a school require humans to aggressively reset the AI's tuning.

**The "Policy Shock" Reset**:
If the Principal institutes a brand new "Zero Tolerance Bullying Policy":
1.  The Admin navigates to the `Setup Workspace`.
2.  They inject a manual `Domain Calibration Shock` to the discipline module.
3.  **Result**: The AI immediately dumps all its historical tuning models for discipline, returning to a highly cautious `Collaborator` state. It will route *every* discipline incident to the Inbox until it builds a new baseline of how the human Principal reacts to the new policy. 

This guarantees that the AI's "intelligence" never ossifies or drags outdated assumptions into a new operational era.
