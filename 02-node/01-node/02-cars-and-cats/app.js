var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  if(request.url === '/cars'){
    fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cats'){
    fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/cars/new'){
    fs.readFile('./views/new_car.html', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheet/style.css', 'utf8', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/1.jpeg'){
    fs.readFile('./images/1.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/2.jpeg'){
    fs.readFile('./images/2.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/3.jpg'){
    fs.readFile('./images/3.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/4.jpeg'){
    fs.readFile('./images/4.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/5.jpeg'){
    fs.readFile('./images/5.jpeg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/6.jpg'){
    fs.readFile('./images/6.jpg', function(errors, contents){
      response.writeHead(200, {'Content-Type': 'image/jpg'});
      response.write(contents);
      response.end();
    });
  }

  else {
    fs.readFile('./views/404.html', 'utf8', function(errors, contents){
      response.writeHead(404, {'Content-Type': 'text/html'}); // send data about response
      response.write(contents);
      response.end();
    });
  }
})

server.listen(3000);

console.log("Running in localhost at port 3000");