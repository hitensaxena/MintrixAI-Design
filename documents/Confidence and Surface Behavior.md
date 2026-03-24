## Purpose

This document explains how **Confidence** is calculated in Mintrix and how it dynamically changes the way intelligence is presented to the user.

In Mintrix, confidence is not a static percentage; it is a **behavioral throttle** that determines how much autonomy the system is granted.

---

## 1. The Three Layers of Confidence

The system evaluates confidence across three distinct layers before deciding how to present an insight or action.

| Layer | Question Asked | Example of Low Confidence |
| :--- | :--- | :--- |
| **1. Data Confidence** | Is the substrate reliable? | Missing timetable or incomplete syllabus mapping. |
| **2. Pattern Confidence** | Is the interpretation correct? | Flagging "Academic Risk" based on only one quiz score. |
| **3. Action Confidence** | Is the outcome predictable? | Proposing a substitute teacher without knowing their recent workload. |

---

## 2. The Step-Down Rule (Surface Behavior)

The system’s visibility and autonomy level must "step down" whenever confidence in any layer is low. This prevents the system from making "confident mistakes."

### The Mapping Table

| Confidence Level | System Mode | Surface Behavior |
| :--- | :--- | :--- |
| **High** | `Operate` | Action is executed and logged in the **Transparency Log**. User sees it in the **Daily Feed** as a "System did this" update. |
| **Medium-High** | `Approve` | System prepares the full action and places it in the **Approval Inbox**. User only needs to sign off. |
| **Medium** | `Recommend` | System suggests a path but shows the rationale. User must "Build" the action based on the recommendation. |
| **Low** | `Inform` | System only shows the raw signal (e.g., "Syllabus drift detected"). No action is suggested. User is routed to the **Calibration Surface**. |

---

## 3. Calibration: Closing the Confidence Gap

Confidence grows through **Calibration**, which is the process of the system learning from human behavior.

### How Confidence Increases
1.  **Implicit Feedback**: The user accepts a recommendation without changes (Increases Action Confidence).
2.  **Explicit Feedback**: The user corrects a draft message (Decreases Pattern Confidence, triggers learning).
3.  **Data Closure**: The Admin completes the "Layer 2: Academic Model" setup (Increases Data Confidence).

### The "Calibration Alert"
When confidence is too low to even `Inform`, the system surfaces a **Calibration Alert** in the Daily Feed:
> *"I'm seeing attendance patterns I don't understand yet. Help me calibrate by reviewing the Class 5A attendance history."*

---

## 4. Visual Representation of Confidence

Confidence should not be a "score" (e.g., 85%). It should be represented through **Contextual UI Patterns**:

1.  **High Confidence**: Solid, stable UI elements. "System-led" language.
2.  **Medium Confidence**: Outlined or "Dashed" borders. "Assistant-led" language (e.g., *"I've prepared this for you"*).
3.  **Low Confidence**: Warning icons or "Question" state. "Discovery-led" language (e.g., *"I've noticed something unusual"*).

---

## 5. Trust Recovery (When Confidence Fails)

If the system executes an `Operate` action that the user later overrides, it triggers a **Trust Recovery Workflow**:
1.  **Immediate Reversal**: One-click undo from the Transparency Log.
2.  **Policy Step-Down**: The system automatically drops that specific workflow from `Operate` back to `Approve` for the next 14 days.
3.  **Rationale Inquiry**: System asks the user: *"Why was this incorrect?"* to adjust its internal weighting.
