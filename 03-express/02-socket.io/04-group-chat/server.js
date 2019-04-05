const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

var RedisStore = require("connect-redis")(session);
const port = process.env.PORT || 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  store: new RedisStore({}),
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

  socket.on('new_user', function(data) {
    user = data.user;
    socket.request.session = user;
    console.log('User data: ', user);
    socket.emit('login', { data: user });
  });

  socket.on('new_message', function(data) {
    message = data.message;
    console.log('Message data: ', message);
    io.emit('reg_message', { msg: message, user: socket.request.session.user });
    // socket.emit('reg_message', { msg: message });
  })
})