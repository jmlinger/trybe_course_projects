const { StatusCodes } = require('http-status-codes');
const Service = require('../services/auth/auth');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'token não informado!' });
  }

  const user = Service.verifyToken(authorization);

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'token inválido' });
  }

  req.user = user;
  next();
};
