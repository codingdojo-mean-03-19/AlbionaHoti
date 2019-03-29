const http = require('http');
const fs = require('fs');

/* 
    The file below is the file you need to create for this assignment
    NOTE!!! - The '.' in the filepath below just refers to the location
    of the current file, in this case the file is
    app.js. Thus the path: './static.js' just refers to a file
    called static.js

*/

const static_contents = require('./static_files/static');

// creating a server
server = http.createServer(function(request, response){
  static_contents(request, response);
});

server.listen(3000);
console.log("Running in localhost at port 3000");