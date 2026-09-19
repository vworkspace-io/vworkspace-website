# Bounded Pilot Charter

**Template version:** v1

**Purpose:** Define one measurable workflow and the conditions under which a pilot may start, run, change, stop, and close.

Complete this charter jointly. Empty ownership, baseline, boundary, approval, or evidence fields are blockers—not details to fill in after launch.

## 1. Charter Control

| Field | Entry |
|---|---|
| Organization | |
| Pilot name | |
| Charter version | |
| Status: `Draft` / `Readiness review` / `Approved to start` / `Running` / `Paused` / `Closed` | |
| Qualification decision reference | |
| Business outcome owner | |
| Workflow owner | |
| vWorkspace pilot lead | |
| Created / last updated | |
| Approved start date | |
| Record location and access | |

## 2. Pilot Decision Statement

**Current workflow:** [Complete here]

**Observed operational friction:** [Complete here]

**Source of that observation:** [Complete here]

**Bounded change being evaluated:** [Complete here]

**Decision this pilot should inform:** [Complete here]

**What this charter does not promise:** [Complete here]

Frame the pilot as a test of a workflow and operating model. Do not state an expected improvement as a guaranteed result.

## 3. Workflow Boundary

| Boundary | Definition |
|---|---|
| Trigger | |
| Completion point | |
| In-scope cases | |
| Out-of-scope cases | |
| Included teams/roles | |
| Excluded teams/roles | |
| Included systems/data | |
| Excluded systems/data | |
| Expected exceptions | |
| Manual fallback | |

### Current-state workflow

| Step | Owner/system | Action | Input | Output | Wait/rework/exception | Evidence source |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

### Pilot-state workflow

| Step | Trigger | Planned actor | Action | Output | Next step | Product behavior verified? |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

`Planned actor` describes the proposed operating model, not a product capability claim. The implementation owner must verify each AI or system behavior before readiness approval.

## 4. Owners and Responsibilities

| Responsibility | Named owner | Authority/decision | Backup | Acceptance recorded? |
|---|---|---|---|---|
| Business outcome | | | | |
| Workflow definition | | | | |
| Daily operations | | | | |
| Systems/data access | | | | |
| Risk and approval rules | | | | |
| Human approvals | | | | |
| Manual fallback | | | | |
| Baseline integrity | | | | |
| Pilot evidence | | | | |
| Evidence storage/access | | | | |
| Evidence retention/deletion | | | | |
| Customer publication permission | | | | |
| vWorkspace implementation | | | | |
| vWorkspace evidence register | | | | |

## 5. Systems, Data, and Permissions

Use minimum access for the pilot workflow. Record decisions; do not imply certification, compliance, or security guarantees.

| System/data | Purpose | Owner | Data needed | Access requested | Access granted | Expiry/revocation | Verification reference |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

### Data handling decisions

| Decision | Entry |
|---|---|
| Information excluded from the pilot | |
| Approved evidence location | |
| Who may access raw evidence | |
| What may appear in pilot reports | |
| Retention/deletion owner and decision | |
| Redaction or anonymization required | |
| Customer policy or review dependency | |

## 6. Baseline and Measurement Plan

Each measure needs an operational definition before collection. A threshold informs the closeout decision; it is not a promised outcome.

| Measure | Why it matters | Operational definition | Source | Baseline window/sample | Pilot window/sample | Method | Metric owner | Limitation |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

### Baseline integrity check

- [ ] The source exists and can be accessed by its owner.
- [ ] The measure is defined consistently for baseline and pilot observations.
- [ ] The window/sample represents relevant work or its limitation is explicit.
- [ ] Estimates are labeled and not mixed with measured values.
- [ ] Material seasonality, policy, staffing, demand, or system changes will be logged.
- [ ] The customer evidence owner has reviewed the baseline method.
- [ ] Raw observations can be traced from any summary.

### Decision thresholds

| Closeout question | Agreed decision rule |
|---|---|
| What observation would support stopping? | |
| What observation would support refining and testing again? | |
| What observation would support repeating the workflow? | |
| What evidence quality is required before considering a template? | |

## 7. Human/AI Responsibility Boundary

Complete one row per pilot-state step. Never use “AI handles it” as a boundary.

| Step | AI may observe/use | AI may draft/recommend | AI may execute | Human must do/decide | Accountable human | Prohibited action | Verification reference |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

### Boundary rules

- Humans remain accountable for sensitive or consequential actions.
- Every approval event has a named approver with enough context to decide.
- The AI Employee receives only the access required for the bounded workflow.
- Unsupported behavior remains out of scope until separately verified.
- An exception, ambiguous input, missing evidence, or boundary breach routes to the manual fallback or stops the run.
- A change to the boundary requires charter change control and readiness review.

## 8. Approval Matrix

An approval response target is a pilot operating rule, not a public SLA.

| Action/event | Why approval is required | Request prepared by | Named approver | Information shown to approver | Approval method/system | Target response | Reject/timeout behavior | Evidence record |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

### Approval quality check

