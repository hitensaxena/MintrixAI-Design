## Purpose

The **Approval Inbox** is the ultimate structural chokepoint of Trust in Mintrix. It is the surface where the AI must surrender its Autonomy and ask a human for a signature.

It is designed exclusively for high-friction, legally binding, or cognitively demanding decision-making.

---

## 1. Structural Philosophy

The Inbox visually differs from the `Daily Feed`. While the Feed uses soft elevations for ambient awareness, the Inbox uses **High-Contrast Enforcement**.

*   **Amber Tinting**: Judgment Cards waiting in the inbox are tinted Amber, universally signaling that the system is halted and awaiting human intervention.
*   **The Split Pane**: The Inbox layout frequently utilizes a split-pane architecture. The left pane lists the pending drafts, while the right pane exposes the dense `Comparison View` and `View Why` mechanics behind the selected draft.

---

## 2. The Judgment Workflow Integration

The Approval Inbox is the physical manifestation of `Collaborator` mode. The sole component injected into this surface is the **Judgment Card**.

<FeatureGrid>

<SurfaceCard title="The Reality vs. Draft View">
Humans cannot approve what they do not understand. Every Judgment Card in the Inbox MUST display the baseline reality (e.g., *Current Financial Ledger*) alongside the AI's proposed draft (e.g., *Proposed $50 Late Fee*).
</SurfaceCard>

<SurfaceCard title="The Signature Requirements">
Approval isn't a passive 'Like' button. Clicking **Approve** triggers a cryptographic logging event into the `Transparency Log`, forever tying that human's specific ID to the AI's drafted action. The UI must explicitly warn the user of this permanence.
</SurfaceCard>

<SurfaceCard title="The Active Edit">
If the Principal disagrees with the draft, they bypass the AI. The UI transitions the Right Pane from a "View" into a "Workspace Form," allowing the Principal to manually overwrite the AI's textual draft before authorizing execution.
</SurfaceCard>

</FeatureGrid>

---

## 3. Empty State (Inbox Zero)

Because the Inbox represents operational friction (things the AI cannot legally do itself), an empty Inbox is the desired state of Mintrix. 

The Empty State UI should be rewarding, confirming that the `Operator` engines are successfully handling all routine background tasks without triggering the `Autonomy Matrix` ceilings.
