# Use-Case-to-Content System

**System version:** v1

**Last updated:** 2026-09-19

**Status:** Internal working system. Nothing in this system authorizes external publication.

**Sources of truth:**
- `.agents/product-marketing.md`
- `docs/gtm/agentic-organization-pilot/03-evidence-capture.md`
- `docs/gtm/website-pivot-brief.md`

**Per-use-case record:** [`use-case-record.md`](./use-case-record.md)

## 1. Purpose

Turn evidenced pilot work into accurate, reusable sales and content assets without turning a use case into the product category or publishing beyond the available proof.

The product story remains:

1. operational friction;
2. one bounded workflow;
3. explicit human/AI responsibility;
4. governed execution to the extent verified;
5. evidence-led closeout;
6. the platform mechanism;
7. a conversation about another suitable workflow.

A use case supports that story with proof. It does not replace the story, define a new vertical product, or prove that the same workflow and result are generally available.

## 2. Non-Negotiable Rules

- No pilot automatically becomes content.
- No draft substitutes for an evidence record.
- No anonymized story bypasses customer permission.
- No customer permission substitutes for product validation.
- No product validation substitutes for evidence quality.
- No prior asset approval automatically covers a new claim, wording, format, identity level, channel, or audience.
- No public asset moves past `Needs Sarah approval` without Sarah's explicit approval of the exact asset and claims.
- No use case becomes a navigation category, solution category, ICP claim, or ready-made template without separate evidence and approval.
- Negative, neutral, exception, and human-intervention evidence remains in the source record.
- Public content carries the limitations required to prevent a reasonable reader from inferring more than the evidence supports.

## 3. Unit of Work

Create one use-case record for one bounded workflow. Assign:

- a use-case ID: `UC-YYYY-NNN`;
- the pilot charter and closeout reference;
- the evidence register and claim IDs;
- a content owner;
- an evidence owner;
- a product validation owner;
- a customer publication owner;
- an approval and publication history.

Do not combine unrelated workflows into a stronger-looking story. If two workflows have different baselines, boundaries, evidence, or permissions, they need separate records.

## 4. Workflow States

| State | Meaning | Exit condition |
|---|---|---|
| `Captured` | Intake exists; content eligibility is unknown. | Required source references and owners are present. |
| `Evidence review` | Evidence quality, comparison, and limitations are being assessed. | Customer evidence owner records `Pass` or `Limited`; `Fail` moves to `Internal learning only` or `Parked`. |
| `Permission review` | Allowed identity levels, claims, quotes, logos, formats, and channels are being confirmed. | Permission is recorded for the proposed use or the output is narrowed. |
| `Product review` | Capability wording is checked against demonstrated behavior and limits. | Product validation owner approves exact technical wording or removes it. |
| `Output planned` | Eligible outputs, audience, job, and source modules are selected. | Content owner and GTM owner approve the output plan. |
| `Drafting` | Assets are derived from the approved source packet. | Every claim maps to a claim/evidence ID and required qualifier. |
| `Sarah review` | The exact asset and public claims await Sarah's decision. | `Approved with exact wording`, `Revise`, or `Rejected` is recorded. |
| `Approved for exact use` | Asset, wording, identity, channel, and conditions are approved. | Publication owner completes preflight and publishes only to the approved channel. |
| `Published` | Approved asset is live with a publication record. | Review, expiry, correction, or withdrawal event occurs. |
| `Internal learning only` | Useful internally but not eligible for external claims. | New evidence or permission reopens review. |
| `Parked` | Required evidence, owner, validation, or permission is missing. | Missing condition changes. |
| `Withdrawn` | Permission, accuracy, or relevance no longer supports use. | Remains archived; do not republish without a new review. |

`Drafting` and `Sarah review` are not publication statuses.

## 5. Lightweight Workflow

### Step 1: Trigger intake

**Owner:** vWorkspace pilot lead

Start only after pilot closeout or a clearly documented evidence-review checkpoint. Create the use-case record and link—not copy—the controlled pilot evidence.

Required intake:
- bounded workflow and accountable owner;
- charter and closeout reference;
- baseline, method, observation period, and limitations;
- human/AI boundary and approval behavior;
- observed result, exceptions, and interventions;
- evidence quality status;
- evidence-use and identity permissions;
- product behavior requiring validation;
- candidate audiences and content jobs.

