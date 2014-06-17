# slimver

An experimental implementation for working with
[slimver](https://github.com/DamonOehlman/slimver-spec).


[![NPM](https://nodei.co/npm/slimver.png)](https://nodei.co/npm/slimver/)


[![browser support](https://ci.testling.com/DamonOehlman/slimver.png)](https://ci.testling.com/DamonOehlman/slimver)

[![unstable](https://img.shields.io/badge/stability-unstable-yellowgreen.svg)](https://github.com/dominictarr/stability#unstable) [![Build Status](https://img.shields.io/travis/DamonOehlman/slimver.svg?branch=master)](https://travis-ci.org/DamonOehlman/slimver) 

## Reference

### slimver(version)

Pack a `MAJOR.MINOR.PATCH` version string into a single numeric value.

```js
var slimver = require('slimver');

console.log(slimver('1.0.0'));
// --> 4294967296

```

### slimver.range(expression)

Return a 2-element array for [low, high] range of the version values that
will satisfy the expression.

```js
var slimver = require('slimver');

console.log(slimver.range('^1.2.3').map(slimver.unpack));
// --> [ '1.2.3', '1.65535.65535' ]

```

### slimver.satisfies(version, rangeExpr)

Return true if the input version string satisfies the provided range
expression.

```js
var slimver = require('slimver');

console.log(slimver.satisfies('1.2.3', '^1.2.3'));
// --> true

console.log(slimver.satisfies('1.2.0', '^1.2.3'));
// --> false

console.log(slimver.satisfies('2.0.0', '^1.2.3'));
// --> false

console.log(slimver.satisfies('1.8', '^1.2.3'));
// --> true

```

### slimver.unpack(value)

Convert a slimver numeric value back to it's `MAJOR.MINOR.PATCH` string format.

```js
var slimver = require('slimver');

console.log(slimver.unpack(4294967296));
// --> 1.0.0

```

## License(s)

### MIT

Copyright (c) 2014 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
