## Purpose

This document defines the **Policies, Settings, and Autonomy Architecture**.

If Setup (Layer 1) defines *what* exists, Policies and Settings define *how the system behaves*. Mintrix does not use a massive, nested "Settings Panel" like traditional software. Instead, settings are active governance laws that explicitly throttle the Autonomy Engine.

---

## 1. The Governance Model

Mintrix operates on four rigid autonomy levels. "Settings" are simply human configurations that bind specific workflows to these levels. 

<FeatureGrid>

<SurfaceCard title="1. Tool Mode (Zero Autonomy)">
**Rule**: The system cannot act. It merely provides fields for humans to input data.
*   **Setting Example**: "All financial ledger entries must be manually logged."
*   **UI Result**: Operations live strictly in the Workspace Surface. The `Operator` agent shuts down entirely for this domain.
</SurfaceCard>

<SurfaceCard title="2. Assistant Mode (Proactive Drafting)">
**Rule**: The system can populate data and recommend next steps, but cannot advance the workflow outward to other humans without a click.
*   **Setting Example**: "Auto-draft attendance based on bus logs, but require Teacher to click submit."
*   **UI Result**: Workspaces pre-fill fields, but the "Submit" action remains mandatory.
</SurfaceCard>

<SurfaceCard title="3. Collaborator Mode (The Judgment Gate)">
**Rule**: The system drafts complex, multi-variable paths that impact the physical world or reputation, but structurally halts execution until an Authority signs off.
*   **Setting Example**: "All disciplinary communications to parents must be approved."
*   **UI Result**: The system generates a dense `Judgment Card` and routes it to the Approval Inbox.
</SurfaceCard>

<SurfaceCard title="4. Operator Mode (Autonomous Execution)">
**Rule**: Complete AI execution within a bounded statistical limit.
*   **Setting Example**: "Auto-send late-fee reminders at 8:00 AM if debt > $50."
*   **UI Result**: Actions leave silent receipts in the Transparency Log.
</SurfaceCard>

</FeatureGrid>

---

## 2. Policy-Driven Calibration

Policies are living vectors. When a school changes a policy, the system recalculates its trust threshold.

**The "New Policy" Shock:**
If the Admin changes the Absence threshold from "3 days" to "5 days", the Intelligence Engine temporarily loses historical confidence. 
It will actively downgrade all related `Operator` workflows to `Collaborator` mode for a "Calibration Period," routing the first 10 alerts to the Principal's Approval Inbox with a note: *“Learning new absence policy limits.”* Once 10 are approved manually, the system automatically elevates back to `Operator` mode.

---

## 3. UI Implementation of Settings

Because settings are active governance, they are not hidden in a dropdown. 
1.  **Contextual Sliders**: In any Workspace, an Admin can click an "Automation Setting" slider directly on the workflow component to toggle it between Assistant, Collaborator, and Operator.
2.  **The Reversibility Mandate**: Every time a user changes a policy that grants the system `Operator` privileges, the UI must display a **Warning Card**: *"You are granting the system autonomous execution. All actions will be logged in the Transparency record."*
