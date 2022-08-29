const express = require('express');
const error = require('./middlewares/error');
const root = require('./controller/root');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send();
});

app.use(root);

app.use(error);

app.listen(PORT, () => console.log(`Runnin on port ${PORT}.`));
