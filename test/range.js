var test = require('tape');
var slim = require('../');

test('range ^1.2.3 = [1.2.3, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^1.2.3');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.2.3');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range ~1.2.3 = [1.2.3, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('~1.2.3');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.2.3');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range ^1 = [1.0.0, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^1');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.0.0');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range ^1.0 = [1.0.0, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^1.0');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.0.0');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range ^0.2.3 = [0.2.3, 0.2.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^0.2.3');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.2.3');
  t.equal(slim.stringify(range[1]), '0.2.65535');
});

test('range ~0.2.3 = [0.2.3, 0.2.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('~0.2.3');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.2.3');
  t.equal(slim.stringify(range[1]), '0.2.65535');
});

test('range ^0.2 = [0.2.0, 0.2.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^0.2');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.2.0');
  t.equal(slim.stringify(range[1]), '0.2.65535');
});

test('range ^0.0.5 = [0.0.5, 0.0.5]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('^0.0.5');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.0.5');
  t.equal(slim.stringify(range[1]), '0.0.5');
});

test('range 1.x.x = [1.0.0, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('1.x.x');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.0.0');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range 1.2.x = [1.2.0, 1.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('1.2.x');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.2.0');
  t.equal(slim.stringify(range[1]), '1.65535.65535');
});

test('range 0.3.x = [0.3.0, 0.3.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('0.3.x');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.3.0');
  t.equal(slim.stringify(range[1]), '0.3.65535');
});

test('range * = [0.0.0, 65535.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('*');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.0.0');
  t.equal(slim.stringify(range[1]), '65535.65535.65535');
});

test('range "any" = [0.0.0, 65535.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('any');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.0.0');
  t.equal(slim.stringify(range[1]), '65535.65535.65535');
});

test('range "" = [0.0.0, 65535.65535.65535]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '0.0.0');
  t.equal(slim.stringify(range[1]), '65535.65535.65535');
});

test('range 1.2.3 = [1.2.3, 1.2.3]', function(t) {
  var range;

  t.plan(3);
  range = slim.range('1.2.3');
  t.ok(Array.isArray(range));
  t.equal(slim.stringify(range[0]), '1.2.3');
  t.equal(slim.stringify(range[1]), '1.2.3');
});
