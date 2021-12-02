const { StatusCodes } = require('http-status-codes');
const find = require('./find');
const Models = require('../../models/users');
const { ALREADY_REGISTERED, INVALID_ENTRIES } = require('../../utils/errorSet');
const { userValidation } = require('./validations');

module.exports = async (user) => {
  const { email } = user;
  const userByEmail = await find({ email });

  if (userByEmail.length > 0) {
    return ALREADY_REGISTERED;
  }
  
  if (userValidation(user).error) {
    return INVALID_ENTRIES;
  }

  const newUser = (await Models.create(user)).ops[0];

  const newUserWithoutPassword = { name: newUser.name, email: newUser.email, role: newUser.role };

  return { status: StatusCodes.CREATED, message: newUserWithoutPassword };
};
