const { StatusCodes } = require('http-status-codes');
const find = require('./find');
const Models = require('../../models/users');
const { ALREADY_REGISTERED, INVALID_ENTRIES } = require('../../utils/errorSet');
const { userValidation } = require('./validations');

module.exports = async (user) => {
  const { email: userEmail } = user;
  const userByEmail = await find({ email: userEmail });

  if (userByEmail.length > 0) {
    return ALREADY_REGISTERED;
  }
  
  if (userValidation(user).error) {
    return INVALID_ENTRIES;
  }

  const newUser = (await Models.create(user)).ops[0];

  const { name, email, role, _id } = newUser;

  const newUserWithoutPassword = { name, email, role, _id };

  return { status: StatusCodes.CREATED, message: newUserWithoutPassword };
};
