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

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.render('index');
});


app.get('/cats', function(req, res) {
  res.render('cats');
});

app.post('/cat_sleepy', function(req, res) {
  cat_sleepy = {
    favorite_food: "meat",
    age: 5,
    sleeping_spots: ['in working tables', 'in in a car']  
  }
  res.render('sleepy', {cat_sleepy: cat_sleepy});
});


app.post('/cuddles', function(req, res) {
  cuddles = {
    favorite_food: "spaghetti",
    age: 3,
    sleeping_spots: ['under bed', 'in a sunbeam']
  }
  res.render('cuddles', { cuddles: cuddles });
});

app.post('/cat_thinking', function(req, res) {
  cat_thinking = {
    favorite_food: "pizza",
    age: 1,
    sleeping_spots: ['in bed', 'in in a car']
  }
  res.render('cat_thinking', { cat_thinking: cat_thinking });
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));


