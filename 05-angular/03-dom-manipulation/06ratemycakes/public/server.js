const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { PORT: port = 3030 } = process.env;
const app = express();
require('./server/config/database');

app.use(express.static(path.join(__dirname, 'dist/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./server/routes'));

app.listen(port, () => console.log(`Express app listening on port ${port}`));
