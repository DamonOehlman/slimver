var test = require('tape');
var slimver = require('../parser');

test('0.0.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [0,0,0]);
});

test('0 as a number encodes as 0.0.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(0).parts, [0,0,0]);
});

test('0.0.1', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [0,0,1]);
});

test('0.1.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [0,1,0]);
});

test('1.0.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [1,0,0]);
});

test('1 as a number encodes as 1.0.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(1).parts, [1,0,0]);
});

test('1.0.1', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [1,0,1]);
});

test('23123.2343.344', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [23123,2343,344]);
});

test('65535.65535.65535', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [65535,65535,65535]);
});

test('65535.65535.65536', function(t) {
  t.plan(1);
  t.equal(slimver(t.name).parts, null);
});

test('2.0.0', function(t) {
  t.plan(1);
  t.deepEqual(slimver(t.name).parts, [2,0,0]);
});

test('2.0.0-beta4', function(t) {
  t.plan(1);
  t.equal(slimver(t.name).parts, null);
});

test('123123.2343.344', function(t) {
  t.plan(1);
  t.equal(slimver(t.name).parts, null);
});

test('cannot pack an invalid version', function(t) {
  t.plan(1);
  t.equal(slimver('asdf').parts, null);
});

test('cannot pack an empty version', function(t) {
  t.plan(1);
  t.equal(slimver('').parts, null);
});

test('cannot pack a null version', function(t) {
  t.plan(1);
  t.equal(slimver().parts, null);
});
