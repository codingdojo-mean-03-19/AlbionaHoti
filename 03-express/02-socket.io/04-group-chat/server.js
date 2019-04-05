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

var users=[];
var messages=[];

function is_user(user) {
  const users_length = users.length;
  for(var i=0; i<users_length; i++) {
    if(user == users[i]){
      return true;
    }
  }
  return false;
}

io.on('connection', function(socket) {
  socket.emit('greeting', { msg: 'Greeting, from server Node, brought to you by Sockets! - Server'});

  socket.on('new_user', function(data) {
    user = data.user;
    socket.request.session = user;
    const existing_user = is_user(user);
    const event = existing_user ?  'user_new': 'login';
    const data1 = existing_user ? 
      { error: "This user already exist - Register here:" } :
      { current_user: data.user, messages: messages} ;

    if(!existing_user) {
      users.push(data.user);
    }

    console.log('User data: ', user);
    socket.emit(event, data1);
  });

  socket.on('new_message', function(data) {
    message = data.message;
    messages.push({ name: data.user, message: data.message });
    console.log('Message data: ', message);
    io.emit('reg_message', { msg: message, user: socket.request.session.user });
    // socket.emit('reg_message', { msg: message });
  })
})