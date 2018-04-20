# @jpctrade/prettier-config

## Installation

Install `@jpctrade/prettier-config` via npm.

```
$ npm install --save-dev git+https://git@github.com/jpctrade/prettier-config.git"
```

## Usage

Import config from `@jpctrade/prettier-config` in your `prettier.config.js`

```js
module.exports = require('@jpctrade/prettier-config');
```

Customizing use-case:

```js
const defaultOptions = require('@jpctrade/prettier-config');

module.exports = Object.assign({}, defaultOptions, {
    semi: false,
    overrides: [
        {
            files: '*.test.js',
            options: {
                semi: true,
            },
        },
    ],
});
```

## Developing

The definition of prettier options is in `index.js`. You can send PR to edit it.

**Every option which is different to default should have its reasons.**
