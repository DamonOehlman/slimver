var test = require('tape');
var slimver = require('../parser');

test('0.0.0', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 0);
});

test('0 as a number encodes as 0.0.0', function(t) {
  t.plan(1);
  t.equal(+slimver(0), 0);
});

test('0.0.1', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 1);
});

test('0.1.0', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 65536);
});

test('1.0.0', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 4294967296);
});

test('1 as a number encodes as 1.0.0', function(t) {
  t.plan(1);
  t.equal(+slimver(1), 4294967296);
});

test('1.0.1', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 4294967297);
});

test('23123.2343.344', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 99312682336600);
});

test('65535.65535.65535', function(t) {
  t.plan(1);
  t.equal(+slimver(t.name), 281474976710655);
});

test('65535.65535.65536', function(t) {
  t.plan(1);
  t.throws(function() {
    +slimver(t.name);
  });
});
