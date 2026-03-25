## Purpose

This document defines the **Setup Architecture** of Mintrix. 

In traditional ERPs, "Setup" is a sterile configuration utility used once by IT. In Mintrix, a platform governed by Editorial Intelligence, **Setup is a continuous measurement of Trust**. 

An AI cannot operate autonomously if it does not trust the underlying data substrate. Setup Architecture dictates how Mintrix calculates its own `Confidence Score` to determine what it can execute automatically (`Operator`), what it must draft for review (`Collaborator`), and what it must flatly refuse to automate (`Tool`).

---

## 1. The Five Layers of Setup Trust

Mintrix calculates operational readiness via a five-layer taxonomy. An `Operator` agent cannot fire a workflow unless all five layers are validated green for a given domain.

<FeatureGrid>

<SurfaceCard title="Layer 1: Infrastructure State">
**Definition**: The absolute physical and legal truths of the institution.
*   **Data Objects**: Campuses, Building blocks, Rooms (capacity/purpose), Busses, Roles & Permissions matrices.
*   **Confidence Impact**: If missing, Mintrix cannot resolve double-bookings (venue validation) or escalate approvals (permission tree failure).
*   **Autonomy Ceiling**: `Tool`. No routing or spatial automation is possible.
</SurfaceCard>

<SurfaceCard title="Layer 2: Policy & Framework State">
**Definition**: The rules that govern rhythm and finance.
*   **Data Objects**: The Academic Calendar (Terms, Vacations, Holidays), Fee Structures (Heads, Cycles, Concessions), Disciplinary thresholds.
*   **Confidence Impact**: If the Calendar is incomplete, the system cannot project the *Living Curriculum*. It does not know how many teaching days exist. 
*   **Autonomy Ceiling**: `Tool`. Temporal automation fails.
</SurfaceCard>

<SurfaceCard title="Layer 3: Core Substrate State">
**Definition**: The active human and operational mapping.
*   **Data Objects**: User provisioning (Teachers, Students, Parents), Section mapping, Subject mapping, Timetable creation.
*   **Confidence Impact**: This is the absolute minimum requirement for basic ERP functioning. Without this, Mintrix cannot send a notice or log attendance.
*   **Autonomy Ceiling**: `Assistant`. The system can log things manually, but cannot infer relationships.
</SurfaceCard>

<SurfaceCard title="Layer 4: Intelligence Calibration State">
**Definition**: The AI-specific behavioral parameters.
*   **Data Objects**: Tone tuning (Formal vs. Warm), Escalation timers (Wait 4 hours before alerting Principal), Reversibility windows (Undo period).
*   **Confidence Impact**: If undefined, Mintrix defaults to overly-cautious `Collaborator` behavior, flooding the Approval Inbox out of fear of making a mistake.
*   **Autonomy Ceiling**: `Collaborator`. System refuses `Operator` actions to prevent reputational damage.
</SurfaceCard>

<SurfaceCard title="Layer 5: Continuous Operational Handoff">
**Definition**: The daily injection of chaotic real-world data into the model.
*   **Data Objects**: Live daily attendance, Ad-hoc teacher substitutions, Event creation, Syllabus drift.
*   **Confidence Impact**: This layer guarantees Mintrix remains a *Living System*. If historical data shows teachers aren't logging syllabus pace, the AI degrades its predictive tutoring features.
*   **Autonomy Ceiling**: `Operator` (If all historical inputs are statistically reliable).
</SurfaceCard>

</FeatureGrid>

---

## 2. The Setup Workspace Surface

Because Setup is highly structured and demands precision, it utilizes the deepest execution surface: the **Workspace Surface**.

### Key UI Principles
1.  **Staged Progress (`FeatureGrid`)**: Admins are guided through the 5 layers linearly.
2.  **Live Confidence Metric**: An ever-present widget detailing the exact percentage of system readiness (e.g., "AI Pacing is 40% confident due to missing Holiday metadata").
3.  **Exception Surfacing**: If an Admin attempts to activate an `Operator` workflow (like Auto-Fee-Reminders) without fulfilling Layer 2 (Fee Structures), the UI generates a blocking **Exception Card**.

---

## 3. The Continuous Setup Loop

Setup never actually ends. When a new semester begins, or a new operational policy is drafted, the Autonomy Engine automatically degrades its Confidence Score contextually.

*   *Scenario*: School drafts a new "Transport Policy."
*   *Action*: The system flags all Transport-related `Operator` automated alerts, downgrading them temporarily to `Collaborator` mode (requiring Principal approval) until the Admin signs off that the intelligence model has calibrated to the new policy.

Mintrix's Setup Architecture ensures the intelligence always matches reality.
