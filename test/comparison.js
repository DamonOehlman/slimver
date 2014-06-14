var test = require('tape');
var slimver = require('../');
var versionStrings = require('./data/versionstrings');
var versions;

test('parse versions', function(t) {
  t.plan(2);

  // create versions
  versions = versionStrings.map(slimver);

  t.equal(versions.length, versionStrings.length);
  t.equal(versions.filter(function(version) {
    return version !== null;
  }).length, versions.length);
});

test('equality tests', function(t) {
  // create comparators
  var comparators = versionStrings.map(slimver);

  t.plan(versions.length);
  versions.forEach(function(version, idx) {
    t.ok(version === comparators[idx]);
  });
});

test('a < b', function(t) {
  t.plan(versions.length - 1);
  for (var ii = 1; ii < versions.length; ii++) {
    t.ok(versions[ii - 1] < versions[ii]);
  }
});

test('b > a', function(t) {
  t.plan(versions.length - 1);
  for (var ii = 1; ii < versions.length; ii++) {
    t.ok(versions[ii] > versions[ii-1]);
  }
});
