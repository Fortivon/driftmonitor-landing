# Agent Development Rules

This repository contains a Next.js landing page project.

Agents MUST verify the project builds and runs successfully before committing any changes.

## Mandatory validation steps before commit

Agents must run the following commands:

npm install

npm run dev

npm run lint

If a build script exists, also run:

npm run build

## Requirements

The agent MUST ensure:

* dependencies install without errors
* Next.js starts successfully
* there are no runtime crashes
* lint passes without blocking errors

## If a command fails

If any command fails:

* the agent MUST fix the issue
* the agent MUST NOT commit broken code
* the agent MUST retry the validation commands

## Environment constraints

If the execution environment blocks dependency installation (for example registry restrictions), the agent MUST:

* detect the limitation
* explain that validation cannot be completed
* avoid committing changes that cannot be verified

## Commit policy

Agents are NOT allowed to commit code that has not passed the validation steps.

Commits must only happen after the project is confirmed to run successfully.

## Goal

The repository must always remain in a runnable state.

## Mandatory Validation Policy

Before committing any code, the agent MUST successfully run:

npm install
npm run lint
npm run build
npm run dev (must start without runtime errors)

The agent must confirm that these commands execute successfully.

## Environment Limitations

If the environment blocks dependency installation (for example npm registry restrictions, 403 errors, or offline environments):

The agent MUST NOT commit code.

Instead the agent must:

* stop the task
* explain that validation could not be completed
* ask the user to run the commands locally

## Commit Permission

Agents are strictly forbidden from committing code if validation steps cannot be executed.

Commits are only allowed when:

* dependencies install successfully
* lint passes
* the project builds
* the application starts correctly

## Repository Integrity Rule

The repository must always remain in a runnable state.

Agents must prioritize repository stability over task completion.

If validation cannot be performed, the agent must refuse to commit changes.

## Dependency Installation Limitations

Some agent environments cannot access the npm registry and therefore cannot execute:

npm install
npm run lint
npm run build
npm run dev

In these environments the agent must NOT attempt to run npm commands.

Instead the agent must:

* perform static code validation only
* ensure file structure is correct
* ensure configuration files are valid
* ensure TypeScript and Next.js code structure is correct

The agent must assume dependency installation will be performed locally by the user.

## Commit Behavior

If the environment blocks npm installation, the agent may still commit changes provided that:

* the changes are configuration or source code only
* no dependency changes are introduced
* the project structure remains valid

The agent must clearly inform the user that runtime validation must be executed locally.
