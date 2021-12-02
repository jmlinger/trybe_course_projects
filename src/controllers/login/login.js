// const { StatusCodes } = require('http-status-codes');
const Service = require('../../services/auth');

/** @type { import('express').RequestHandler } */

module.exports = async (req, res, _next) => {
  const user = req.body;

  const result = await Service.login(user);

  res.status(result.status)
    .json(result.message.length > 30
      ? { token: result.message }
      : { message: result.message });
};
