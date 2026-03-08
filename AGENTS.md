# AGENTS.md

## Project Overview

This repository contains the landing page for **DriftMonitor**.

DriftMonitor is a developer tool that detects **breaking changes in external APIs** by monitoring endpoint responses and comparing JSON schema snapshots.

This repository only contains the **marketing / landing website**.

The API backend exists in a separate repository.

---

## Tech Stack

This project uses:

* Next.js (App Router)
* TypeScript
* TailwindCSS

The project is designed to be deployed on **Vercel**.

---

## Project Structure

Key directories:

/app
layout.tsx
page.tsx
globals.css

/components
/public

The landing page content is primarily implemented in:

/app/page.tsx

---

## Agent Responsibilities

Agents may help with:

* editing landing page content
* improving layout and styling
* adding components
* improving developer-focused messaging
* implementing simple UI features

Agents should keep the implementation **minimal and clean**.

Avoid adding unnecessary dependencies.

---

## Design Principles

The landing page targets **backend and API developers**.

Design must remain:

* minimal
* technical
* developer-focused

Avoid heavy animations or complex UI frameworks.

Prefer simple Tailwind layouts.

---

## Dependency Installation Limitation

Some agent environments cannot access the npm registry.

In these environments the following commands will fail:

npm install
npm run dev
npm run build
npm run lint

Agents must not rely on executing these commands.

Instead agents should focus on:

* correct file structure
* valid Next.js code
* clean TypeScript
* proper Tailwind usage

Runtime validation will be performed by the user locally.

---

## Commit Guidelines

Agents may commit changes when:

* modifications are limited to source code or configuration
* no breaking structural changes are introduced
* code follows the existing project structure

Avoid large refactors.

Keep commits focused and small.

---

## Goal

Maintain a simple, clear, developer-focused landing page that explains DriftMonitor and helps capture early alpha testers.
