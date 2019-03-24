import express from 'express';
import config from './config';
const app = express();

/*
  What is babel?
  - Our server side will eventually need to render 
    react application
  - we are using jsx in our react app - 
    We need the server side to understand the jsx syntax.
    We need babel to understand the import syntax
  - With babel we can use import syntanx
    - we need babel to make node understand the 'import' syntax
*/
app.use(express.static('public'));

// 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {answer: 42} );
});

app.listen(config.port, function listenHandler() {
  console.log(`Running on ${config.port}`);
});

