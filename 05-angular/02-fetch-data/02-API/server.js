const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static( __dirname + '/public/dist/public' ));

app.use(bodyParser.json());

// require('./server/config/mongoose');
// require('./server/models/task');
// require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));