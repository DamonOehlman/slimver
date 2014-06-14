var test = require('tape');
var slimver = require('../parser');

test('0.0.0', function(t) {
  t.plan(1);
  t.equal(slimver(t.name), 'P0281474976710655');
});

/*
test('0 as a number encodes as 0.0.0', function(t) {
  t.plan(1);
  t.equal(key(0), 'P0281474976710655');
});

test('0.0.1', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281474976710654');
});

test('0.1.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281474976645119');
});

test('1.0.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281470681743359');
});

test('1 as a number encodes as 1.0.0', function(t) {
  t.plan(1);
  t.equal(key(1), 'P0281470681743359');
});

test('1.0.1', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281470681743358');
});

test('23123.2343.344', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0182162294374055');
});

test('65535.65535.65535', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0000000000000000');
});

test('65535.65535.65536', function(t) {
  t.plan(1);
  t.equal(key(t.name), null);
});

test('2.0.0', function(t) {
  t.plan(1);
  t.equal(key(t.name), 'P0281466386776063');
});

test('2.0.0-beta4', function(t) {
  t.plan(1);
  t.equal(key(t.name), null);
});

test('123123.2343.344', function(t) {
  t.plan(1);
  t.equal(key(t.name), null);
});

test('cannot pack an invalid version', function(t) {
  t.plan(1);
  t.equal(key('asdf'), null);
});

test('cannot pack an empty version', function(t) {
  t.plan(1);
  t.equal(key(''), null);
});

test('cannot pack a null version', function(t) {
  t.plan(1);
  t.equal(key(), null);
});

*/
