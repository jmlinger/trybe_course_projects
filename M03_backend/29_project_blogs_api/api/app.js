const express = require('express');
const root = require('../controllers/root');
const error = require('../middewares/error');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.send();
});

app.use(root);

app.use(error);

module.exports = app;