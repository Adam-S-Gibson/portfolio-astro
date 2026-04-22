---
title: Condé Nast
publishDate: 2026-04-21 00:00:00
img: ../../assets/conde-nast.webp
img_alt: Screenshot of the Wired homepage
description: |
  Building and scaling the experimentation platform powering A/B tests across Condé Nast's global brands.
tags:
  - TypeScript
  - AWS
  - Terraform
  - MongoDB
  - SQL
---

Joining Condé Nast as a software engineer on the experimentation platform gave me the chance to work on infrastructure that shapes how millions of readers experience brands like Vogue, GQ, and Wired. The platform sits at the intersection of front-end delivery, data engineering, and cloud infrastructure, and that breadth was what made the role so engaging, every week tended to pull me into a different corner of the stack.

A lot of my work focused on the client-side library that powers experimentation across every property. I rebuilt its initialisation path to load through the document head, cutting load time dramatically and removing a long-standing render-blocking bottleneck. Alongside that, I moved the library away from polling-based readiness checks toward an event-driven model, and redesigned the experiment payload so a single experiment could modify any component on the page. These were the kinds of foundational changes that quietly made everything downstream feel faster and more predictable.

Some of the most rewarding work came from chasing down bugs that had stumped other engineers. A feedback loop in production caused by a cookie store reacting to its own writes. A long-standing race condition in a script tag. A tracking bug where a feature ID had been silently standing in for the experiment ID, undermining months of analysis. Rebuilding the tracking schema afterwards gave the analytics team something they could actually trust and query against.

On the data and infrastructure side, I authored materialised views that brought query times down from hours to seconds, built dashboards tracking core web vitals across the experimentation surface, and worked through a MongoDB scaling incident that had started to impact ingress times. I also looked after a broad slice of our Terraform estate, cluster sizing, secret provisioning, version upgrades, and migrated our secrets pipeline out of GitHub into AWS, tuning resources along the way to cut cloud spend.

Outside of feature work, I had the chance to experiment with AI-assisted tooling inside the platform and placed first in the company hackathon with a project exploring how generative models could help organise Condé Nast's enormous editorial image library.

The role stretched me across TypeScript, SQL, Terraform, MongoDB, and AWS in a way few jobs would, and taught me that the most valuable engineering work often hides inside the problems no one else wants to pick up.
