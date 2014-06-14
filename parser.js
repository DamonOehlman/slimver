var packer = require('./packer');

function Slimver(version) {
  var parts;
  var invalid = (! version);

  if (! (this instanceof Slimver)) {
    return new Slimver(version);
  }

  if (typeof version == 'number') {
    version = (version | 0) + '.0.0';
  }

  if (version) {
    // extract the parts and convert to numeric values
    parts = new Uint16Array(('' + version).split('.').map(function(part) {
      var val = +part;

      invalid = invalid || isNaN(val) || (val >= MAXVAL);
      return val;
    }));
  }

  this.parts = (! invalid) && parts;
}

var prot = Slimver.prototype;
module.exports = Slimver;

prot.valueOf = function() {
  return this.parts && packer(this.parts);
};
