# Website Pivot Brief

**Brief version:** v1

**Last updated:** 2026-09-19

**Status:** Internal proposal only. This brief does not authorize website implementation or publication.

**Source of truth:** `.agents/product-marketing.md` v1

**Supporting internal assets:** `docs/gtm/agentic-organization-pilot/` and `docs/gtm/sales/one-workflow-pilot-leave-behind.md`

## Approval and Claim Key

Every proposed public-facing statement in this brief is governed by one of these labels:

- **[RESERVED — SARAH]** Sarah must approve the decision and final public wording.
- **[VERIFY — PRODUCT]** Confirm current, demonstrable product behavior and its limits before public use.
- **[EVIDENCE REQUIRED]** Requires a documented source, measurement method, customer permission where applicable, and Sarah's release approval.
- **[WORKING]** May guide internal structure and drafts. Public use still requires Sarah's asset approval.
- **[DO NOT CLAIM]** Excluded because it is unsupported or outside the current product boundary.

These labels are production requirements, not editorial notes to remove automatically. A claim may enter public copy only after its gate is resolved and the final asset is approved.

## 1. Pivot Objective

Reframe the website from a feature-led “private AI workspace / AI Experts” story to a workflow-led path into a configured Agentic Organization Pilot.

The website's primary job is to help a visitor:

1. recognize one piece of operational work worth examining;
2. understand that vWorkspace starts with a bounded, measurable workflow;
3. see where people remain accountable and in control;
4. understand the platform model without mistaking architecture for available capability;
5. request a discovery and pilot-scoping conversation.

**Primary conversion action:** Request a discovery and pilot-scoping conversation. **[WORKING]**

**Public CTA wording and destination:** “Explore an Agentic Organization Pilot.” **[RESERVED — SARAH]**

### Non-goals

- Do not present a self-serve SaaS signup or free trial. **[DO NOT CLAIM]**
- Do not lead with infrastructure, deployment modes, repositories, or individual technical integrations.
- Do not imply that every workflow, system, or runtime is supported.
- Do not publish pricing, timing, fixed scope, ROI, SLA, support-level, security, compliance, or guaranteed-result language. Commercial terms are **[RESERVED — SARAH]**; unsupported guarantees are **[DO NOT CLAIM]**.
- Do not publish customer names, logos, quotes, use cases, or outcomes without complete evidence and release approval. **[EVIDENCE REQUIRED]**
- Do not invent product screenshots. Use verified product captures or explanatory diagrams only.

## 2. Audience and Conversion Assumptions

The only confirmed audience condition is an organization with identifiable operational friction and willingness to scope one bounded, measurable workflow. **[WORKING]**

Company size, industry, geography, buyer titles, and trigger events are not yet validated. **[EVIDENCE REQUIRED]**

Design the journey around roles in the decision rather than unverified personas:

- person accountable for the business outcome;
- workflow owner and current operators;
- owner of systems, data, permissions, and risk;
- financial decision-maker for a pilot.

These are discovery roles, not public persona or ICP claims. **[WORKING]**

### Visitor questions the site must answer

1. Is this about a real workflow or another broad AI rollout?
2. What would an AI Employee do, and what remains human work?
3. How are access, approval, exceptions, and fallback handled?
4. What happens during a pilot?
5. How will we know whether to stop, refine, or repeat?
6. What does the platform do underneath the implementation?

## 3. Message Order

Keep this sequence consistent across core pages:

1. **Operational friction:** start with work slowed by repeated coordination, manual handoffs, fragmented context, or scarce people. These remain problem hypotheses until customer language is captured. **[WORKING]**
2. **Bounded intervention:** select one workflow with an owner and baseline. **[WORKING]**
3. **Human/AI boundary:** define what the AI Employee may observe, draft, recommend, or execute and what remains human work. **[WORKING]**
4. **Governed execution:** explain permissions, tasks, runs, approvals, results, and auditability only to the level verified in the product. **[VERIFY — PRODUCT]**
5. **Evidence-led closeout:** compare observations with the baseline and decide whether to stop, refine, or repeat. Do not imply improvement. **[WORKING]**
6. **Platform mechanism:** introduce Odoo, the vWorkspace Agent Platform, and Hermes after the value story. **[WORKING / VERIFY — PRODUCT as noted below]**
7. **Conversation:** invite the visitor to bring one workflow. Final CTA and destination remain reserved. **[RESERVED — SARAH]**

## 4. Proposed Information Architecture

### Primary navigation

