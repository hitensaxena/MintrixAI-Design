## Purpose

This document expands upon the `Persona AI Agent Architecture` to explicitly define how **Persona Agents** visually manifest within the UI and how users interact with them. 

Agents in Mintrix are not floating chatbots. They are deeply integrated structural components that act as copilots attached strictly to specific `Workspace Surfaces` and `Approval Inboxes`.

---

## 1. The Anatomy of an Agent Interface

Users interact with their designated Persona Agent primarily through the **Intelligence Sidebar**, an expanding rail on the right side of the screen, and through **Contextual Cards** injected into the `Daily Feed` and `Approval Inbox`.

<FeatureGrid>

<SurfaceCard title="The Intelligence Sidebar">
**Location**: Anchored to the right of any `Workspace Surface`.
**Role**: The live, computational scratchpad.
**Interaction**: As a Teacher types a lesson plan or an Admin builds a timetable, the Sidebar continuously loops, displaying live data queries, venue clash warnings, and historical references without obscuring the main workspace form.
</SurfaceCard>

<SurfaceCard title="The Embedded Judgment Card">
**Location**: The `Approval Inbox`.
**Role**: The formal Request-For-Signature document drafted by the Agent.
**Interaction**: It presents the `Comparison View` (Draft vs. Reality) and explicitly requires a primary action button click (Approve / Reject / Edit).
</SurfaceCard>

<SurfaceCard title="The 'Ask' Input (Command K)">
**Location**: Global header or floating action button.
**Role**: Direct human-to-agent semantic querying.
**Interaction**: *"Show me students failing math"* translates into a dynamically generated `FeatureGrid` of student performance cards. It rarely responds with conversational chat; it responds by spawning exact UI components.
</SurfaceCard>

</FeatureGrid>

---

## 2. Specific Agent UI Behaviors

Agents have distinct "personalities" expressed through how aggressive they are within the UI.

### The Teacher Agent: The Silent Assistant
*   **UI Preference**: Uses the Intelligence Sidebar aggressively. 
*   **Behavior**: It does not interrupt. It sits quietly next to the Gradebook array, highlighting specific cells in faint amber if it detects a statistical anomaly (e.g., *Student usually scores 90, got a 40*). 
*   **Voice**: Supportive and analytical. *"Notice: Pacing is falling behind. Would you like to view a recovery draft?"*

### The Principal Agent: The Escalation Gatekeeper
*   **UI Preference**: Heavily reliant on the `Approval Inbox` and `Exception Center`.
*   **Behavior**: It operates via high-density, high-severity interruption. It compresses 1,000 Teacher actions into 5 critical `Judgment Cards` the Principal must see. 
*   **Voice**: Direct and urgent. *"Structural Warning: 3 Classes lacking assigned educators for tomorrow. Signature required to authorize emergency subs."*

### The Admin Agent: The Silent Executor
*   **UI Preference**: Heavily reliant on the `Transparency Log` and `Daily Feed`.
*   **Behavior**: It rarely asks for permission. It operates primarily as an `Operator`, processing background ledgers and sending receipts to the Daily Feed.
*   **Voice**: Transactional. *"Executed: 45 Late Fee Invoices sent. [Undo available for 15 min]."*

---

## 3. The Cross-Agent Handoff in UI

Because Agents are distinct, the UI must visually represent when an object is passed between them.

**Example Handoff Flow:**
1.  **Teacher Workspace**: The Teacher clicks *"Escalate to Principal"* on a Disciplinary Card.
2.  **UI Animation**: The card physically animates out of the Teacher's `Workspace`, marked with a "Pending Principal Intel" badge.
3.  **Principal Inbox**: The card spawns in the Principal's Inbox. The `Principal Agent` appends a new section to the card (e.g., *"Context added: This family has a history of fee delinquency"*), proving that the new Agent has enriched the data with its higher security clearance.

This explicit visual handoff maintains the illusion of an active, multi-agent operating space, reinforcing trust that context is moving up the chain of command appropriately.
