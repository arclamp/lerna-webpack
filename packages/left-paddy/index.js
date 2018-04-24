var leftPad = require('left-pad');

module.exports = function (s, c) {
  return leftPad(s, 16, c);
}
