var packer = require('./packer');
var MAXVAL = Math.pow(2, 16);

function Slimver(version) {
  var parts;
  var invalid;

  if (! (this instanceof Slimver)) {
    return new Slimver(version);
  }

  if (typeof version == 'number') {
    version = (version | 0) + '.0.0';
  }

  invalid = (! version);
  if (version) {
    // extract the parts and convert to numeric values
    parts = ('' + version).split('.').map(function(part) {
      var val = +part;

      invalid = invalid || isNaN(val) || (val >= MAXVAL);
      return val;
    });
  }

  this.parts = invalid ? null : parts;
}

var prot = Slimver.prototype;
module.exports = Slimver;

prot.valueOf = function() {
  return this.parts && packer(this.parts);
};