| Label | Proposed route | Job | Gate |
|---|---|---|---|
| Platform | `/platform/` | Explain the product model and governance layer after the workflow story. | Detailed controls **[VERIFY — PRODUCT]** |
| Pilot | `/pilot/` | Explain fit, boundaries, process, evidence, and next step. | Offer name and CTA **[RESERVED — SARAH]** |
| How it works | `/#how-it-works` initially | Give a short workflow-to-evidence sequence without adding another top-level page. | Sequence **[WORKING]** |
| Evidence | `/evidence/` later; omit from launch navigation | Hold approved customer evidence and repeatable workflow patterns. | Entire page **[EVIDENCE REQUIRED]** |
| About | `/company/` | Explain the practical, accountable implementation approach and point to technical resources. | Any open-source, delivery, or company claim must be revalidated. |
| Primary CTA | Destination to be decided | Start the pilot-scoping path. | Label and destination **[RESERVED — SARAH]** |

Recommended launch navigation before evidence exists:

`Logo | Platform | Pilot | How it works | About | [Primary CTA]`

Do not use “Solutions” as a container for unverified industry or company-size claims. Do not keep “Knowledge,” “AI Experts,” or “Cloud Pilot” as equal top-level product categories; those reflect the legacy story rather than the new product hierarchy.

### Core page set

1. **Home** — workflow-led category and conversion page.
2. **Platform** — product model, governance, human accountability, and runtime boundary.
3. **Pilot** — qualification, bounded process, readiness, evidence, and conversation entry.
4. **Evidence** — withheld until approved evidence exists; later holds use cases as proof, not product categories.
5. **About** — company approach and links to separately validated technical resources.

### Legacy route disposition

No route changes are authorized by this brief.

| Current route | Proposed disposition after approval | Reason / gate |
|---|---|---|
| `/` | Replace its information hierarchy and copy. | Current private-workspace positioning is superseded for future drafts. |
| `/product/` | Reframe as `/platform/`; preserve a redirect only during implementation. | Product should be explained as a governance and implementation platform, not a capability catalog. |
| `/pilot/` | Rewrite around one measurable workflow, boundaries, readiness, and evidence. | Remove legacy deployment and runtime assertions unless revalidated. |
| `/solutions/` | Do not carry forward at launch; later redirect to approved evidence or workflow patterns. | Current audience, sector, and “where teams use it today” statements are unvalidated. **[EVIDENCE REQUIRED]** |
| `/knowledge/`, `/ai-experts/`, `/netbird-ai/` | Remove from primary navigation; retain only if each capability page is product-validated and useful as supporting detail. | They are use cases/capabilities, not the product category. **[VERIFY — PRODUCT]** |
| `/cloud-pilot/`, `/appliance/`, `/open-source/` | Move out of the primary journey; retain in footer or technical resources only after claims are revalidated. | Deployment is secondary and current statements are legacy inputs. |
| `/company/` | Rewrite to the new product thesis; retain verified repository and governance links separately. | Current open, commercial-delivery, customer-ownership, and security language needs source review. |

## 5. Home Page Layout

### Page job

Move a visitor from “we have a workflow problem” to “we should bring one workflow into a scoping conversation.”

