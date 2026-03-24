## Purpose

This document defines the **Approval and Transparency Workflow** in Mintrix. This is the "Trust Core" of the product, ensuring that all autonomous actions are visible, reversible, and explicitly authorized where necessary.

In Mintrix, transparency is not an audit log; it is a primary user interaction surface.

---

## 1. The Decision Engine: From Draft to Action

Every potential system action moves through a four-stage process:

### Stage 1: Preparation (The Draft)
- **System Action**: Agent assembles the context (e.g., student attendance history) and a proposed action (e.g., a draft message to the parent).
- **Status**: Hidden from user until ready.

### Stage 2: Presentation (The Judgment)
*Surface: Approval Inbox*
- **System Action**: Agent places the "Judgment Card" in the inbox.
- **Content**:
    - **What**: The proposed action.
    - **Why**: The data and rules that triggered the proposal.
    - **Impact**: Who will be affected (e.g., "Parent of Student A").

### Stage 3: Execution (The Act)
- **Human Action**: User taps **Approve**, **Edit**, or **Reject**.
- **System Action**: System executes the action (e.g., sends the message) and updates the **Transparency Log**.

### Stage 4: Traceability (The Record)
*Surface: Transparency Log*
- **Content**: Every action taken (human or autonomous) is logged with its full rationale and outcome.

---

## 2. Autonomy Levels & The Approval Rule

The system uses the **Autonomy Model** to decide if an action needs a signature.

| Mode | Approval Required? | Surface |
| :--- | :--- | :--- |
| **Tool** | Human Initiated | Workspace Surface |
| **Assistant** | Human Action | Workspace Surface |
| **Collaborator** | **Mandatory Signature** | Approval Inbox |
| **Operator** | **Pre-Approved Rule Only** | Daily Feed / Transparency Log |

---

## 3. Transparency & Audit Surfaces

| Surface | Function |
| :--- | :--- |
| **Approval Inbox** | Final decision point for prepared actions. |
| **Transparency Log** | Living memory of all "Operator" actions and "Collaborator" approvals. |
| **"View Why" (Component-Level)** | Fast-path to rationale for any recommendation or insight. |

---

## 4. Interaction Patterns for Trust

| Pattern | Description |
| :--- | :--- |
| **The "Trust Badge"** | A visual indicator of confidence (Data / Pattern / Action) for any recommendation. |
| **The "One-Tap Reversal"** | A persistent "Undo" button in the Transparency Log for recent actions. |
| **The "Rationale Card"** | A standardized popover that explains: *"I'm suggesting this because..."* |

---

## 5. Decision Rights Matrix

| Action Category | Approval Default | Persona with Authority |
| :--- | :--- | :--- |
| **Routine Alerts** | Pre-Approved | Admin / Teacher |
| **Parent Comms** | Signature Required | Teacher / Admin |
| **Curriculum Shifts** | Signature Required | Principal / HOD |
| **Leadership Interventions** | Signature Required | Principal / Owner |
| **Financial Reconciliations** | Pre-Approved Rules | Admin |

---

## 6. Success Criteria: "No Hidden Magic"

The goal of this workflow is to eliminate "Black-Box AI." The user should always know *why* the system is acting and *how* to stop it. Trust is maintained by making every decision and its rationale fully visible.