- [ ] Approvers are authorized by the customer.
- [ ] Approval cannot be inferred from silence.
- [ ] The request identifies the action, target, expected effect, and relevant limits.
- [ ] Reject and timeout paths preserve a safe manual option.
- [ ] Approval is linked to the resulting action or non-action.
- [ ] Approval scope and expiry are explicit.
- [ ] Shared accounts or ambiguous approver identities are not accepted as evidence.

## 9. Exceptions, Stop Conditions, and Fallback

| Event/condition | Detection method | Immediate behavior | Human owner | Recovery/manual path | Evidence required |
|---|---|---|---|---|---|
| Missing/ambiguous input | | | | | |
| Action outside boundary | | | | | |
| Approval rejected or timed out | | | | | |
| System or integration unavailable | | | | | |
| Unexpected or low-confidence result | | | | | |
| Evidence capture failure | | | | | |
| Material workflow/policy change | | | | | |

### Pilot-level stop conditions

The pilot pauses when:
- a required owner or approver withdraws;
- access is revoked, expanded without approval, or cannot be verified;
- the AI Employee attempts or is asked to perform a prohibited action;
- the manual fallback is unavailable;
- evidence can no longer be captured using the agreed method;
- a material incident, workflow change, or unreviewed scope change invalidates the charter;
- the business outcome owner, system/data owner, or vWorkspace pilot lead invokes a stop.

Restart requires the affected owner, boundary, evidence plan, and readiness gate to be reviewed again.

## 10. Implementation and Verification

| Item | Acceptance condition | Owner | Evidence/reference | Status |
|---|---|---|---|---|
| Workflow configuration | Matches the approved in-scope steps. | | | |
| System behavior | Required behavior is demonstrated in the approved environment. | | | |
| Permissions | Access matches the permissions record. | | | |
| Approval path | Approve, reject, and timeout behavior are tested. | | | |
| Exception path | Named exception and manual fallback are tested. | | | |
| Audit/evidence capture | Required events can be traced to the evidence record. | | | |
| Revocation/stop | Access and runs can be stopped as chartered. | | | |

Do not turn a test result into a general product claim. Record the environment, configuration, and limits.

## 11. Evidence Plan and Ownership

| Evidence responsibility | Owner | Method/location | Review cadence | Acceptance |
|---|---|---|---|---|
| Baseline source and method | | | | |
| Run records | | | | |
| Human approvals/rejections | | | | |
| Exceptions and interventions | | | | |
| Metric calculation | | | | |
| Operator feedback | | | | |
| Limitations/context changes | | | | |
| Customer validation | | | | |
| Publication permission | | | | |

Use `03-evidence-capture.md` for the evidence register and closeout.

## 12. Pilot Run Protocol

For every included case:

1. Confirm that the case matches the in-scope definition.
2. Assign a run ID and preserve the source reference.
3. Apply the approved human/AI boundary and permissions.
4. Capture each required approval, rejection, timeout, or intervention.
5. Record the result using the agreed operational definition.
6. Log exceptions, context changes, and missing evidence.
7. Route out-of-scope cases to the manual path.
8. Review evidence on the agreed cadence.

## 13. Readiness Gate

The pilot may be marked `Approved to start` only when every item is checked:

- [ ] Qualification status is `Proceed`.
- [ ] One workflow, trigger, completion point, and scope are explicit.
- [ ] Business, workflow, system/data, approval, fallback, and evidence owners are named.
- [ ] Baseline source, method, window/sample, and limitations are recorded.
- [ ] Human/AI responsibility is assigned at every step.
- [ ] Permissions and prohibited actions are explicit.
- [ ] Approve, reject, timeout, exception, stop, and manual paths are defined.
- [ ] Required product behavior has been verified in the relevant environment.
- [ ] Evidence records can link source, run, approval, result, and limitation.
- [ ] Customer decisions for evidence access, retention, and internal use are recorded.
- [ ] No unsupported public, outcome, timeline, pricing, SLA, runtime, certification, or compliance claim appears in the charter.

| Readiness approval | Name | Decision/date | Conditions |
|---|---|---|---|
| Business outcome owner | | | |
| Workflow owner | | | |
| System/data owner | | | |
| Risk/approval owner | | | |
| Customer evidence owner | | | |
| vWorkspace pilot lead | | | |

## 14. Change Control

| Change ID | Requested change | Reason | Scope/boundary/metric effect | Owners consulted | Decision | Charter version | Date |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

Any change to workflow scope, systems/data, AI authority, permissions, approvals, baseline method, decision thresholds, or evidence use requires a new charter version and affected-owner approval.

## 15. Closeout

The evidence record—not this charter—holds observed results.

| Field | Entry |
|---|---|
| Closeout date | |
| Final run/sample reference | |
| Baseline comparison reference | |
| Boundary and approval review reference | |
| Exceptions/limitations reference | |
| Decision: `Stop` / `Refine` / `Repeat` / `Template candidate` | |
| Decision owner | |
| Required follow-up | |
| Evidence-use permission status | |
| Public claim status | `Not reviewed` unless separately approved |

`Template candidate` means the pattern deserves evaluation for repeatability. It does not mean the workflow, capability, or outcome is generally available or proven.
