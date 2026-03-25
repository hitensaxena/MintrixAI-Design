## Purpose

This document defines the **Color Architecture** for Mintrix. It enforces the "No-Line" spatial constraint and the semantic rules for how the UI should feel. 

 Mintrix operates as a high-density utility tool. Color must be reserved for signal, never for decoration.

---

## 1. The Spatial Substrate (Grayscales)

Mintrix does not use gray borders. It uses gray zones to map interactive depth. The background defines the Z-index of the content.

*   `#ffffff` (Pure White): The highest Z-index. Used exclusively for **Object Surfaces** (The `Workspace`, The `Event Card`, an active `Input`). Anything pure white implies user-focus.
*   `#f8f9fa` (Off-White): The Base App Layer. This is the deepest Z-index. The underlying canvas.
*   `#eef1f3` (Silver Canvas): The Interactive Container. Used for passive shells (e.g., the background hull of a Toggle Switch or a disabled input field). 
*   `#dee3e6` (Structural Silver): Used *only* for subtle ring borders on hover (`ring-1`) and microscopic structural dividers (e.g., separating 2 very dense numeric widgets).

## 2. Typographic Hierarchy (Inks)

Text is not black. It is deeply saturated grey-blue.
*   `#2d3335` (Slate Black): Primary Headers & High-Emphasis Data (e.g., Student Count: **140**).
*   `#5a6062` (Steel Grey): Secondary Text, body paragraphs, and descriptive sub-labels (e.g., *Last active 4 hours ago*).
*   `#8a9296` (Muted Grey): Placeholder text and disabled UI elements.

## 3. The Signal Layer (Action & Automation)

When Mintrix uses color, it means something is moving or broken. 

### The AI Signature (System Authority)
*   **The Blueprint Gradient**: `from-[#005bc1] to-[#00438f]`. This rich electric blue is the "Signature" of the AI OS. It represents positive system action, confirmed saves, active mode toggles, and "View Why" contextual tags. 
*   *Rule*: Never use pure generic `#0000FF` blue. It must be saturated and slightly deep.

### The Judgment Signal (Human Authority)
*   `#f59e0b` (Amber): The universal color for the `Approval Inbox` and `Collaborator` drafts. This signifies: *"The system has a plan but lacks the legal authority to execute it. Human signature required."*

### The Severity Signal (Triage)
*   `#dc2626` (Crimson): The color of the `Exception Center`. Used for double-bindings, staffing deficits, and system breakages. Crimson demands immediate triage.
*   `#22c55e` (Forest Green): Used exceedingly rarely. Only for hard-confirmed positive completions (e.g., *Fee Transaction 100% Cleared*).

---

## Conclusion 

If a UI Screen in Mintrix looks like a rainbow, it has failed the design specification. The screen should look like a pristine, monochrome architectural blueprint, where only the actionable variables (Amber) and systemic alerts (Crimson) command visual attention.
