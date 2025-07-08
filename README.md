# Minimal Working Example using esbuild

This is a minimal working example to guide future work to port the [binderhub]'s default web browser user interface into a componet based NPM package.

## Goal

Decouple the web browser user interface from the server code to make it easier for teams running their own [binderhub] to customise the single page application that is responsible for the web browser user interface.

Also, to allow third party sides to provide a custom web browser user interface to [binderhub] given limitations with [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

## Bundle

This minimal working example uses [esbuild] to pack all the components into a single JavaScript file.

[esbuild] is a newer free and open-source module bundler for JavaScript. It is less extensive than [webpack] but the configuration is a lot smaller.

In this minimal working example, run

```bash
npm -w binder run build
```

to create `binder.js`.

## Usage without re-bundle

A example is provided in [`demo/index.html`](demo/index.html). Run

```bash
npm start
```

and open http://localhost:8080/ with your favourite web browser.

This is a fast solution for low traffic pages.

## Usage with re-bundle

This is a solution if you are **already** using [webpack], [vite], [esbuild] or another bundler for JavaScript.

You will be able to run

```bash
npm install binder
```

and the components that you use will be included in your final JavaScript.

[binderhub]: https://github.com/jupyterhub/binderhub/
[esbuild]: https://esbuild.github.io/
[vite]: https://vite.dev/
[webpack]: https://webpack.js.org/