// Referência em organização de pastas: Eric Alfinito Kreis, turma 12. Repositório: https://github.com/tryber/sd-012-project-talker-manager/pull/90/files.

const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./routers/talkerRouter');
const loginRouter = require('./routers/loginRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(loginRouter);

app.use(talkerRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
