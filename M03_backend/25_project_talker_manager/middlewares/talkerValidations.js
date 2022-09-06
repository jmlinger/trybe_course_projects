const genaratesError = require('../utilities/generatesError');
const { dateChecker } = require('../utilities/checkers');
const { readJSON } = require('../utilities/JSONHandler');
const {
  NAME_REQUIRED,
  INVALID_NAME,
  AGE_REQUIRED,
  INVALID_AGE,
  INVALID_WATCHEDAT_FORMAT,
  TALK_REQUIRED,
  INVALID_RATE,
  TALKER_NOT_FOUND,
} = require('../utilities/errorCodes');

const talkersJSON = './talker.json';

const nameValidation = (name) => {
  if (!name) throw genaratesError(NAME_REQUIRED);
  if (name.length <= 3) throw genaratesError(INVALID_NAME);
  return false;
};

const ageValidation = (age) => {
  if (!age) throw genaratesError(AGE_REQUIRED);
  if (age < 18) throw genaratesError(INVALID_AGE);
  return false;
};

const watchedAtValidation = (watchedAt) => {
  if (!watchedAt) {
    throw genaratesError(TALK_REQUIRED);
  }
  if (!dateChecker(watchedAt)) {
    throw genaratesError(INVALID_WATCHEDAT_FORMAT);
  }
  return false;
};

const rateValidation = (rate) => {
  if (rate === undefined) {
    throw genaratesError(TALK_REQUIRED);
  }
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    throw genaratesError(INVALID_RATE);
  }
  return false;
};

const talkValidation = (talk) => {
  if (!talk) {
    throw genaratesError(TALK_REQUIRED);
  }
  const { watchedAt, rate } = talk;
  watchedAtValidation(watchedAt);
  rateValidation(rate);
  return false;
};

const idValidation = (byId) => {
  if ((!byId && byId !== 0) || byId === -1) {
    throw genaratesError(TALKER_NOT_FOUND);
  }
};

const addUpdateValidations = (req, _res, next) => {
  const { name, age, talk } = req.body;
  
  nameValidation(name);
  ageValidation(age);
  talkValidation(talk);
  
  return next();
};

const byIdValidations = async (req, _res, next) => {
  const { id } = req.params;

  const talkers = await readJSON(talkersJSON);

  if (req.method === 'GET') {
    const talkerById = talkers.find((talker) => talker.id === Number(id));
    idValidation(talkerById);
  }
  if (req.method === 'PUT') {
    const talkerIndexById = talkers.findIndex((talker) => talker.id === Number(id));
    idValidation(talkerIndexById);
  }

  return next();
};

module.exports = { addUpdateValidations, byIdValidations };
