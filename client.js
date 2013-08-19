var net = require('net');

var PORTS=20;
var CLIENTS=50000;

var client;

var connected = 0;

function connect() {
    connected++;
}

setInterval(function() {
    console.log("%d connected", connected);
}, 2500);

for(var i=0; i < PORTS; i++) {
    console.log("%d connected", i * CLIENTS);
    for(var j=0; j < CLIENTS; j++) {
        net.connect({port: 9000 + i}, connect);
    }
}

