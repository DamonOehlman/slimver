var test = require('tape');
var slimver = require('../');
var versionStrings = require('./data/versionstrings');

test('pack -> decode == original input', function(t) {
  t.plan(1);
  t.deepEqual(
    versionStrings.map(slimver).map(slimver.unpack),
    versionStrings
  );
});
