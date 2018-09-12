# monorepo

**publishing** `npm run publish --access public` (run lerna publish)

**bootstrap** `npm run bootstrap --hoist`

**remove node_modules** `npm run clean`

How to setup storybook? Use it or other?

`bootstrap --hoist` does't work with current instalation of storybook (in separate folder from components and linked them as npm module)

`bootstrap` work fine with current storybook instalation

https://github.com/lerna/lerna/issues/1367

lerna internaly use https://docs.npmjs.com/cli/link for linking npm packages