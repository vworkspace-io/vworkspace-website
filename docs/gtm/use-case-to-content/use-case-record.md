# Use-Case Content Record

**Template version:** v1

Copy this file once per bounded workflow. Link controlled source records instead of copying confidential evidence into the repository.

## 1. Record Control

| Field | Entry |
|---|---|
| Use-case ID (`UC-YYYY-NNN`) | |
| Working internal name | |
| Record version | |
| Workflow state | `Captured` |
| Created / last updated | |
| vWorkspace pilot lead | |
| Content owner | |
| Customer evidence owner | |
| vWorkspace evidence lead | |
| Customer publication owner | |
| Product validation owner | |
| GTM owner | |
| Channel owner, if selected | |
| Controlled record location | |
| Confidentiality/access rule | |

## 2. Intake

| Field | Entry |
|---|---|
| Bounded workflow | |
| Workflow trigger | |
| Completion point | |
| Accountable business owner | |
| Current operators | |
| Operational friction in customer's words | |
| Why this record was opened | |
| Candidate audience | |
| Candidate content job | |
| Requested output, if any | |
| Requester | |
| Needed-by date and reason, if any | |

### Category guardrail

Complete before review:

**How this use case supports the platform story:** [Complete here]

**Why it does not define a product, industry, or solution category:** [Complete here]

**Inferences a reader must not make:** [Complete here]

## 3. Source References

| Source | Version/date | Controlled reference | Owner | Access/retention condition |
|---|---|---|---|---|
| Pilot charter | | | | |
| Qualification decision | | | | |
| Evidence register | | | | |
| Baseline lock | | | | |
| Comparable observation summary | | | | |
| Approval/intervention/exception logs | | | | |
| Pilot closeout | | | | |
| Evidence-use permission | | | | |
| Claim candidate register | | | | |
| Product validation | | | | |

Do not proceed to external output planning when a required source is absent.

## 4. Evidence Eligibility

### Proof unit

| Element | Record |
|---|---|
| Workflow and accountable owner | |
| Baseline and operational definition | |
| Source, method, and observation period | |
| Bounded intervention | |
| Human/AI responsibility split | |
| Approval, exception, and manual fallback behavior | |
| Observed result and period | |
| Human interventions and exceptions | |
| Context changes and alternative explanations | |
| Material limitations | |
| Closeout decision | `Stop` / `Refine` / `Repeat` / `Template candidate` |

### Evidence quality review

| Check | `Pass` / `Limited` / `Fail` | Reference and required qualifier |
|---|---|---|
| Baseline and pilot use the same operational definition. | | |
| Source records support the summary. | | |
| Windows/samples are comparable or differences are explicit. | | |
| Inclusion and exclusion rules were applied consistently. | | |
| Missing data and estimates are labeled. | | |
| Human decisions, interventions, and exceptions are represented. | | |
| Context changes and limitations are represented. | | |
| Customer evidence owner validated the record. | | |

| Evidence decision | Entry |
|---|---|
| Overall quality | `Pass` / `Limited` / `Fail` |
| Eligible evidence level | E0 / E1 / E2 / E3 candidate / E4 candidate / E5 candidate |
| Claims blocked by the evidence | |
| Mandatory qualifiers | |
| Customer evidence owner and date | |
| vWorkspace evidence lead and date | |

An overall `Fail` blocks outcome content. Record the workflow as `Internal learning only` or `Parked`.

## 5. Human/AI Boundary Summary

| Workflow step | AI observed/used | AI drafted/recommended | AI executed | Human decided/performed | Approval/intervention | Prohibited inference |
|---|---|---|---|---|---|---|
| | | | | | | |

| Boundary check | Status/reference |
|---|---|
| Consequential actions retain named human accountability. | |
| Approvals, rejections, timeouts, and interventions are represented. | |
| Exceptions and manual fallback are represented. | |
| Permissions are described only to the verified level. | |
| “AI handled the workflow” shorthand is prohibited unless literally supported and approved. | |

## 6. Evidence-Use and Identity Permission

Permission to run the pilot is not permission to create or publish content.

| Use | `Granted` / `Conditional` / `Denied` / `Not requested` | Exact scope | Conditions/expiry | Customer approver/reference |
|---|---|---|---|---|
| Internal delivery | | | | |
| Internal product learning | | | | |
| Internal GTM/sales enablement | | | | |
| Anonymized external use | | | | |
| Named external use | | | | |
| Exact quote(s) | | | | |
| Attribution/name | | | | |
| Logo | | | | |
| Website | | | | |
| Sales collateral | | | | |
| Article/editorial | | | | |
| Email | | | | |
| Social/distribution extract | | | | |
| Partner/third-party channel | | | | |

### Permission limits

| Field | Entry |
|---|---|
| Information that must be removed | |
| Required anonymization | |
| Wording the customer approved exactly | |
| Wording the customer prohibited | |
| Geography/audience/channel limit | |
| Review-before-publish condition | |
| Withdrawal method | |
| Retention/deletion condition | |

Use the narrowest granted permission. Anonymization still requires explicit permission.

## 7. Product Validation

| Proposed capability statement | Demonstrated behavior/environment | Limits/configuration | Product owner | Exact approved wording | Revalidation trigger |
|---|---|---|---|---|---|
| | | | | | |

### Product claim check

- [ ] No workflow or integration is presented as ready-made unless separately validated.
- [ ] Architecture is not presented as production availability.
- [ ] Additional runtimes are not implied.
- [ ] Permissions, approvals, audit, exceptions, and fallback are described only as demonstrated.
- [ ] Deployment, infrastructure, open-source, security, compliance, certification, support, SLA, and commercial implications are absent unless separately sourced and approved.
- [ ] Product owner approved the exact technical wording.

