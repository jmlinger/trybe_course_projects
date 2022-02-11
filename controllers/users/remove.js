const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async (req, res, _next) => {
  const { id: userId } = req.user;

  await Models.User.destroy({ where: { id: userId } });

  return res.status(StatusCodes.NO_CONTENT).end();
};
