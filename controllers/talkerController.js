const { readJSON } = require('../utilities/JSONHandler');

const talkersJSON = './talker.json';

const readAll = async (_req, res) => {
  const talkers = await readJSON(talkersJSON);
  return res.status(200).json(talkers);
};

const readById = async (req, res, next) => {
  const { id } = req.params;
  const talkers = await readJSON(talkersJSON);
  const talkerById = talkers.find((talker) => talker.id === Number(id)); // o id vem da url como string!
  
  if (!talkerById) {
   return next('Pessoa palestrante não encontrada');
  }
  
  return res.status(200).json(talkerById);
};

// /** @type { import('express').RequestHandler } */

module.exports = { readAll, readById };
