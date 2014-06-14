var OFFSET = Math.pow(2, 16);

var slimver = module.exports = function(version) {
  var value = null;
  var invalid = false;
  var parts;

  if (typeof version == 'number') {
    version = (version | 0) + '.0.0';
  }

  if (version) {
    // extract the parts and convert to numeric values
    parts = ('' + version).split('.').map(function(part) {
      var val = +part;

      invalid = invalid || isNaN(val) || (val >= OFFSET);
      return val;
    });

    if (! invalid) {
      value = parts[0] * (OFFSET * OFFSET) + parts[1] * OFFSET + parts[2];
    }
  }

  return value;
};

var stringify = slimver.stringify = function(value) {
   var parts = new Uint16Array([
    value / OFFSET / OFFSET,
    value / OFFSET,
    value
  ]);

  return parts[0] + '.' + parts[1] + '.' + parts[2];
};
