<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [promise-waitfor-es5](#promise-waitfor-es5)
- [Documentation](#documentation)
  - [Examples](#examples)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# promise-waitfor-es5

[![Build Status](https://travis-ci.org/bfred-it/promise-waitfor-es5.svg?branch=master)](https://travis-ci.org/bfred-it/promise-waitfor-es5)
[![Dependencies](https://david-dm.org/bfred-it/promise-waitfor-es5.svg)](https://david-dm.org/bfred-it/promise-waitfor-es5)
[![npm version](http://img.shields.io/npm/v/promise-waitfor-es5.svg)](https://npmjs.org/package/promise-waitfor-es5)

Just run ```npm install promise-waitfor-es5```

# Documentation

```javascript
Promise waitFor(Function condition, interval int=50)
```

## Examples

```javascript
const waitFor = require('promise-waitfor-es5');

waitFor(CONDITION)
.then(...)

waitFor(CONDITION, TEST_INTERVAL)
.then(...)
```

Alternatively, you can use a Promise constructor other than `global.Promise`:

```javascript
const waitFor = require('promise-waitfor-es5').use(YOUR_PROMISE_CONSTRUCTOR_HERE);
```

For now more info check test.js and the index.js for further information.

# Changelog

## 2.0.0-rc1

- Removed the second argument as it was generally confusing and can be easily replace with an extra `.then()` call, eg: `waitFor(() => {...}, () => getSomething()` can be converted to `waitFor() => {...)).then(getSomething)`
- Updated eslint config, eslint is now a dev dependency.

## 2.0.0
- waitFor is now default bound to the native Promise implementation.
- In order to use a custom one you now need to use `const wf = require('promise-waitfor-es5)'.use(MY_IMPL`.