### Step 2: Determine evidence eligibility

**Owners:** customer evidence owner and vWorkspace evidence lead

Confirm:
- baseline and pilot observations use a comparable operational definition;
- source records support the summary;
- inclusion and exclusion rules were applied consistently;
- missing data, context changes, exceptions, and human interventions remain visible;
- the evidence quality review is `Pass` or `Limited`.

An evidence-quality `Fail` blocks outcome content. The workflow may still inform internal discovery questions or product learning if customer rules allow.

### Step 3: Record permission before format selection

**Owner:** customer publication owner

Record permission separately for:
- internal delivery use;
- internal GTM learning;
- anonymized external use;
- named external use;
- exact quotes and attribution;
- logo use;
- each format and channel;
- conditions, expiry, and withdrawal.

Use the narrowest granted level. If permission does not cover a proposed output, narrow or park it.

### Step 4: Validate product wording

**Owner:** product validation owner

Review every capability, integration, permission, approval, audit, runtime, deployment, and availability statement. Record the demonstrated environment, configuration, behavior, limits, and revalidation trigger.

Architecture does not prove availability. A configured customer workflow does not prove ready-made support for the same workflow elsewhere.

### Step 5: Build one source packet

**Owner:** Content Marketer

Create the approved internal source packet in the use-case record:
- one-sentence workflow context;
- before-state baseline and method;
- bounded intervention;
- human/AI responsibility split;
- approval, exception, and fallback behavior;
- observed result and period;
- limitations and alternative explanations;
- customer language approved for use;
- approved claim wording and qualifiers;
- prohibited inferences.

Every output derives from this packet. Do not re-interpret raw evidence independently for each channel.

### Step 6: Select reusable outputs

**Owners:** Content Marketer and GTM Lead

Choose the smallest set that has a clear audience and job. Output demand never overrides evidence or permission.

Draft once around the proof unit, then adapt only within approved wording and channel rights.

### Step 7: Review and release

**Owners:** evidence, product, customer publication, GTM, Sarah, and channel owner

Before external publication:
1. Evidence owner confirms source and limitations.
2. Product owner confirms capability wording.
3. Customer publication owner confirms the exact identity, claim, quote/logo, format, and channel.
4. GTM Lead confirms the use case supports the platform story rather than replacing it.
5. Sarah approves the exact public claims and asset.
6. Channel owner completes preflight and records the live URL/version.

Any material edit after approval returns to the affected gate.

## 6. Gate Matrix

| Gate | Required record | Blocks |
|---|---|---|
| Intake completeness | Workflow, owner, source references, candidate job, and named reviewers | All content work |
| Evidence quality | `Pass` or `Limited`, evidence IDs, method, period, limits, and customer validation | Outcome, comparison, and proof content |
| Human/AI boundary | Step-level responsibilities, approvals, interventions, exceptions, and fallback | Any “AI did the work” narrative |
| Product accuracy | Exact approved capability wording, environment, and limits | Capability and platform statements |
| Customer permission | Identity, quote/logo, wording, asset, channel, conditions, and expiry | All external use, including anonymized use |
| Claim traceability | Exact claim, evidence IDs, qualifiers, and prohibited inference | Draft approval |
| Positioning fit | Platform-led framing; use case appears as proof | GTM approval |
| Sarah approval | Exact asset and public claims | Publication |
| Publication preflight | Approved version, metadata, visuals, links, accessibility, and live owner | Channel release |

Passing a later gate does not cure a missing earlier gate.

## 7. Evidence and Permission Levels

| Level | Minimum condition | Eligible use |
|---|---|---|
| E0: Unverified intake | Discovery note or anecdote only | Private triage; no claim |
| E1: Internal learning | Traceable observations but incomplete comparison or public permission | Internal research, discovery prompts, product learning under customer rules |
| E2: Validated pilot record | Evidence review `Pass` or `Limited`; customer validates method and limits | Internal sales enablement if internal-use permission allows |
| E3: External anonymized proof | E2 plus anonymized-use permission, product validation, exact claims, and Sarah approval | Approved anonymized output/channel only |
| E4: External named proof | E2 plus named-use and applicable quote/logo permissions, product validation, exact claims, and Sarah approval | Approved named output/channel only |
| E5: Repeatable pattern candidate | Multiple separately evidenced records support the pattern and product/operations approve repeatability | Internal template evaluation; public repeatability claims require separate approval |

