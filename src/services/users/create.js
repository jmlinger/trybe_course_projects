const find = require('./find');
const Models = require('../../models/users');
const { alreadyResgistered, invalidEntries } = require('../../utils/errorSet');
const { userValidation } = require('./validations');

module.exports = async (user) => {
  const { email } = user;
  const userByEmail = await find({ email });

  if (userByEmail.length > 0) {
    throw alreadyResgistered('email');
  }
  
  if (userValidation(user).error) {
    throw invalidEntries();
  }

  const newUser = (await Models.create(user)).ops[0];

  return newUser;
};
