var leftPaddy = require('left-paddy');
var telegraphy = require('telegraphy');

console.log(leftPaddy('yay', '!'));

var obj = telegraph({});
obj.on('boop', function () {
  console.log('booped!');
});

obj.trigger('boop');