One pilot may support E3 or E4 proof. It does not by itself establish E5 repeatability.

## 8. Reusable Content Outputs

### Internal outputs

| Output | Audience/job | Required level | Required modules |
|---|---|---|---|
| Pilot learning brief | Product and GTM learn what happened | E1 | Workflow, boundary, observations, exceptions, limitations, next question |
| Sales proof card | Help sales discuss a relevant workflow without overclaiming | E2 plus internal-use permission | Context, baseline, bounded intervention, observation, limit, qualification prompt |
| Objection/FAQ note | Answer a recurring question with evidence | E1 or E2 | Customer question, grounded answer, boundary, unresolved point |
| Discovery prompt update | Improve future workflow interviews | E1 | Verbatim language, observed friction, evidence question, no outcome claim |
| Template-candidate brief | Evaluate whether a pattern should be repeated | E5 or explicit pre-E5 hypothesis status | Common steps, variable steps, boundary, dependencies, evidence gaps |

Internal does not mean unrestricted. Apply customer confidentiality, access, retention, and deletion decisions.

### External outputs

| Output | Audience/job | Required level | Required modules |
|---|---|---|---|
| Evidence page entry | Show how one bounded workflow was evaluated | E3 or E4 | Workflow, owner/identity level, baseline/method, intervention, boundary, observed result, limitations, closeout |
| Named case study | Give a complete customer-approved proof narrative | E4 | Challenge in customer's words, method, bounded work, human accountability, result, limits, approved quote/identity |
| Anonymized workflow note | Show a real pattern without naming the customer | E3 | Approved anonymized context, method, boundary, observation, limits |
| Website proof module | Support Home, Platform, or Pilot without taking over the page | E3 or E4 | One approved claim, qualifier, proof link, identity level |
| Sales leave-behind proof block | Add relevant proof to the one-page conversation asset | E3 or E4 | Concise context, observation, qualifier, evidence-page link if live |
| Evidence-led article | Teach from an observed workflow pattern | E3 or E4 | Question, method, findings, boundary, exceptions, limits, platform connection |
| Approved quote card | Provide customer voice with full context | E4 plus exact quote permission | Exact quote, attribution, context, approved visual treatment |
| Distribution extract | Bring readers to an approved owned asset | Same level and channel permission as source | Approved wording only, qualifier, source link |

Do not create a public case study, evidence page, “solution” page, industry page, or distribution extract from E0–E2 material.

## 9. Modular Source Model

Build each eligible story from the same modules:

| Module | Source |
|---|---|
| Workflow context | Pilot charter and customer-approved language |
| Accountable owner | Charter and permission record |
| Baseline and method | Evidence baseline register |
| Bounded intervention | Charter and verified implementation record |
| Human/AI split | Responsibility boundary and approval log |
| Observation | Comparable observation summary |
| Exceptions and interventions | Run, approval, intervention, and exception logs |
| Limitations | Evidence quality review and context log |
| Closeout decision | Pilot closeout |
| Capability wording | Product validation record |
| Identity, quote, and logo | Customer permission record |
| Exact public claim | Claim candidate register and Sarah decision |

If a module is unavailable, remove the dependent claim or output. Do not fill gaps with generic marketing language.

## 10. Output Framing Rules

Every external use-case asset should:

1. place the workflow inside the vWorkspace platform and pilot story;
2. state the bounded context before the result;
3. show what people remained responsible for;
4. disclose the measurement method and material limits near the observation;
5. distinguish observed behavior from interpretation;
6. avoid implying universal integration, workflow, industry, or outcome support;
7. end with the broader question of whether another workflow is suitable for discovery.

Do not:
- title the product “vWorkspace for [use case/industry]” unless a separate category decision is approved;
- describe the use case as the product;
- call a single implementation a repeatable template;
- convert a customer outcome into a product guarantee;
- remove exceptions or human intervention to make the story cleaner;
- present anonymization as permission;
- publish a result without its baseline, method, period, and necessary qualifier;
- add pricing, timeline, ROI, SLA, support, security, compliance, certification, or multi-runtime implications.

