## Executive Purpose

This document establishes the **User Personas and Journeys**. 

While the *Persona Intelligence Cards* define how the AI backend profiles humans, this document focuses strictly on the human UX journey: how the user feels, how they visually interact with the "Editorial Intelligence" interface, and what friction thresholds the UI must respect.

---

## 1. The Principal Journey (The Arbiter)

**Vibe:** Overwhelmed, constantly interrupted by context-switching, legally liable for mistakes, permanently operating in triage mode.
**UI Priority:** **Density mapping and Signal-to-Noise Ratio.** They need to see a vast amount of localized data instantly, but *only concerning exceptions*. 

### The Friction Threshold: The "3-Click" Rule
A Principal will abandon a non-critical software task if it takes more than 3 clicks to resolve. They do not have time to navigate deep menu trees while a parent is shouting in their office.
*   **Design Law**: All High-Severity exceptions must be solvable directly from the `Role-based Dashboard` or the `Exception Center` without routing to a dedicated module page.

### The Physical Day (Visual States)
1.  **08:00 AM (The Triage State)**: Opens the Dashboard. The Principal does not see a welcome message. They see 4 Red `Exception Cards` (e.g., Bus 42 broken; 2 Teachers absent). The UI is tight and urgent. 
2.  **08:05 AM (The Resolution State)**: Clicks an Exception Card. The `Comparison View` slides in, taking over the screen. The UI slows down. The AI presents 3 drafted resolution paths. They click "Merge Classes." 
3.  **11:00 AM (The Judgment State)**: Opens the `Approval Inbox`. They are presented huge, Amber-colored `Judgment Cards`. They cycle through 15 Pending disciplinary actions, bulk-signing 10 and returning the rest to draft status. 

### Design Constraint
The Principal's UI must never use playful interactions, confetti animations, or bouncy transitions. It must mirror an air-traffic control setup. Aggressive color coding is used for severity *only*.

---

## 2. The Teacher Journey (The Operator)

**Vibe:** Hostile to repetitive administration, highly focused on the immediate 45-minute tactical window, fiercely protective of their classroom autonomy.
**UI Priority:** **Extreme Context Loading and Workflow Insulation.** Giving them exactly what they need for *this* period without jumping tabs.

### The Friction Threshold: The "Zero-Navigation" Rule
If a Teacher is grading papers and needs to check a student's attendance history, forcing them to open a new tab means they will simply stop using the system.
*   **Design Law**: Core Teacher tasks (grading, messaging parents, behavior logs) must occur on a single infinite canvas (`The Workspace`), supplemented exclusively by the sliding `Intelligence Sidebar` for extra data.

### The Physical Day (Visual States)
1.  **09:00 AM (The Insulation State)**: Opens the `Daily Feed`. The UI forcefully strips away the entire school and shows *only* Class 10 Biology. Extreme whitespace is used to calm the user.
2.  **09:05 AM (The Assisted Action State)**: The AI surfaces a small gradient-bordered prompt in the feed: "Recommend assigning Homework 4 based on pacing." The Teacher clicks "Execute."
3.  **14:00 PM (The Deep Flow State)**: The Teacher opens the `Intelligence Sidebar` while viewing a student profile in the `Workspace`, asking the Agent to draft an email to the Parent regarding dropping scores, bypassing their email client entirely.

### Design Constraint
The Teacher UI must aggressively employ the No-Line philosophy. It should feel like an elegant, serene notebook, shielding them from the operational chaos handled by the Principal. 

---

## 3. The Parent Journey (The Observer)

**Vibe:** Highly anxious about their child, extremely distracted, zero tolerance for complex SaaS navigation.
**UI Priority:** **Passive Reassurance and Micro-Actions.** Mobile-first, single-scroll architecture.

### The Friction Threshold: The "No-Login-Required" Rule
Parents forget passwords constantly. If a school event requires explicit login to a native web portal, engagement drops by 80%.
*   **Design Law**: 90% of Parent interaction must happen via Push Notifications containing deep-links or SMS messages that spawn instant, authenticated, single-purpose micro-views that vanish upon completion.

### The Physical Day (Visual States)
1.  **16:00 PM (The Push)**: Parent receives a rich SMS notification on their lock screen. 
2.  **16:01 PM (The Feed)**: They tap the notification and open the `Daily Feed` on their phone. It shows a highly compressed, green-tinted card ("Math Exam Scored: 88%").
3.  **16:05 PM (The Frictionless Gateway)**: Directly below the score is a purple card: "Field trip payment due." They tap it. A 1-tap Apple Pay/Google Pay modal executes the transaction instantly. They are never asked to navigate to a "Billing" portal.

### Design Constraint
Never make a parent search. The UI must aggressively push the precise button they need to click into the center of their screen at the exact moment they need to click it.
