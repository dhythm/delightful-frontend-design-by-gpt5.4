---
name: delightful-frontend-design
description: Deliberate art-direction and implementation guidance for landing pages, marketing sites, product UIs, prototypes, demos, and visually led app surfaces. Use when Codex needs to design or build a frontend that should feel polished, distinctive, and production-ready, especially when strengthening branding, reducing generic card-heavy layouts, planning imagery or motion, or translating references into a cohesive visual system.
---

# Delightful Frontend Design

Build frontends that feel intentional, brand-aware, and visually strong without drifting into generic SaaS patterns. Start from composition, hierarchy, imagery, and motion, then implement the UI system that supports them.

## Quick Start

Before writing code, define these three items in 3-6 lines total:

- visual thesis: mood, material, energy
- content plan: hero, support, detail, final CTA or equivalent product flow
- interaction thesis: 2-3 motions that improve presence or affordance

If the brief is incomplete, infer a narrow direction and state the assumptions briefly before building.

## Choose The Surface

### Landing Page Or Promotional Surface

Use a poster-like first viewport with one dominant visual idea. Default sequence:

1. hero
2. support
3. detail
4. final CTA

For detailed constraints, read [references/designing-delightful-frontends.md](references/designing-delightful-frontends.md), then apply the landing-page, imagery, copy, motion, and litmus sections.

### Product UI Or App Surface

Default to restrained product UI:

- primary workspace first
- navigation second
- secondary context or inspector third
- one accent for action or state

Do not add a marketing hero to a dashboard or operational surface unless the user explicitly asks for it. Read the app-surface and utility-copy sections in [references/designing-delightful-frontends.md](references/designing-delightful-frontends.md).

## Build The System Early

Establish the design system before adding many components:

- define CSS variables or tokens for `background`, `surface`, `text`, `muted`, and `accent`
- define typography roles such as `display`, `headline`, `body`, and `caption`
- default to at most two typefaces
- default to one accent color unless the product already has a stronger system
- use whitespace, scale, alignment, cropping, and contrast before adding borders, shadows, or cards

Prefer React + Tailwind when the stack is open-ended, but preserve the existing stack and conventions when working inside an established codebase.

## Composition Rules

- Treat the first viewport as one composition, not a pile of components.
- Make the brand or product name a hero-level signal on branded pages.
- Keep above-the-fold content sparse: one headline, one short supporting sentence, one CTA group, one dominant image.
- Default to cardless layouts. Use cards only when they clearly contain an interaction.
- Give each section one job, one dominant visual idea, and one primary takeaway.
- Use real-looking imagery that carries narrative weight. Decorative texture alone is not enough.
- Keep copy short, product-facing, and easy to scan.

## Motion Rules

Ship 2-3 intentional motions for visually led work:

- one entrance sequence
- one scroll, sticky, or depth behavior
- one hover, reveal, or transition that improves affordance

Keep motion noticeable, fast, smooth on mobile, and consistent. Remove it if it is only ornamental.

## Verification

Always verify the result at desktop and mobile sizes. Check for:

- strong first-screen hierarchy
- clear brand or product signal
- no overlapping fixed or floating UI over key content
- readable contrast over imagery
- headings that explain the page by scanning alone
- cards that are actually necessary
- motion that improves hierarchy or atmosphere

If Playwright, screenshots, or browser inspection are available, use them to inspect the rendered page and iterate. Low or medium reasoning is usually a better starting point than high reasoning for straightforward frontend generation.

## References

Load [references/designing-delightful-frontends.md](references/designing-delightful-frontends.md) when you need the detailed rules, anti-patterns, or litmus checks derived from the OpenAI article.