### Desktop composition

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Logo        Platform  Pilot  How it works  About       [Primary CTA]│
├──────────────────────────────────────────────────────────────────────┤
│ HERO COPY                         BOUNDED WORKFLOW MAP                │
│ Headline                          Trigger → work → human decision     │
│ Support copy                      → result → evidence                 │
│ [Primary CTA] [How it works]      One visible exception/fallback     │
├──────────────────────────────────────────────────────────────────────┤
│ THE WORK: recognizable friction shown as one continuous workstream   │
├──────────────────────────────────────────────────────────────────────┤
│ HOW IT WORKS: Discover → Bound → Verify → Review                     │
├──────────────────────────────────────────────────────────────────────┤
│ HUMAN / AI BOUNDARY: paired responsibilities, approval, fallback     │
├──────────────────────────────────────────────────────────────────────┤
│ PLATFORM MODEL: Odoo | Agent Platform | Hermes, tied to the workflow │
├──────────────────────────────────────────────────────────────────────┤
│ PILOT FIT + WHAT TO BRING: owner, baseline, systems, approvers        │
├──────────────────────────────────────────────────────────────────────┤
│ EVIDENCE SLOT: render only when approved evidence exists             │
├──────────────────────────────────────────────────────────────────────┤
│ FAQ                                                      [Final CTA] │
└──────────────────────────────────────────────────────────────────────┘
```

### Section specification

#### 1. Hero

- **Headline candidate:** “We find the work slowing your business down, then build AI Employees to handle it—with your team still in control.” **[RESERVED — SARAH]**
- **Category label candidate:** “Agentic organization implementation platform.” **[RESERVED — SARAH]**
- **Support message:** Begin with one measurable workflow, define what people and AI may do, and evaluate the result against a baseline. **[WORKING]**
- **Primary CTA candidate:** “Explore an Agentic Organization Pilot.” **[RESERVED — SARAH]**
- **Secondary anchor:** “See how it works.” **[WORKING]**

The hero visual should be an explanatory workflow map, not a dashboard screenshot or abstract AI image. Show one trigger, a bounded sequence, one human decision point, one exception/manual path, and an evidence record. The diagram describes the operating model, not verified UI behavior. **[WORKING]**

#### 2. Start with the work

Present operational friction as questions or observable patterns, never asserted customer facts:

- Where does work wait for context or a decision?
- Which handoffs cause repetition or rework?
- Which workflow depends on scarce attention?
- What record could establish a baseline?

Problem frequency, cost, severity, and universality are **[EVIDENCE REQUIRED]**.

#### 3. Four pilot moves

Use one continuous horizontal sequence on desktop and a vertical sequence on mobile:

1. Discover the current workflow.
2. Agree the boundary.
3. Verify before running.
4. Review the evidence.

This sequence is **[WORKING]**. Do not add duration, guaranteed deliverables, or expected improvement.

#### 4. Keep accountability visible

Use a paired ledger rather than feature cards:

| AI Employee may | People remain responsible for |
|---|---|
| Observe, draft, recommend, or execute only as defined for the workflow. **[WORKING; exact execution behavior VERIFY — PRODUCT]** | Consequential decisions, authorization, exceptions, and accountability. **[WORKING]** |

Claims about named permissions, approval UI, reject/timeout behavior, and audit trail are **[VERIFY — PRODUCT]** before public use.

#### 5. Explain the product model

Show three connected layers around the same workflow:

- **Odoo:** organization control panel and system of record. Customer-facing meaning and deployed scope **[VERIFY — PRODUCT]**.
- **vWorkspace Agent Platform:** governs AI Employees, tasks, permissions, runs, approvals, and results. Each named behavior **[VERIFY — PRODUCT]**.
- **Hermes:** first teachable execution runtime behind an adapter. “Teachable,” adapter behavior, and customer-facing scope **[VERIFY — PRODUCT]**.

Additional production runtimes are **[DO NOT CLAIM]**. The adapter is architecture, not current runtime availability.

#### 6. Frame the pilot

Invite the visitor to bring one workflow with:

- a clear trigger and completion point;
- a named owner and current operators;
- an observable source for a baseline;
- systems and data with accountable owners;
- human approvers and a manual fallback.

These fit conditions are **[WORKING]**. Pilot name, commercial packaging, timeline, scope, and CTA remain **[RESERVED — SARAH]**.

#### 7. Proof slot

Do not imitate proof with generic metrics, stock logos, or unsourced testimonials. Hide this section until an approved record includes:

- named workflow and accountable owner;
- baseline and method;
- observed result and period;
- human/AI boundary;
- limitations;
- customer publication permission;
- Sarah's release approval.

All customer proof is **[EVIDENCE REQUIRED]**.

#### 8. FAQ

Prioritize qualification and boundaries:

- What makes a workflow suitable for a pilot?
- What must remain human work?
- What happens when a case is ambiguous or out of scope?
- How is a baseline selected?
- What happens after the pilot?
- Which systems and integrations are available?

The integration answer must route to discovery and verification; it must not imply universal support. **[VERIFY — PRODUCT]**

## 6. Platform Page Layout

### Page job

Explain how the platform supports the bounded implementation without turning the site into a feature inventory.

### Recommended order

1. **Hero:** value-led platform explanation. Final definition **[RESERVED — SARAH]**.
2. **One workflow through the system:** input, task, permitted action, human decision, result, evidence. Exact behavior **[VERIFY — PRODUCT]**.
3. **Three-layer product model:** Odoo, vWorkspace Agent Platform, Hermes, with the boundaries above.
4. **Governance ledger:** identity/role, permission, run, decision, result, exception. Every demonstrated control **[VERIFY — PRODUCT]**.
5. **Human accountability:** consequential actions retain accountable people. **[WORKING]**
6. **Runtime boundary:** Hermes is first; adapter architecture does not imply other production runtimes. **[WORKING / VERIFY — PRODUCT]**
7. **Implementation boundary:** configured for one customer workflow; do not imply ready-made support for any workflow or integration. **[WORKING]**
8. **CTA to pilot-scoping path:** wording and destination **[RESERVED — SARAH]**.

### Visual treatment

Use a single “work record” that progresses down the page and accumulates ownership, permission, decision, and evidence. This makes governance tangible without fabricating UI. Product screenshots may replace a diagram only after the represented behavior is verified.

## 7. Pilot Page Layout

### Page job

Let a qualified visitor understand the engagement boundary and take the next step without implying a packaged timeline, price, or guaranteed outcome.

### Recommended order

1. **Hero candidate:** “One workflow. Clear boundaries. Evidence your team can review.” **[RESERVED — SARAH]**
2. **Fit screen:** clear trigger/completion, owner, baseline source, systems/data owners, approvers, and fallback. **[WORKING]**
3. **What happens:** discover, qualify, charter, verify, run/capture, close. **[WORKING]**
4. **Boundary ledger:** in/out, AI/human, permission, approval, exception, fallback. Exact product behavior **[VERIFY — PRODUCT]**.
5. **Readiness gate:** unknown baseline, unnamed accountable human, incomplete approval/exception path, or missing evidence owner means the pilot is not ready. **[WORKING]**
6. **Closeout questions:** stop, refine, or repeat; no guaranteed result. **[WORKING]**
7. **What to bring:** one workflow the team can show from trigger to completion. **[WORKING]**
8. **Conversation entry:** form, calendar, or email destination and CTA **[RESERVED — SARAH]**.

### Conversion form recommendation

Keep the first contact low-friction while collecting enough context to route the conversation:

- name;
- work email;
- organization;
- “What workflow should we examine?”;
- optional role in that workflow;
- consent/privacy acknowledgement once approved.

Do not ask visitors to complete the full internal qualification kit on the website. Form destination, data handling, consent language, retention, and response expectations require operational and legal approval. Do not state a response-time SLA.

## 8. Evidence Page Template — Withhold at Launch

Create this route only when approved proof exists. Each entry should follow the evidence record, not a generic testimonial layout:

1. workflow and accountable owner;
2. before-state baseline and method;
3. bounded intervention;
4. human/AI responsibility split;
5. observed result and period;
6. exceptions, interventions, and limitations;
7. closeout decision;
8. publication permission and approval.

Customer identity, quote, logo, metric, outcome, and “template” status are **[EVIDENCE REQUIRED]**. Hair Therapy, meeting intelligence, and other implementations stay internal until separately verified and approved.

## 9. Visual and Interaction Direction

### Concept: the accountable workstream

The distinctive visual device is one workflow line that moves through the site and changes state: observed, bounded, assigned, reviewed, and evidenced. Human decision points interrupt the line visibly; exceptions branch to a manual path. This comes directly from the pilot operating model and avoids generic AI imagery.

### Existing brand foundation to retain

- Inter for clear prose and JetBrains Mono only for identifiers, states, and machine-executed records.
- Existing vWorkspace blue, ink, white, and restrained cyan gradient.
- Existing compact radius and accessible focus treatment.

No visual redesign or token change is authorized here. During implementation, reduce the current reliance on repeated eyebrow labels and interchangeable card grids. Use rules, alignment, and the workstream itself to encode sequence and responsibility.

### Layout principles

- One dominant composition per viewport, not a dashboard of cards.
- Left-align explanatory copy and keep body measures below 70 characters where practical.
- Use numbers only for true sequences.
- Keep one primary CTA and one lower-emphasis explanatory anchor.
- Use whitespace to separate decision stages rather than decorative gradients.
- Show human and AI responsibilities side by side on desktop and in paired blocks on mobile.

### Mobile behavior

- Hero order: headline, support, primary CTA, workflow map.
- Convert horizontal sequences to a vertical timeline without hiding exception/fallback paths.
- Keep tap targets at least 48px high.
- Do not use a sticky CTA until its destination, consent flow, and behavior are approved.
- Avoid horizontal scrolling for product-model and responsibility diagrams.

### Imagery

Preferred:

- verified workflow diagrams;
- redacted and verified product captures;
- documentary photography of real operational work only when rights and relevance are clear.

Avoid:

- invented UI;
- humanoid robots, glowing brains, generic office celebration imagery, or abstract “AI” orbs;
- fake customer logos;
- decorative dashboards that imply unverified controls.

## 10. Copy and Claim Control Matrix

| ID | Topic | Status | Website rule |
|---|---|---|---|
| C1 | “Agentic organization implementation platform” | **[RESERVED — SARAH]** | Internal IA label only until approved. |
| C2 | Core promise / home headline | **[RESERVED — SARAH]** | Candidate only; do not publish. |
| C3 | Definition of “agentic organization” | **[RESERVED — SARAH]** | Do not add to metadata, FAQ, or schema before approval. |
| C4 | Pilot name and CTA | **[RESERVED — SARAH]** | Final wording and destination require approval. |
| C5 | Odoo as control panel/system of record | **[WORKING / VERIFY — PRODUCT]** | Confirm customer-facing meaning and deployed scope. |
| C6 | Platform governs tasks, permissions, runs, approvals, results | **[VERIFY — PRODUCT]** | Validate every named noun and demonstrated flow. |
| C7 | Permissions, approvals, audit trail | **[VERIFY — PRODUCT]** | Publish only with verified behavior and explicit limits. |
| C8 | Hermes as teachable runtime behind adapter | **[WORKING / VERIFY — PRODUCT]** | Verify “teachable” and adapter behavior; do not imply other runtimes are live. |
| C9 | Human accountability for consequential actions | **[WORKING]** | Pair with capability language; never imply accountability transfers to AI. |
| C10 | One measurable workflow pilot | **[WORKING]** | No fixed time, scope, price, ROI, or guaranteed result. |
| C11 | Customer names, logos, quotes, results | **[EVIDENCE REQUIRED]** | Withhold until source, permission, limits, and release approval exist. |
| C12 | ICP, sectors, company size, geography | **[EVIDENCE REQUIRED]** | Remove current claims; do not replace with new assumptions. |
| C13 | Pricing, packaging, timeline, SLA, support | **[RESERVED — SARAH]** | Omit until decided and approved. |
| C14 | Multiple production runtimes, full autonomy, self-serve SaaS | **[DO NOT CLAIM]** | Exclude from copy, diagrams, metadata, and schema. |
| C15 | Certifications, compliance, security guarantees | **[DO NOT CLAIM]** | Require a separate verified and approved source before any future use. |

## 11. Metadata, Search, and Measurement

### Metadata

Page titles, descriptions, Open Graph copy, structured data, and `site.description` are public claims. They must use the same claim gates as visible copy.

- Do not retain `SoftwareApplication` feature lists from the legacy home page without item-by-item product validation.
- Do not use industry, company-size, outcome, security, compliance, or availability statements in metadata. **[EVIDENCE REQUIRED / DO NOT CLAIM]**
- Category, headline, and definition keywords remain **[RESERVED — SARAH]**.

### Measurement plan

No funnel targets or benchmarks are approved. Instrumentation may record neutral behavior after privacy and analytics decisions are approved:

- primary CTA click;
- “How it works” anchor click;
- pilot form start;
- pilot form completion;
- validation error;
- exit to technical documentation.

Do not interpret clicks as qualification or business outcomes. Establish metric definitions, consent, ownership, retention, and review cadence before launch.

## 12. Approval and Implementation Gate

Do not begin website implementation from this brief until the following are recorded:

### Sarah decisions

- [ ] Final public category/name and definition.
- [ ] Final home headline and customer-facing promise.
- [ ] Final pilot name, CTA wording, and destination.
- [ ] Public website copy and metadata.
- [ ] Any commercial statement.
- [ ] Any customer proof selected for publication.
- [ ] Authorization to implement and final authorization to publish.

### Product validation

- [ ] Odoo's customer-facing role and deployed scope.
- [ ] Each claimed Agent Platform object and behavior: AI Employees, tasks, permissions, runs, approvals, results, and audit trail.
- [ ] Approval, rejection, timeout, exception, stop, and manual-fallback behavior represented on the site.
- [ ] Hermes teachability, configuration, and adapter wording.
- [ ] Every retained integration, deployment, infrastructure, open-source, and documentation claim.
- [ ] Every product screenshot or product-state diagram.

### Evidence and operations

- [ ] No proof section renders without complete evidence, customer permission, and release approval.
- [ ] Contact destination and routing owner are confirmed.
- [ ] Form data handling, consent, privacy, retention, and deletion are approved.
- [ ] Analytics definitions and ownership are approved.
- [ ] Redirect and retirement plan is approved for every legacy route.

### Design and content acceptance

- [ ] Home, Platform, Pilot, and About tell one consistent story in the specified order.
- [ ] Use cases appear only as approved evidence, not competing product categories.
- [ ] Human accountability is visible anywhere consequential AI action is discussed.
- [ ] Mobile layouts preserve boundaries, approval points, and exception paths.
- [ ] Accessibility, keyboard navigation, reduced motion, contrast, and responsive behavior are verified.
- [ ] No implementation or publishing occurs before the required approvals.

## Changelog

- v1 (2026-09-19) — Proposed the workflow-led website pivot, core-page IA and layouts, legacy-route disposition, visual direction, claim controls, and pre-implementation approval gate.
