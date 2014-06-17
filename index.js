var OFFSET = Math.pow(2, 16);
var MAXSEG = OFFSET - 1;
var MAXVER = Math.pow(OFFSET, 3) - 1;

/**
  # slimver

  An experimental implementation for working with
  [slimver](https://github.com/DamonOehlman/slimver-spec).

  ## Reference

**/

/**
  ### slimver(version)

  Pack a `MAJOR.MINOR.PATCH` version string into a single numeric value.

  <<< examples/pack.js

**/
function slim(version) {
  var parts;

  if (typeof version == 'number') {
    return version;
  }

  parts = Array.isArray(version) ? version : split(version);
  return parts ?
    parts[0] * (OFFSET * OFFSET) + parts[1] * OFFSET + parts[2] :
    null;
}

function compatibleWith(version) {
  var parts = split(version);

  if (! parts) {
    return null;
  }

  return [slim(parts), slim([parts[0], MAXSEG, MAXSEG])];
}

function rangeFromPattern(parts) {
  var low = [].concat(parts);
  var high = [].concat(parts);

  if (! parts) {
    return null;
  }

  while (low.length < 3) {
    low.push(0);
  }

  while (high.length < 3) {
    high.push(MAXSEG);
  }

  return [slim(low), slim(high)];
}

function invert(value) {
  return value === null ? null : MAXVER - value;
}

/**
  ### slimver.range(expression)

  Return a 2-element array for [low, high] range of the version values that
  will satisfy the expression.

  <<< examples/range.js

**/
function range(expression) {
  var firstChar;
  var parts;
  var val;

  if (expression === 'any' || expression == '' || expression === '*') {
    return [0, MAXVER];
  }

  expression = ('' + expression).trim();
  firstChar = expression.charAt(0);

  if (firstChar === '^' || firstChar === '~') {
    return compatibleWith(expression.slice(1));
  }

  // split the string
  parts = expression.split('.').filter(function(part) {
    return !isNaN(+part);
  });

  // if we have exactly 3 parts, then range from and two the low to high value
  if (parts.length === 3) {
    val = slim(parts.join('.'));
    return [val, val];
  }

  return rangeFromPattern(parts);
}

/**
  ### slimver.satisfies(version, rangeExpr)

  Return true if the input version string satisfies the provided range
  expression.

  <<< examples/satisfies.js

**/
function satisfies(version, rangeExpr) {
  var bounds = range(rangeExpr);
  var v = slim(version);

  return v !== null && bounds && v >= bounds[0] && v <= bounds[1];
}

function split(version) {
  var invalid = false;
  var parts;

  if (typeof version == 'number') {
    version = (version | 0) + '.0.0';
  }

  if (! version) {
    return null;
  }

  // extract the parts and convert to numeric values
  parts = ('' + version).split('.').map(function(part) {
    var val = +part;

    invalid = invalid || isNaN(val) || (val >= OFFSET);
    return val;
  });

  // ensure we have enough parts
  while (parts.length < 3) {
    parts.push(0);
  }

  return invalid ? null : parts;
}

/**
  ### slimver.unpack(value)

  Convert a slimver numeric value back to it's `MAJOR.MINOR.PATCH` string format.

  <<< examples/unpack.js

**/
function unpack(value) {
  var parts;

  if (typeof value != 'number') {
    return null;
  }

  parts = new Uint16Array([
    value / OFFSET / OFFSET,
    value / OFFSET,
    value
  ]);

  return parts[0] + '.' + parts[1] + '.' + parts[2];
}

/* exports */

slim.invert = invert;
slim.range = range;
slim.satisfies = satisfies;
slim.unpack = slim.stringify = unpack;

module.exports = slim;
