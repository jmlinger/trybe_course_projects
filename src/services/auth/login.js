const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/users');
const auth = require('./auth');
const { INCORRECT_LOGIN, ALL_MUST_BE_FILLED } = require('../../utils/errorSet');
const { loginUserValidation } = require('./validations');

module.exports = async (user) => {
  if (loginUserValidation(user).error) {
    return ALL_MUST_BE_FILLED;
  }
  
  const { id, name, email, password } = user;
  const matchedUser = await Models.find({ email });
  console.log(matchedUser);

  if (matchedUser.length === 0 || matchedUser[0].password !== password) {
    return INCORRECT_LOGIN;
  }

  const userWithoutPassword = { id, name, email };

  const tokens = auth.genToken(userWithoutPassword);

  return { status: StatusCodes.OK, message: tokens };
};
