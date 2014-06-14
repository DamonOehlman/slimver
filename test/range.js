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
