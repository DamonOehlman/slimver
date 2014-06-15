var test = require('tape');
var slimver = require('../');

test('0.0.0', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 0);
});

test('0.0.1', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 1);
});

test('0.1.0', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 65536);
});

test('1.0.0', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 4294967296);
});

test('1 as a string encodes as 1.0.0', function(t) {
  t.plan(1);
  t.equal(slimver('1'), 4294967296);
});

test('1.0 as a string encodes as 1.0.0', function(t) {
  t.plan(1);
  t.equal(slimver('1.0'), 4294967296);
});

test('1.0.1', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 4294967297);
});

test('23123.2343.344', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 99312682336600);
});

test('65535.65535.65535', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 281474976710655);
});

test('65535.65535.65536', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), null);
});

test('2.0.0', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 8589934592);
});

test('0 (numeric) is passed through', function(t) {
  t.plan(1);
  t.equal(slimver(0), 0);
});

test('1 (numeric) is passed through', function(t) {
  t.plan(1);
  t.equal(slimver(1), 1);
});

test('parsing twice yields the same value', function(t) {
  var val;

  t.plan(2);
  t.equal(val = slimver('1.0.0'), 4294967296);
  t.equal(slimver(val), 4294967296);
});

test('2.0.0-beta4', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), null);
});

test('123123.2343.344', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), null);
});

test('cannot pack an invalid version', function(t) {
  t.plan(1);
  t.equal(slimver('asdf'), null);
});

test('cannot pack an empty version', function(t) {
  t.plan(1);
  t.equal(slimver(''), null);
});

test('cannot pack a null version', function(t) {
  t.plan(1);
  t.equal(slimver(), null);
});
