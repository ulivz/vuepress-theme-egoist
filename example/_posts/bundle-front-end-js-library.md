---
title: Elegantly package front-end JavaScript libraries
date: 2016-11-16 15:55:48
tags:
  - javascript
  - bundle
  - bili
---

Packaging JS libraries are not as complex as packaging Web apps, but they can be made simpler.

## <span>Common Use Cases</span>

A JS library generally requires a CommonJS version, which does not package modules in node_modules. And a UMD version for direct use in the browser, it will package the modules in node_modules.

Using [bili](https://github.com/universe-denpa/bili) everything will be simple and simple enough to require only one command:

```bash
Bili --format cjs --format umd --module-name MyModule
```

This command means to package `./src/index.js` to the `./dist` directory and convert it to files in the `CommonJS` and `UMD` formats, where the module name in the `UMD` format is set to ` MyModule`, so that it can be referenced in the browser via the global variable `MyModule`.

If you need a compressed UMD format file at the same time, you can get a `.min.js` and its `sourcemap` file by adding the `--compress` parameter.

## <span>ES2015</span>

One of the goals of packaging is to compile ES next to ES5 using a converter like Babel. By default, bili uses [buble](https://buble.surge.sh/guide) to convert JavaScript code, which is much lighter than Babel.

You can of course use babel to compile code in bili, which requires the bili configuration file `bili.config.js`:

```js
Module.exports = {
  jsCompiler: require('rollup-plugin-babel')({
    Presets: ['preset']
  })
}
```

Bili is based on [Rollup] (https://github.com/rollup/rollup), so the relevant Rollup plugin can be used to compile JS code.

## <span>Buble</span>

As I said before, by default we use `buble`, you can change the buble configuration parameters in the configuration file:

```js
Module.exports = {
  Buble: {
    objectAssign: 'objectAssign'
  }
}
```

It's worth mentioning that buble doesn't support `async/await` and can't convert `generator` to ES5 code, so we keep the generator code and use [async-to-gen] (https://github.com/leebyron /async-to-gen) Convert `async/await` to `generator`. If you use both, please consider browser compatibility, or replace it with babel to compile.

## <span>Watch mode</span>

Compiling the code without the `watch` mode during development can be very painful. To open the bili watch mode, you can add the `--watch` parameter directly.

## <span>More information</span>

Bili also has some built-in Rollup plugins. For more information, please refer to bili's [GitHub Wiki] (https://github.com/universe-denpa/bili/wiki) page.
