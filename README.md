

```bash
# cd into ./packages
npx degit "sveltejs/sapper-template#rollup" another-app && cd $_ && rm -f cypress.json && rm -rf ./cypress && rm -f appveyor.yml

# Clean install
npx degit "sveltejs/sapper-template#rollup" app-web-rollup && cd $_

# this will install a new sapper app and remove unwanted files and folders

```

# Using @nedkelly/ namespaced components

Sapper need to use the non-compiled Svelte components ...
https://github.com/sveltejs/sapper-template/blob/master/README.md#using-external-components
