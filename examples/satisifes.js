var slimver = require('..');

console.log(slimver.satisfies('1.2.3', '^1.2.3'));
// --> true

console.log(slimver.satisfies('1.2.0', '^1.2.3'));
// --> false

console.log(slimver.satisfies('2.0.0', '^1.2.3'));
// --> false

console.log(slimver.satisfies('1.8', '^1.2.3'));
// --> true
