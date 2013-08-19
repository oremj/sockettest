var net = require('net');

var client;

function connect() {

}

for(var i=0; i < 20; i++) {
    for(var j=0; j < 20; j++) {
        net.connect({port: 9000 + i}, connect);
    }
}
