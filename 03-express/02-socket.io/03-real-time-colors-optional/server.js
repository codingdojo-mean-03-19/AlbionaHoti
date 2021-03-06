const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

var counter=0;

io.on('connection', function(socket) {
  socket.emit('greeting', { msg: 'Greeting, from server Node, brought to you by Sockets! - Server'});

  socket.on('green', function(data) {
    color = data.color;
    // socket.emit('color', { data: color });

    io.emit('color', { data: color });
  })
  socket.on('blue', function(data) {
    color = data.color;
    // socket.emit('color', { data: color });

    io.emit('color', { data: color });
  })
  socket.on('yellow', function(data) {
    color = data.color;
    // socket.emit('color', { data: color });

    io.emit('color', { data: color });
  })

})