const express = require('express');
const root = require('../controllers/root');
const error = require('../middlewares/error');

const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use(root);

app.use(error);

module.exports = app;
