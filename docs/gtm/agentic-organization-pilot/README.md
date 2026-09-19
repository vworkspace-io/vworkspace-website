# Agentic Organization Pilot Kit

**Kit version:** v1

**Last updated:** 2026-09-19

**Status:** Internal working kit; not approved as public copy

**Authoritative context:** `.agents/product-marketing.md`

Use this kit to discover operational friction, qualify one bounded workflow, define a controlled pilot, and capture evidence without turning assumptions into claims.

## Contents

1. [`01-discovery-and-qualification.md`](./01-discovery-and-qualification.md) — interview guide, workflow screen, qualification gates, and decision record.
2. [`02-pilot-charter.md`](./02-pilot-charter.md) — fillable scope, baseline, human/AI boundary, approval matrix, and start/stop gates.
3. [`03-evidence-capture.md`](./03-evidence-capture.md) — evidence ownership, baseline and run logs, closeout, and claim-release controls.

Copy the templates into a customer-specific working area for each pilot. Preserve the blank originals.

## Operating Sequence

1. **Discover:** Interview the workflow owner and operators. Capture their exact language and the current process before proposing a solution.
2. **Qualify:** Apply every required gate. Record `Proceed`, `Needs evidence`, or `Do not proceed`; do not qualify by enthusiasm alone.
3. **Charter:** Agree one workflow, its baseline, scope, human/AI boundary, approvals, exception path, and evidence owners.
4. **Readiness review:** Confirm every start gate before live pilot runs.
5. **Run and capture:** Record representative runs, human decisions, exceptions, and metric observations against the agreed method.
6. **Close:** Compare observations with the baseline, document limits, and choose `Stop`, `Refine`, `Repeat`, or `Template candidate`.
7. **Release:** Treat every outcome statement as an internal claim candidate until evidence, customer permission, product validation, and Sarah's approval are recorded.

## Non-Negotiable Pilot Gates

A pilot does not start unless all four foundations are explicit:

| Foundation | Required record |
|---|---|
| Measurable baseline | Operational definition, source, observation window, method, owner, and known limitations. |
| Human/AI boundary | A step-level record of what the AI Employee may observe, propose, or execute and what remains human work. |
| Approvals and exceptions | Named approvers, approval triggers, deny/timeout behavior, stop conditions, and a manual fallback. |
| Evidence ownership | Named owners for collection, metric integrity, customer permission, storage/access, and public release. |

If any foundation is unknown, the qualification status is `Needs evidence`, not `Proceed`.

## Required Roles

One person may hold more than one role, but every responsibility must have a named owner.

| Role | Responsibility |
|---|---|
| Business outcome owner | Owns the workflow outcome and pilot decision. |
| Workflow owner | Explains the current process and accepts the future-state workflow. |
| Operators | Perform the work today and validate observations. |
| System/data owner | Authorizes access to the required systems and data. |
| Risk/approval owner | Defines consequential actions and approval requirements. |
| Human approver(s) | Approve or reject specified actions during pilot runs. |
| Customer evidence owner | Confirms source data, baseline method, observations, and limitations. |
| vWorkspace pilot lead | Coordinates scope, implementation, run review, and closeout. |
| vWorkspace evidence lead | Maintains the evidence register and prevents unsupported claim use. |
| Publication owner | Confirms what the customer permits for internal, anonymized, named, or public use. |
| Sarah | Approves public claims and publication; does not replace customer permission. |

## Language and Claim Safety

During discovery, ask questions instead of asserting that a problem, cost, or outcome exists. Reflect the customer's own words and mark interpretations as hypotheses.

Do not promise or imply:
- a fixed duration, price, scope, ROI, implementation speed, SLA, or guaranteed outcome;
- support for an integration, permission, approval, audit, or runtime behavior that has not been verified;
- multiple production runtimes;
- self-serve horizontal SaaS;
- fully autonomous consequential action or transfer of accountability to AI;
- certifications, compliance, security guarantees, customer proof, or measured results without the required evidence and approval.

The pilot offer, product category, customer-facing promise, and CTA remain working language until Sarah approves public use.

## Document Control

| Field | Value |
|---|---|
| Kit custodian | vWorkspace GTM |
| Canonical location | `docs/gtm/agentic-organization-pilot/` |
| Context dependency | `.agents/product-marketing.md` |
| Customer-specific records | Store in the approved customer workspace; do not commit confidential customer data to this public repository. |
| Change rule | Update the kit version and changelog when qualification, governance, evidence, or claim-release requirements change. |

## Changelog

- v1 (2026-09-19) — Created the discovery, qualification, bounded-pilot, and evidence-capture kit from product-marketing context v1.
