var OFFSET = Math.pow(2, 16);
var MAXSEG = OFFSET - 1;
var MAXVER = Math.pow(OFFSET, 3) - 1;

/**
  # slimver

  An experimental implementation for working with
  [slimver](https://github.com/DamonOehlman/slimver-spec).

  ## Example Usage

  <<< examples/encode.js

**/

function slim(version) {
  var parts = Array.isArray(version) ? version : split(version);

  return parts ?
    parts[0] * (OFFSET * OFFSET) + parts[1] * OFFSET + parts[2] :
    null;
}

function compatibleWith(version) {
  var parts = split(version);
  var low;

  if (! parts) {
    return null;
  }

  // low bounds is always the version
  low = slim(parts);

  // handle the ^0.0.x case
  if (parts[0] === 0 && parts[1] === 0) {
    return [ low, low ];
  }
  // handle the ^0.x.x case
  else if (parts[0] === 0) {
    return [ low, slim([parts[0], parts[1], MAXSEG])];
  }

  return [low, slim([parts[0], MAXSEG, MAXSEG])];
}

function invert(value) {
  return value === null ? null : MAXVER - value;
}

function range(expression) {
  var firstChar;

  expression = ('' + expression).trim();
  firstChar = expression.charAt(0);

  if (firstChar === '^' || firstChar === '~') {
    return compatibleWith(expression.slice(1));
  }

  return [];
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

  return invalid ? null : parts;
}

function stringify(value) {
   var parts = new Uint16Array([
    value / OFFSET / OFFSET,
    value / OFFSET,
    value
  ]);

  return parts[0] + '.' + parts[1] + '.' + parts[2];
}

/* exports */

slim.invert = invert;
slim.stringify = stringify;
slim.range = range;

module.exports = slim;
