# Designing Delightful Frontends Reference

Source analyzed for this skill:

- OpenAI Developers blog, "Designing delightful frontends with GPT-5.4", published March 20, 2026
- https://developers.openai.com/blog/designing-delightful-frontends-with-gpt-5-4

Use this reference after `frontend-skill`, when you need article-specific nuance rather than the general frontend rules already covered there.

## Relationship To `frontend-skill`

`frontend-skill` should remain the primary execution guide.

This file exists for the deltas:

- how to frame the task before implementation
- how to distinguish landing pages from app surfaces
- what failure modes the OpenAI article especially warns about
- what to verify after the first draft

## Quickstart Principles

- Start with low reasoning or medium reasoning before escalating.
- Define design constraints up front: section count, type scale, color system, CTA structure.
- Provide a screenshot, mood board, or clear visual direction whenever possible.
- Ground the page in real content, product context, or believable copy.
- Prefer the model to inspect and verify its own UI with browser tools when available.

## Required Upfront Framing

Before implementation, articulate:

- visual thesis: mood, material, energy
- content plan: the narrative arc of the page or surface
- interaction thesis: 2-3 motion ideas that materially change the feel

This prevents the build from collapsing into generic layout fragments.

## Design System Guidance

Establish tokens and roles early:

- color tokens: `background`, `surface`, `primary text`, `muted text`, `accent`
- type roles: `display`, `headline`, `body`, `caption`
- maximum two typefaces unless a stronger system already exists
- one accent color by default

Prefer composition, spacing, cropping, contrast, and scale before adding visual chrome.

## Landing Pages

Default narrative:

1. Hero: identity and promise
2. Support: one concrete feature, offer, or proof point
3. Detail: workflow, product depth, atmosphere, or story
4. Final CTA: conversion or next step

Hero constraints:

- first viewport reads as one composition
- full-bleed or dominant visual plane by default
- brand first, headline second, body third, CTA fourth
- no hero cards, stat strips, logo clouds, pill clusters, or floating dashboards by default
- keep headline readable in one glance
- keep text anchored to a calm area of the image
- maintain strong contrast and clear tap targets over imagery
- fixed headers count against the viewport budget

Above-the-fold budget:

- brand or product
- one headline
- one short supporting sentence
- one CTA group
- one dominant image

Avoid secondary marketing clutter in the first viewport.

## App Surfaces

Default to restrained product UI inspired by calm, dense, readable workspaces:

- strong typography and spacing
- few colors
- minimal chrome
- cards only when the card is the interaction

Organize around:

- primary workspace
- navigation
- secondary context or inspector
- one accent for action or state

Avoid:

- dashboard-card mosaics
- thick borders everywhere
- decorative gradients behind routine product UI
- multiple competing accent colors
- ornamental icons that do not improve scanning

If a panel can become plain layout without losing meaning, remove the card treatment.

## Imagery

Imagery must do narrative work.

- use at least one strong, real-looking image for brands, venues, editorial pages, and lifestyle products
- prefer in-situ photography over abstract gradients or fake 3D objects
- crop or choose images with a stable tonal area for text
- avoid signage, logos, or typographic clutter that competes with the UI
- avoid collages when separate images would communicate more clearly
- decorative texture is not enough for the first viewport

## Copy

- write product language, not design commentary
- let the headline carry the meaning
- keep support copy to one short sentence in most cases
- cut repetition between sections
- keep each section responsible for one of: explain, prove, deepen, convert

If removing roughly 30 percent of the copy improves the page, keep cutting.

## Utility Copy For Product UI

For dashboards, admin tools, and operational surfaces:

- prioritize orientation, status, and action over mood or brand flourish
- begin with the working surface itself: KPIs, filters, tables, charts, task context
- avoid a marketing hero unless explicitly requested
- use headings that describe what the area is or what the user can do there
- remove sections that do not help the operator act, monitor, or decide

## Motion

Motion should create presence and hierarchy, not noise.

Target 2-3 meaningful motions:

- entrance sequence in the hero
- scroll-linked, sticky, or depth effect
- hover, reveal, or layout transition that sharpens affordance

Preferred uses:

- section reveals
- shared layout transitions
- sticky storytelling
- opacity, translate, or scale shifts tied to scroll
- menus, drawers, and modals that feel spatially coherent

Motion quality bar:

- noticeable in a quick recording
- smooth on mobile
- fast and restrained
- consistent across the page
- removed if ornamental only

## Hard Rules

- no cards by default
- no hero cards by default
- no boxed or narrow center-column hero when the brief calls for full bleed
- no more than one dominant idea per section
- no filler copy
- no split-screen hero unless the text side stays calm and unified
- no more than two typefaces without a clear reason
- no more than one accent color unless the product already has a strong system

## Common Failure Modes

- generic SaaS card grid as the first impression
- beautiful image with weak brand presence
- strong headline with no clear action
- busy imagery behind text
- repeated mood statements across sections
- carousel without narrative purpose
- app UI made from stacked cards instead of layout

## Litmus Checks

- Is the brand or product unmistakable in the first screen?
- Is there one strong visual anchor?
- Can the page be understood by scanning headlines only?
- Does each section have one job?
- Are cards actually necessary?
- Does motion improve hierarchy or atmosphere?
- Would the design still feel premium if decorative shadows disappeared?
