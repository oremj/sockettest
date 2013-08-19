var net = require('net');

var client;

var connected = 0;

function connect() {
    connected++;
}

setInterval(function() {
    console.log("%d connected", connected);
}, 2500);

for(var i=0; i < 20; i++) {
    for(var j=0; j < 20; j++) {
        net.connect({port: 9000 + i}, connect);
    }
}

