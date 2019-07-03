# Sapper Monorepo

This is an example for setting up a Yarn Workspaces and Lerna Monorepo, this example also uses Jest for unit tests and Storybook, all formatting is enforced with Prettier, eslint and Husky pre-commit hooks.

> This is a work in progress and bare bones but it is designed to help others who want to do something similar!

### Dev Notes...

```bash
# Clean install
cd packages

npx degit "sveltejs/sapper-template#rollup" app-web-rollup && cd $_
```

# Using @nedkelly/ namespaced components

Sapper need to use the non-compiled Svelte components ...
https://github.com/sveltejs/sapper-template/blob/master/README.md#using-external-components
