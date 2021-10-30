const genaratesError = require('../utilities/generatesError');
const { dateChecker } = require('../utilities/checkers');
const {
  NAME_REQUIRED,
  INVALID_NAME,
  AGE_REQUIRED,
  INVALID_AGE,
  INVALID_WATCHEDAT_FORMAT,
  TALK_REQUIRED,
  INVALID_RATE,
} = require('../utilities/errorCodes');

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
  if (!rate) {
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

/** @type { import('express').RequestHandler } */

const addTalkerValidations = (req, _res, next) => {
  const { name, age, talk } = req.body;
  
  nameValidation(name);
  ageValidation(age);
  talkValidation(talk);

  return next();
};

module.exports = addTalkerValidations;
