const { TALKER_NOT_FOUND } = require('../utilities/errorCodes');
const genaratesError = require('../utilities/generatesError');
const { readJSON } = require('../utilities/JSONHandler');

const talkersJSON = './talker.json';

const idValidation = (talkerById) => {
  if (!talkerById) throw genaratesError(TALKER_NOT_FOUND);
};

const readByIdValidations = async (req, _res, next) => {
  const { id } = req.params;
  const talkers = await readJSON(talkersJSON);
  const talkerById = talkers.find((talker) => talker.id === Number(id));
  
  idValidation(talkerById);
  
  return next();
};

module.exports = readByIdValidations;
