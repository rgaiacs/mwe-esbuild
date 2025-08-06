# Minimal Working Example using esbuild

This is a minimal working example to guide future work to port the [binderhub]'s default web browser user interface into a componet based NPM package.

## Goal

Decouple the web browser user interface from the server code to make it easier for teams running their own [binderhub] to customise the single page application that is responsible for the web browser user interface.

Also, to allow third party sides to provide a custom web browser user interface to [binderhub] given limitations with [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).

## Usage

```bash
npm install
npm run build
npm start
```

[binderhub]: https://github.com/jupyterhub/binderhub/
[esbuild]: https://esbuild.github.io/
[vite]: https://vite.dev/
[webpack]: https://webpack.js.org/