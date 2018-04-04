# for-each-key [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Call a function with key and value for each object property.

## Install

```
npm i for-each-key --save
```

## How to use?

```js
const forEachKey = require('for-each-key');

forEachKey(console.log, {
    hello: 'world'
});
// output
'hello world'
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `for-each-key` could be used with:

```js
var forEachKey = require('for-each-key/legacy');
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/for-each-key.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/for-each-key/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/for-each-key.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/for-each-key "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/for-each-key  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/for-each-key "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

