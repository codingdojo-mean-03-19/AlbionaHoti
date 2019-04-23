const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
// app.use(express.static(path.join(__dirname, './client/static')));
// app.set('views', path.join(__dirname, './client/view'));
app.set('view engine', 'ejs');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/models/task');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
