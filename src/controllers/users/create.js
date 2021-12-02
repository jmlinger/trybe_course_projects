const { StatusCodes } = require('http-status-codes');
const Services = require('../../services/users');

module.exports = async (req, res, _next) => {
  const user = req.body;

  const newUser = await Services.create(user);

  res.status(StatusCodes.CREATED).json({ user: newUser });
};
