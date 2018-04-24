var leftPaddy = require('left-paddy');
var telegraphy = require('telegraphy');

console.log(leftPaddy('yay', '!'));

var obj = telegraphy({});
obj.on('boop', function () {
  console.log('booped!');
});

obj.emit('boop');
