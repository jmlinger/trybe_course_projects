const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { ALREADY_REGISTERED, INVALID_ENTRIES } = require('../../utils/errorSet');
const { genToken } = require('../auth/auth');
const { userValidation } = require('./validations');

module.exports = async (user) => {
  const validationError = userValidation(user);
  
  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }
  
  const { email: userEmail } = user;
  const findUserByEmail = await Models.Users.findOne({ where: { email: userEmail } });
  
  if (findUserByEmail) {
    return ALREADY_REGISTERED;
  }
  
  const newUser = (await Models.Users.create(user)).dataValues;

  delete newUser.password;
  const newUserWithoutPassword = newUser;

  const token = genToken(newUserWithoutPassword);

  return { status: StatusCodes.CREATED, message: token };
};
