const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/users');
const { auth } = require('../auth');
const { INCORRECT_LOGIN, ALL_MUST_BE_FILLED } = require('../../utils/errorSet');
const { loginUserValidation } = require('./validations');

module.exports = async (user) => {
  if (loginUserValidation(user).error) {
    return ALL_MUST_BE_FILLED;
  }

  const { email, password } = user;
  
  const matchedUser = (await Models.find({ email }))[0];

  if (!matchedUser || matchedUser.password !== password) {
    return INCORRECT_LOGIN;
  }

  const { _id, role } = matchedUser;

  const userWithoutPassword = { _id, email, role };

  const tokens = auth.genToken(userWithoutPassword);

  return { status: StatusCodes.OK, message: tokens };
};