## 11. Ownership

| Role | Owns | Does not own |
|---|---|---|
| vWorkspace pilot lead | Creates intake and links the charter/closeout | Evidence validation or publication approval |
| Customer evidence owner | Validates source, method, observations, and limitations | Product capability wording |
| vWorkspace evidence lead | Maintains traceability and evidence-quality status | Customer publication permission |
| Customer publication owner | Grants or denies identity, claim, quote/logo, format, and channel rights | Product accuracy or Sarah's decision |
| Product validation owner | Approves exact technical behavior and limits | Outcome evidence or customer permission |
| Content Marketer | Builds the source packet, output plan, drafts, qualifiers, and derivative consistency | Overriding a failed gate |
| GTM Lead | Confirms positioning, priority, audience/job, and platform-led framing | Customer permission or final public approval |
| Web & Design | Produces approved layouts/visuals and preserves qualifiers | Inventing UI, proof, or claims |
| Sarah | Approves exact public claims and assets | Replacing evidence, product, or customer approval |
| Channel owner | Publishes the approved version and maintains the live record | Materially editing approved wording without re-review |

## 12. Website Alignment

The website brief withholds `/evidence/` until approved proof exists. Follow that rule:

- Keep the Evidence route and navigation item absent while no E3/E4 record is approved.
- Use cases may appear only in approved proof slots; they do not become primary navigation categories.
- Home proof modules support the workflow-led platform story.
- Platform proof modules demonstrate a verified operating boundary, not a feature inventory.
- Pilot proof modules show how evidence informed `Stop`, `Refine`, or `Repeat`; they do not promise improvement.
- Legacy Knowledge, AI Experts, NetBird, Hair Therapy, meeting intelligence, and other implementation labels are not automatically reusable as categories or proof.

Metadata, Open Graph copy, schema, image captions, alt text, and URLs are claims and must stay within the same approval scope as visible copy.

## 13. Prioritization

Choose what to produce in this order:

1. **Eligibility:** evidence, permission, product, and approval path can be completed.
2. **Customer relevance:** the workflow answers a repeated, documented buyer question.
3. **Platform fit:** the story demonstrates the bounded workflow and accountability model.
4. **Reuse:** one source packet can support several approved jobs without weakening context.
5. **Effort:** the smallest useful output can be produced and maintained.

Do not assign numeric market demand, frequency, or impact scores until research supports them.

## 14. Maintenance, Correction, and Withdrawal

Every published asset records:
- source packet version;
- claim IDs and exact wording;
- evidence and product validation references;
- customer permission scope and expiry;
- Sarah approval reference;
- channel, URL, and publication date;
- content owner and review trigger.

Re-review when:
- the product behavior, configuration, or availability changes;
- the customer changes or withdraws permission;
- an evidence source, calculation, or limitation changes;
- the wording, identity level, format, channel, metadata, or visual changes;
- the asset reaches its recorded review/expiry condition.

If accuracy or permission is in doubt, unpublish or remove the affected claim while review occurs. Record the correction or withdrawal; do not silently reuse superseded copy.

## 15. Lightweight System Measures

Track process health without turning it into a performance claim:
- records by workflow state;
- time waiting at each gate;
- evidence-quality outcomes;
- permission outcomes by use level;
- claims approved, revised, rejected, expired, or withdrawn;
- assets produced from each approved source packet;
- published assets with current owners and review conditions;
- corrections and withdrawals.

No targets or benchmarks are established by this document.

## 16. Quick Start

1. Copy `use-case-record.md`.
2. Assign a use-case ID and owners.
3. Link the charter, closeout, evidence, permission, and claim records.
4. Stop if evidence quality is `Fail`.
5. Record permission before selecting public outputs.
6. Validate exact capability wording.
7. Build one source packet.
8. Select the smallest eligible output set.
9. Map every draft claim to evidence and qualifiers.
10. Obtain Sarah's approval for the exact public asset.
11. Publish only the approved version and record its URL.
12. Maintain, correct, expire, or withdraw it when a trigger occurs.

## Changelog

- v1 (2026-09-19) — Established the repeatable intake, evidence, permission, product-validation, output, ownership, approval, publication, and maintenance workflow for use cases as proof.
