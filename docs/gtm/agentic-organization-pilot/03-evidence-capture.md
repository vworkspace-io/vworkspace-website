# Evidence Capture and Claim Handoff

**Template version:** v1

**Purpose:** Create a traceable record of baseline, pilot runs, human decisions, observed results, exceptions, and evidence-use permissions.

Evidence capture begins before the first pilot run. A result without a comparable baseline, source, owner, method, and limitations is not an outcome claim.

## 1. Evidence Record Control

| Field | Entry |
|---|---|
| Organization | |
| Pilot name and charter version | |
| Evidence register version | |
| Customer evidence owner | |
| vWorkspace evidence lead | |
| Metric owner(s) | |
| Evidence location | |
| Access owner | |
| Retention/deletion owner and decision | |
| Internal-use permission status | |
| Public-use permission status | `Not requested` / `Denied` / `Conditional` / `Granted` |
| Last review date | |

Do not commit customer-confidential evidence, credentials, personal information, or restricted source links to the public website repository.

## 2. Evidence Principles

- Preserve negative, neutral, and positive observations.
- Keep raw observations separate from calculations and interpretation.
- Use the same operational definition for baseline and pilot comparison.
- Link every summary value to its underlying evidence IDs.
- Label estimates, missing data, exclusions, and manual corrections.
- Record contextual changes that may explain a result.
- Do not cherry-pick representative runs after seeing their results.
- Capture human approvals, rejections, timeouts, overrides, and interventions.
- Treat customer identity, quotes, and publication rights as separate permissions.
- Keep a claim internal until evidence, product validation, customer permission, and Sarah's approval are complete.

## 3. Evidence Ownership

| Responsibility | Named owner | What they attest | Review point |
|---|---|---|---|
| Baseline source owner | | Source authenticity and access | Before baseline lock |
| Metric owner | | Operational definition and calculation | Baseline and closeout |
| Workflow owner | | Cases reflect the actual workflow | Baseline and run review |
| Human approval owner | | Approval rules and decision records | During pilot |
| Customer evidence owner | | Customer-side validity and limitations | Each evidence review |
| vWorkspace evidence lead | | Register completeness and traceability | Each evidence review |
| Evidence access owner | | Who can view raw and summarized evidence | Before collection/change |
| Retention/deletion owner | | How long evidence is retained and when removed | Before collection/closeout |
| Customer publication owner | | Customer permission by use level | Before external use |
| Product validation owner | | Capability wording matches demonstrated behavior | Claim review |
| Sarah | | Final public claim and asset approval | Public release gate |

No owner may approve on behalf of the customer unless the customer has explicitly granted that authority.

## 4. Evidence Index

Assign stable IDs such as `BL-001` (baseline), `RUN-001`, `APR-001`, `EXC-001`, `FB-001`, and `CTX-001`.

| Evidence ID | Type | Date/period | Description | Source reference | Owner | Raw/derived | Access level | Status | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

Suggested status values:
- `Pending validation`
- `Validated`
- `Excluded with reason`
- `Insufficient`
- `Superseded`

Never delete an inconvenient record to improve the summary. Mark its status and reason.

## 5. Baseline Register

### Baseline definition

| Field | Entry |
|---|---|
| Measure | |
| Operational definition | |
| Unit | |
| Workflow population | |
| Inclusion rule | |
| Exclusion rule | |
| Observation window | |
| Sampling method | |
| Source system/record | |
| Collection method | |
| Calculation | |
| Baseline source owner | |
| Metric owner | |
| Known missing data | |
| Seasonality/context | |
| Other limitations | |

### Baseline observations

| Evidence ID | Case/period | Raw observation | Included? | Exclusion reason | Source reference | Validated by |
|---|---|---|---|---|---|---|
| | | | | | | |

### Baseline lock

| Check | Status/reference |
|---|---|
| Operational definition reviewed by metric owner | |
| Source and observation window reviewed by customer evidence owner | |
| Inclusion/exclusion rules applied consistently | |
| Missing data and estimates labeled | |
| Summary traceable to evidence IDs | |
| Baseline locked before pilot comparison | |

