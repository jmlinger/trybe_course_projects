const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES, INVALID_FIELDS } = require('../../utils/errorSet');
const { genToken } = require('../auth/auth');
const { loginValidation } = require('./validations');

module.exports = async (user) => {
  const validationError = loginValidation(user);
  
  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }
  
  let findUserByEmail = await Models.Users.findOne({ where: { email: user.email } });
  findUserByEmail = findUserByEmail ? findUserByEmail.dataValues : null;
  
  if (!findUserByEmail || findUserByEmail.password !== user.password) {
    return INVALID_FIELDS;
  }

  delete findUserByEmail.password;
  const userWithoutPassword = findUserByEmail;

  const token = genToken(userWithoutPassword);

  return { status: StatusCodes.OK, message: token };
};
