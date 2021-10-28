const { readJSON } = require('../utilities/JSONHandlers');

const talkersJSON = './talker.json';

// /**
//  * @type {IRouter RequestHandler}
//  */

const readAll = async (_req, res) => {
  const talkers = await readJSON(talkersJSON);
  return res.status(200).json(talkers);
};

const readById = async (req, res, next) => {
  const { id } = req.params;
  const talkers = await readJSON(talkersJSON);
  const talkerById = talkers.find((talker) => talker.id === Number(id)); // o id vem da url como string!

  if (!talkerById) {
    next('Pessoa palestrante não encontrada');
  }

  return res.status(200).json(talkerById);
};

module.exports = { readAll, readById };
