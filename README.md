# monorepo

**publishing** `npm run publish --access public` (run lerna publish)

**bootstrap** `npm run bootstrap --hoist`

**remove node_modules** `npm run clean`

How to setup storybook? Use it or other?

`bootstrap --hoist` does't work with current instalation of storybook (in separate folder from components and linked them as npm module)

`bootstrap` work fine with current storybook instalation

https://github.com/lerna/lerna/issues/1367

lerna internaly use https://docs.npmjs.com/cli/link for linking npm packages


for uikit we can use some boilerplate like - https://github.com/insin/nwb#react-components-and-libraries


**budlers concepts:**

https://webpack.js.org/concepts/

As i understand from https://github.com/webpack/webpack/issues/2933 we can't use treeshaking with webpack.
We can use rollup for bundling libraries

As i thought and according to https://stackoverflow.com/questions/41289200/output-an-es-module-using-webpack
We may not use webpack for library packaging. We can transform with babel.

_From the other side if you are publishing library you can provide both CommonJS (umd) and ES targets,
thanks to "module" key in package. json. Actually you do not need webpack to publish ES target,
all you need to do is to run babel on every file to get it to es2015 standart, for example if you 
are using react you can run babel with just "react" preset. If your source is already ES 2015 without
extra features you can point module straight to your src/index.js:_ 

Seems that https://github.com/rollup/rollup/wiki/pkg.module is better for es6 libraries

https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c

how to use best of booth commonJs and es modules?

https://github.com/rollup/rollup/wiki/pkg.module

**eslint rules should be described at top level?**

**flow**

now i am using .flow shadow files

how to export flow types from modules?

https://github.com/facebook/flow/issues/1996

proposal
https://github.com/facebook/flow/pull/6504#issuecomment-399494738


https://javascriptplayground.com/npm-flowjs-javascript/