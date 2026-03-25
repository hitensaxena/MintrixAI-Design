## Purpose

This document outlines **Primary Navigation**—the persistent, global skeletal frame that allows users to traverse the physical architecture of Mintrix.

---

## 1. Structural Philosophy

Mintrix Primary Navigation must feel like an operating system, not a brochure website. It is strictly utilitarian, high-contrast, and persistent across all screen resolutions. 

*   **Zero Ambiguity**: Navigation items do not use clever or branded names. A calendar is a calendar. An inbox is an inbox.
*   **The Collapsible Rail**: To maximize horizontality for the `Workspace Surface`, the primary navigation defaults to a left-anchored vertical rail that collapses into pure iconography when the user begins heavy data execution.

---

## 2. Core Navigation Anchors

The Primary Navigation Sidebar contains the strict global anchors that never unmount, regardless of the user's current route.

<FeatureGrid>

<SurfaceCard title="The User Profile Anchor (Top/Bottom)">
Usually anchored identically across all roles. Features the physical Avatar of the user. Expanding it provides instant access to the `User Profile and Settings` surface and universal logout functions.
</SurfaceCard>

<SurfaceCard title="The Ambient Anchors (Home)">
The universally accessible `Daily Feed` and `Role-based Dashboard`. These are the default landing states when the application loads.
</SurfaceCard>

<SurfaceCard title="The Action Anchors (Inbox/Exceptions)">
The high-friction operational centers. 
*   `Approval Inbox` (Gated to Principals/Admins)
*   `Exception Center` (Gated to Admins)
These anchors uniquely feature **Red Notification Badges** if a fatal collision occurs or a judgment draft requires a signature.
</SurfaceCard>

<SurfaceCard title="The Ledger Anchors (Transparency/Setup)">
The deep databases. 
*   `Transparency Log`
*   `Setup Workspaces` (Venues, Routines, Constraints)
</SurfaceCard>

</FeatureGrid>

---

## 3. The Command K Overlay (The Fast Path)

Mintrix natively supports mouse navigation via the Sidebar, but acknowledges that high-speed "Power Users" (Admins generating timetables) prefer keyboards.

*   Pressing `Cmd+K` unmounts the current surface focus and deploys a massive, centered modal. 
*   **Intelligent Routing**: It does not just act as a standard search bar. It acts as an intent-based router. Typing *"Setup Physics"* bypasses the sidebar clicks completely, physically warping the user directly into the deep Physical Science Venue Workspace array.