| Baseline summary | Value |
|---|---|
| Number of observations | |
| Summary value(s) | |
| Variation/range, where useful | |
| Exclusions | |
| Interpretation limits | |
| Lock date and approvers | |

## 6. Pilot Run Log

Create one row per case, including failed, rejected, timed-out, and manually completed cases.

| Run ID | Date/time | Case/source reference | In scope? | AI Employee action | Human action/decision | Result | Metric observation | Approval IDs | Exception IDs | Evidence completeness | Reviewer |
|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | |

### Run detail

Use when the summary row is not enough:

| Field | Entry |
|---|---|
| Run ID | |
| Workflow trigger | |
| Input/source reference | |
| Configuration/version | |
| Systems and permissions used | |
| AI observations | |
| AI draft/recommendation | |
| Proposed/executed action | |
| Human approver and decision | |
| Decision context shown | |
| Output/result | |
| Manual intervention | |
| Exception/fallback | |
| Metric observation | |
| Raw evidence references | |
| Reviewer notes | |

Do not paste sensitive source content when a controlled reference is sufficient.

## 7. Approval and Human-Intervention Log

| Approval ID | Run ID | Requested action | Request context | Approver | Decision | Decision time | Rejection/timeout behavior | Result reference | Boundary followed? |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

| Intervention ID | Run ID | Trigger | Human intervention | Owner | Effect on result/metric | Evidence reference |
|---|---|---|---|---|---|---|
| | | | | | | |

Human intervention is evidence about the operating model, not noise to remove from the result.

## 8. Exception and Stop Log

| Exception ID | Run ID/date | Condition | Detected by | Immediate behavior | Human owner | Manual/recovery path | Scope or metric effect | Closed? | Evidence reference |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

### Pilot pause/restart record

| Field | Entry |
|---|---|
| Pause date and reason | |
| Stop condition invoked | |
| Owner who invoked it | |
| Affected runs/evidence | |
| Corrective decision | |
| Charter change required? | |
| Readiness gates rechecked | |
| Restart approvers/date | |

## 9. Context Change Log

Record conditions that could affect comparison.

| Context ID | Date/period | Change | Potential effect | Evidence/source | Owner | Treatment in analysis |
|---|---|---|---|---|---|---|
| | | | | | | |

Examples to investigate—not assumptions—include volume, staffing, policy, system, demand, case mix, or measurement changes.

## 10. Operator and Stakeholder Feedback

Feedback is qualitative evidence. Do not present it as measured operational impact.

| Feedback ID | Date | Participant role | Prompt | Verbatim response | Interpretation, if any | Permission level | Reviewer |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

Suggested prompts:
- What changed in how you performed or supervised this workflow?
- Where did the AI Employee help, add work, or create uncertainty?
- Which approvals had enough context? Which did not?
- Which cases required intervention or the manual fallback?
- What should remain human?
- What would need to change before repeating the workflow?

Record participant identity separately if access is restricted. A quote requires explicit quote and attribution permission even when broader evidence use is allowed.

## 11. Pilot Observation Summary

### Comparable observations

| Measure | Baseline value | Pilot value | Method consistent? | Difference | Evidence IDs | Context/limitations | Validated by |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

### Operating-model observations

| Observation | Evidence IDs | What it may indicate | Alternative explanation | Confidence/limitation |
|---|---|---|---|---|
| | | | | |

### Required counts

| Item | Count | Evidence reference |
|---|---|---|
| Included pilot runs | | |
| Excluded runs | | |
| Approval requests | | |
| Approvals | | |
| Rejections | | |
| Timeouts | | |
| Human interventions | | |
| Exceptions | | |
| Manual fallbacks | | |
| Runs with incomplete evidence | | |

## 12. Evidence Quality Review

Mark each item `Pass`, `Limited`, or `Fail`.

