const { StatusCodes } = require('http-status-codes');

const invalidEntries = () => ({
    status: StatusCodes.BAD_REQUEST,
    message: 'Invalid entries. Try again.',
});

const alreadyResgistered = (keyName) => ({
  status: StatusCodes.CONFLICT,
  message: `${keyName.charAt(0).toUpperCase() + keyName.slice(1)} already registered`, // lógica para colocar a primeira letra como maiúscula.
});

module.exports = {
  invalidEntries,
  alreadyResgistered,
};
