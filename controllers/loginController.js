const generateToken = require('../utilities/generateToken');

const access = (_req, res, _next) => {
  res.status(200).json({ token: generateToken() });
};

module.exports = access;
