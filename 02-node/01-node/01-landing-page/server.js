var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log('Request.url: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf-8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf-8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf-8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else {
    fs.readFile('404.html', 'utf-8', function(errors, contents){
      response.writeHead(404, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
});

server.listen(3000);
console.log("Running in localhost port: 3000");