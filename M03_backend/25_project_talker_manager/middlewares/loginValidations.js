const { emailChecker } = require('../utilities/checkers');
const genaratesError = require('../utilities/generatesError');
const {
  EMAIL_REQUIRED,
  INVALID_EMAIL_FORMAT,
  PASSWORD_REQUIRED,
  INVALID_PASSWORD_FORMAT,
} = require('../utilities/errorCodes');

const emailValidations = (email) => {
  if (!email) throw genaratesError(EMAIL_REQUIRED);
  if (!emailChecker(email)) {
    throw genaratesError(INVALID_EMAIL_FORMAT);
  }
};

const passwordValidations = (password) => {
  if (!password) throw genaratesError(PASSWORD_REQUIRED);
  if (password.length < 6) {
    throw genaratesError(INVALID_PASSWORD_FORMAT);
  }
};

const loginValidations = (req, _res, next) => {
  const { email, password } = req.body;

  emailValidations(email);
  passwordValidations(password);
  
  return next();
};

module.exports = loginValidations;
