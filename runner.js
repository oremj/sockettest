var child_process = require('child_process');

var port;
for(var i=0; i < 20; i++) {
    port = 9000 + i; 
    child_process.fork('./server.js', [port]);
}
