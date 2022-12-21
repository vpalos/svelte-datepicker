This package was forked from `@beyonk/svelte-datepicker` and then cleaned-up and updated to use `svelte-package` to generate importable Svelte components that play nicely in other codebases (such as MeteorJS apps).

## Svelte Datepicker

This is a near total rewrite of the excellent [Svelte Calendar](https://github.com/6eDesign/svelte-calendar). It provides:

-   Calendar
-   Date Picker
-   Date Range Picker
-   Time Selection
-   Better Responsiveness
-   Improved theming
-   Context-aware theming
-   Toolbar to avoid awkward bindings
-   Works in tough situations such as inside iframes

Roadmap:

-   Setup the demo/test page.

## Svelte Kit Support

Due to the way dayjs is packaged, the following configuration is required to get this working with SvelteKit:

```js
const config = {
    kit: {
        target: "#svelte",
        vite: {
            ssr: {
                noExternal: ["dayjs"],
            },
        },
    },
};
```

## Usage

-   install package;
-   import Svelte components from `.../dist` folder;
-   build and run your app.
