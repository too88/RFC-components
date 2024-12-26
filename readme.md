# TymeX Interview Frontend

The source of components and pages for https://tymex-interview.web.app TymeX Interview Frontend site

### Branches

#### Permanent branches

- `master`
  - The default branch of this repository.
  - Expected to be synced with https://tymex-interview.web.app production release.
  - **Your should be start all your work from this branch.**

#### Temporary branches

- `develop`
  - The branch contains change to be released at specified date in the future.
  - **Your working branch should be merged to this.**
- `feature/[task-number]-*`
  - The working branch with new components, pages or features
  - e.g. `feature/123-search`, `feature/124-modal`
- `chore/[task-number]-*`
  - This working branch with upgrade/fix of existing things.
  - e.g. `chore/125-upgrade-react-query-version-up`
- `hotfix/[task-number]-*`
  - This working branch with any hot-fixes.
  - e.g. `hotfix/api-endpoint-bug`

# Getting Started

To run the project locally:

```sh
yarn install
yarn dev
```

## Technology

* React 18
* Typescript
* SCSS
* Ant-Design

## Policy

* Atomic design
* ABEM https://css-trick.com/abem-useful-adaptation-bem/

## Node.js

* Use latest LTS version (v.20.xx.xx)

## Component Making

## STEP1: Generate base code from scaffold

```bash
# Create atom component
npm run gen:component:atom atom-component

# Create molecule component
npm run gen:component:molecule molecule-component

# Create organism component
npm run gen:component:organism organism-component
```

- The name of component in `yarn gen:component:*` should be lowercased.
  - No `_`, `-` allowed.

## STEP2: Open Storybook

Storybook is a component catalog. Please implement component on the environment

```bash
npm run storybook
```

## STEP3: Modify index.tsx, index.scss & index.stories.tsx generated at STEP1

### Demo link

https://tymex-interview.web.app



