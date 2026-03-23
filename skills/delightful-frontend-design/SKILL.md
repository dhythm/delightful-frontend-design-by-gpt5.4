---
name: delightful-frontend-design
description: Coordination skill for high-quality frontend work based on OpenAI's "Designing delightful frontends with GPT-5.4". Use when Codex should design or build a polished landing page, marketing site, corporate site, or product surface and should first rely on `frontend-skill`, then apply additional workflow, verification, and article-derived guardrails from this project.
---

# Delightful Frontend Design

Use `frontend-skill` as the default implementation guide. Use this skill as the wrapper that decides how to apply it, what to verify, and which additional constraints from the OpenAI article matter for the current task.

## Order Of Use

1. Read and follow `frontend-skill` first for composition, hierarchy, imagery, copy, and motion.
2. Use this skill to add workflow discipline, verification, and project-specific judgment.
3. Load [references/designing-delightful-frontends.md](references/designing-delightful-frontends.md) only when you need the article-specific details or failure checks.

## What This Skill Adds

- force an explicit upfront framing before implementation
- distinguish landing pages, corporate sites, and product surfaces early
- push verification harder than `frontend-skill` alone
- keep the OpenAI article condensed into one reference file instead of duplicating it in multiple prompts

## Required Upfront Framing

Before writing code, state these three items in 3-6 short lines:

- visual thesis
- content plan
- interaction thesis

If the user gives little direction, infer a narrow direction and state the assumptions briefly.

## Surface Selection

### Landing Page

Use `frontend-skill`'s landing-page defaults. Then verify:

- the first viewport reads as one composition
- the dominant image is doing real narrative work
- the CTA is visible without hunting

### Corporate Site

Use `frontend-skill`'s branded-page guidance, but bias toward trust, clarity, and restraint over novelty. Prefer:

- calmer typography
- fewer decorative motions
- stronger information scent
- image placeholders with concrete photo direction when final assets are missing

### Product Surface

Use `frontend-skill`'s app guidance. Do not introduce a marketing hero unless the user explicitly asks for it.

## Verification

Always check the final result against these questions:

- Is the brand or product unmistakable in the first screen?
- Is there one strong visual anchor?
- Can the page be understood by scanning headlines only?
- Are cards actually necessary?
- Does motion improve hierarchy or atmosphere?

If browser inspection, screenshots, or Playwright are available, use them.

## Reference

Read [references/designing-delightful-frontends.md](references/designing-delightful-frontends.md) when you need:

- the distilled takeaways from the OpenAI article
- a reminder of common failure modes
- stronger LP vs app-surface judgment
