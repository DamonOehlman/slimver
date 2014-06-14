var OFFSET = require('./offset');

module.exports = function(parts) {
  return parts[0] * (OFFSET * OFFSET) + parts[1] * OFFSET + parts[2];
};