## 8. Approved Internal Source Packet

Complete only from the records above.

### Workflow context

[Complete here]

### Before-state baseline and method

[Complete here]

### Bounded intervention

[Complete here]

### Human/AI responsibility and approval boundary

[Complete here]

### Observed result and period

[Complete here]

### Exceptions, interventions, and context changes

[Complete here]

### Limitations and alternative explanations

[Complete here]

### Closeout decision

[Complete here]

### Customer language approved for use

| Exact words | Speaker/role | Identity level | Quote permission/reference |
|---|---|---|---|
| | | | |

### Approved capability wording

[Complete here]

### Mandatory qualifiers

[Complete here]

### Prohibited wording and inferences

[Complete here]

| Source packet approval | Name | Decision/date | Conditions |
|---|---|---|---|
| Customer evidence owner | | | |
| vWorkspace evidence lead | | | |
| Product validation owner | | | |
| Customer publication owner | | | |

## 9. Claim Map

Every outcome, capability, customer, quote, comparison, commercial, or repeatability statement needs a claim ID.

| Claim ID | Exact proposed wording | Type | Evidence IDs | Required qualifier | Product status | Permission status | Sarah status | Allowed output/channel | Expiry/review trigger |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

### Reader inference check

For each public claim, ask:
- Could a reader infer that every customer will get this result?
- Could a reader infer that this workflow or integration is ready-made?
- Could a reader infer that the use case defines the product or an industry solution?
- Could a reader miss the human approvals, interventions, exceptions, or limits?
- Could a reader infer a price, timeline, ROI, SLA, support, security, compliance, certification, or runtime promise?

If yes, narrow the claim or add the required adjacent qualifier. If that cannot prevent the inference, reject the claim.

## 10. Output Plan

Select only outputs allowed by evidence level and permission.

| Output | Internal/external | Audience | Job | Required level | Source modules | Permission scope | Content owner | Decision/status |
|---|---|---|---|---|---|---|---|---|
| Pilot learning brief | Internal | | | E1 | | | | |
| Sales proof card | Internal | | | E2 | | | | |
| Objection/FAQ note | Internal | | | E1/E2 | | | | |
| Discovery prompt update | Internal | | | E1 | | | | |
| Template-candidate brief | Internal | | | E5 or hypothesis | | | | |
| Evidence page entry | External | | | E3/E4 | | | | |
| Named case study | External | | | E4 | | | | |
| Anonymized workflow note | External | | | E3 | | | | |
| Website proof module | External | | | E3/E4 | | | | |
| Sales leave-behind proof block | External | | | E3/E4 | | | | |
| Evidence-led article | External | | | E3/E4 | | | | |
| Approved quote card | External | | | E4 | | | | |
| Distribution extract | External | | | Same as source | | | | |

### Priority decision

| Criterion | Decision |
|---|---|
| Eligibility can be completed | |
| Repeated, documented customer relevance | |
| Supports the platform and pilot story | |
| Reusable without loss of context | |
| Smallest useful output | |

Do not add unsupported demand, impact, or market scores.

## 11. Asset Review

Complete one row per asset version.

| Asset ID/version | Output/channel | Claims used | Evidence review | Product review | Customer permission | GTM positioning | Sarah decision | Final status |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

### Positioning review

- [ ] The platform and bounded pilot remain the product story.
- [ ] The use case appears as proof, not a product/category name.
- [ ] Workflow context appears before the result.
- [ ] Human accountability and material intervention remain visible.
- [ ] Baseline, method, period, and limitations are adjacent enough to prevent overstatement.
- [ ] The asset does not imply universal workflow, integration, industry, or outcome support.
- [ ] The final CTA returns to discovery of another bounded workflow and uses approved wording.

### Sarah approval

| Field | Entry |
|---|---|
| Exact asset/version reviewed | |
| Exact claims reviewed | |
| Decision: `Approved with exact wording` / `Revise` / `Rejected` | |
| Approved identity level | |
| Approved output/channel | |
| Conditions | |
| Decision reference/date | |

No external asset can enter `Approved for exact use` with this section incomplete.

## 12. Publication Preflight and Log

### Preflight

- [ ] Asset version matches the approved version.
- [ ] Claim wording and qualifiers match the approved claim map.
- [ ] Customer identity, quote, logo, format, and channel match permission.
- [ ] Metadata, Open Graph copy, schema, captions, alt text, URL, and visuals stay within approval.
- [ ] Links point to approved sources or destinations.
- [ ] Confidential and personal information is removed under customer rules.
- [ ] Accessibility and channel requirements are met.
- [ ] Content owner and review/withdrawal trigger are recorded.

### Publication log

| Asset ID/version | Channel | URL/reference | Published by/date | Permission expiry | Review trigger/date | Current status |
|---|---|---|---|---|---|---|
| | | | | | | |

## 13. Maintenance and Withdrawal

| Event | Date | Affected asset/claim | Action | Owner | Review/approval reference |
|---|---|---|---|---|---|
| Product change | | | | | |
| Evidence correction | | | | | |
| Permission change/withdrawal | | | | | |
| Asset wording/format/channel change | | | | | |
| Review/expiry reached | | | | | |
| Correction/unpublication | | | | | |

When accuracy or permission is uncertain, remove or unpublish the affected material during review.

## 14. Record Decision

| Field | Entry |
|---|---|
| Current workflow state | |
| Eligible evidence level | |
| Approved outputs | |
| Blocked outputs and reason | |
| Next gate | |
| Next owner | |
| Review/expiry trigger | |
| Last decision/date | |
