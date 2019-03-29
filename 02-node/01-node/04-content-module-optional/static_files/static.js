const fs = require('fs');
const path = require('path');

module.exports = function (request, response) {
  fs.access('.', request.url, (err) => {
    if (!err) {
      if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
          response.write(contents);
          response.end();
        });
      } else {
        fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url), function (errors, contents) {
          response.write(contents);
          response.end();
        });
      }
    } else {
      response.end('File not Found!!!');
    }
  });
}