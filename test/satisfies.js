var test = require('tape');
var satisfies = require('..').satisfies;

test('1.2.3 satisfies ^1.2.3', function(t) {
  t.plan(1);
  t.ok(satisfies('1.2.3', '^1.2.3'));
});

test('1.2.0 does not satisfy ^1.2.3', function(t) {
  t.plan(1);
  t.notOk(satisfies('1.2.0', '^1.2.3'));
});

test('2.0.0 does not satisfy ^1.2.3', function(t) {
  t.plan(1);
  t.notOk(satisfies('2.0.0', '^1.2.3'));
});

test('1.5 satisfies ^1.2.3', function(t) {
  t.plan(1);
  t.ok(satisfies('1.5', '^1.2.3'));
});

test('0.2.3 satisfies ^0.2.3', function(t) {
  t.plan(1);
  t.ok(satisfies('0.2.3', '^0.2.3'));
});

test('0.2.0 does not satisfy ^0.2.3', function(t) {
  t.plan(1);
  t.notOk(satisfies('0.2', '^0.2.3'));
});

test('0.3.0 does not satisfy ^0.2.3', function(t) {
  t.plan(1);
  t.notOk(satisfies('0.3', '^0.2.3'));
});

test('0.2.453 satisfies ^0.2.3', function(t) {
  t.plan(1);
  t.ok(satisfies('0.2.453', '^0.2.3'));
});
