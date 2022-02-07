const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async (_req, res, _next) => {
  const result = await Models.User.findAll();

  return res.status(StatusCodes.OK).json(result);
};