| Quality check | Status | Reason/reference |
|---|---|---|
| Baseline and pilot use the same operational definition. | | |
| Source records are accessible to an authorized validator. | | |
| Observation windows/samples are comparable or differences are explicit. | | |
| Runs were included/excluded using predefined rules. | | |
| Summary values trace to raw evidence IDs. | | |
| Missing data, estimates, and manual corrections are labeled. | | |
| Human decisions and interventions are represented. | | |
| Exceptions and stop events are represented. | | |
| Material context changes are represented. | | |
| Negative and neutral observations were retained. | | |
| Customer evidence owner reviewed the record. | | |

An evidence-quality `Fail` blocks an outcome claim. `Limited` requires the limitation next to the observation wherever it is used.

## 13. Closeout Decision

| Field | Entry |
|---|---|
| Decision: `Stop` / `Refine` / `Repeat` / `Template candidate` | |
| Decision date and owner | |
| Measures considered | |
| Boundary/approval observations | |
| Exceptions considered | |
| Evidence quality | |
| Material limitations | |
| Required charter/product changes | |
| Follow-up owner | |

### Closeout narrative

Write three separate sections:

**Observed facts:** [Complete here]

**Interpretation:** [Complete here]

**Unanswered questions and limitations:** [Complete here]

Do not merge these sections into an unqualified success story.

## 14. Evidence-Use Permission

Customer permission is specific to the material, identity level, channel, and wording. Permission to run the pilot is not permission to publish.

| Evidence/claim ID | Internal delivery use | Internal GTM learning | Anonymized external use | Named external use | Quote permission | Logo permission | Conditions/expiry | Customer approver/reference |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

Use only the narrowest granted level. Redaction or anonymization does not remove the need for customer permission.

## 15. Claim Candidate Register

Every proposed outcome, capability, customer, quote, or comparative statement gets a claim ID.

| Claim ID | Exact proposed wording | Claim type | Evidence IDs | Required qualifier | Product validation owner/status | Customer permission status | Sarah status | Allowed asset/channel | Final status |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

Suggested final statuses:
- `Internal only`
- `Needs evidence`
- `Needs product validation`
- `Needs customer permission`
- `Needs Sarah approval`
- `Approved with exact wording`
- `Rejected`
- `Expired/superseded`

### Claim candidate card

| Field | Entry |
|---|---|
| Claim ID | |
| Exact wording | |
| What a reasonable reader may infer | |
| Claim type: capability / outcome / customer / quote / comparison / commercial | |
| Evidence IDs | |
| Baseline and method | |
| Sample/window | |
| Human/AI boundary relevant to the claim | |
| Exceptions, context, and limitations | |
| Required qualifier next to the claim | |
| Product behavior validated by/date | |
| Customer permission scope/reference | |
| Sarah decision/date | |
| Approved asset/channel | |
| Expiry or revalidation trigger | |

Changing approved wording, qualifier, customer identity, asset, or channel sends the claim back through review.

## 16. Public Release Gate

No evidence-derived material is public until all applicable items are checked:

- [ ] Exact claim wording is recorded.
- [ ] Evidence IDs support what a reasonable reader will infer.
- [ ] Baseline, method, window/sample, and limitations accompany the claim where needed.
- [ ] Product behavior and scope are validated.
- [ ] Customer permission covers the exact identity level, quote/logo, asset, and channel.
- [ ] Confidential or personal information is removed under the customer's rules.
- [ ] Commercial, runtime, security, compliance, certification, and SLA implications are reviewed.
- [ ] Sarah explicitly approves the exact claim and public asset.
- [ ] The final asset links back to the claim ID and approval record.

| Release decision | Owner | Status/reference | Date |
|---|---|---|---|
| Evidence quality | Customer evidence owner | | |
| Product accuracy | Product validation owner | | |
| Customer permission | Customer publication owner | | |
| Claim and publication | Sarah | | |

Until this gate passes, use `Not approved for public use` on the claim record.
