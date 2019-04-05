const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get('/', function(req, res){
  res.render('index');
});

const server = app.listen(port, () => console.log(`Express server listening on port ${port}!`));
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('posting_form', function(data) {

    socket.emit("updated_message", {
      msg: "Name: " + data.name + ", Location: " + data.location + ", Favorite Language: " + data.favorite_lang + ", comment: " + data.comment + "!!"
    });
  });  
  var random_number = Math.floor(Math.random() * 1000) + 1;
  socket.emit("random_number", {
    random: random_number
  })
})  
