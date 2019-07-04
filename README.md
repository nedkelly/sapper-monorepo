# Sapper Monorepo

This is an example for setting up a [Yarn Workspaces][yw] and [Lerna][la] Monorepo using [Sapper][sp] and [Svelte][sv], this example also uses [Jest][jt] for unit tests and [Storybook][sb], all formatting is enforced with [Prettier][pr], [eslint][el] and [Husky][hy] pre-commit hooks.

---

_**This is a work in progress and bare bones but it is designed to help others who want to do something similar!**_

---

## Commands

### Storybook

Run from the root dir and your stories throughout the project will be parsed and built.

```bash
yarn stories
# or npm run stories
```

### Jest

Run from the root dir and Jest tests will be run across the entire project.

```bash
yarn test
# or npm run test
```

### Lerna and Workspace

To run lerna bootstrab

```bash
yarn lb
# npm run lb
```

For all other Lerna and Yarn Workspaces activities see the docs:

- [Yarn Workspaces][yw]
- [Lerna][la]

### Create Packages

Proxy commands for quickly creating Svelte or Sapper packages eg:

```bash
yarn make --component some-ui-element --component another-ui-element --sapper some-website
## or npm run make ...
```

This will produce a tree like by running `npx degit sveltejs/template` and `npx degit sveltejs/sapper-template#rollup`
Package names are then updated to reflect the path name given, the rest is up to you. _NB: no option for webpack yet because I don't personally need it._ You can also just make a single component or app...

```
.
├── ...
├── packages
│   ├── app-some-website
│   │   └── ...
│   ├── component-another-ui-component
│   │   └── ...
│   ├── component-some-ui-component
│   │   └── ...
│   └── ...
└── ...
```

You should run `yarn` or `npm i` after you've done this to ensure you packages are wired up properly with Yarn Workspaces and Lerna.

### Fix Stuff...

Run prettier on large portions of the project, this is good for getting started or if you are creating packages from templates using the `make` commands.

```bash
# Just check what will be fixed but don't write
yarn fix:check
# or npm run fix:check

# Write fixes in all files found to have issues
yarn fix:write
# of npm run fix:write
```

## Building

This is as standard Sapper or Svelte builds and dev tasks.

```bash
cd packages/<package-name>
# then run the scripts as per the package
```

## Notes:

### Using `@namespaced/some-name` components

Sapper needs to use the non-compiled Svelte components ...
https://github.com/sveltejs/sapper-template/blob/master/README.md#using-external-components

In this instance I've opted for updating the `rollup.config.js` because Lerna needs to be able to handle dependacies across packages, moving the namespaced dependencies to devDependencies wont work as expected. The downside to this is that the config needs to be updated when you add new apps.

[yw]: https://yarnpkg.com/lang/en/docs/workspaces/
[la]: https://lerna.js.org/
[jt]: https://jestjs.io/
[sb]: https://storybook.js.org/
[pr]: https://prettier.io/
[el]: https://eslint.org/
[hy]: https://github.com/typicode/husky
[sv]: https://svelte.dev/
[sp]: https://sapper.svelte.dev/
