const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

require('./server/config/database');
const { PORT: port = 8000 } = process.env;

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
