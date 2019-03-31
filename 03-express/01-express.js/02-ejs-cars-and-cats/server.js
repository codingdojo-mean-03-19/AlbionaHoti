const express = require('express');
// the require is looking in node_modules/
const bodyParser = require('body-parser');
const path = require('path');

const  port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + "/static"));
app.use('/static', express.static(path.join(__dirname, 'static')));

// middleware
/*
    - Middleware sits in between the client request from the browser
      and the endpoint whatever that's headed

    - it is specific
    - it's going to extract the content from the form that we passed in
      urlencode.. and it will turn it into a nice object for us.

    - 
*/

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/cars', function(request, response) {
  response.render('cars');
});

app.get('/cats', function(req, res) {
  res.render('cats');
});
app.get('/cars/new', function(req, res) {
  res.render('form');
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));


