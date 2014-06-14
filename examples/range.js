var slimver = require('..');

console.log(slimver.range('^1.2.3').map(slimver.unpack));
// --> [ '1.2.3', '1.65535.65535' ]
