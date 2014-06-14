var test = require('tape');
var slimver = require('../');
var versionStrings = require('./data/versionstrings');

test('encode -> decode == original input', function(t) {
  t.plan(1);
  t.deepEqual(
    versionStrings.map(slimver).map(slimver.stringify),
    versionStrings
  );
});
