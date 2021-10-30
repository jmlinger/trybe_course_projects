/** @type { import('express').RequestHandler } */

const { INVALID_TOLKEN, TOKEN_NOT_FOUND } = require('../utilities/errorCodes');
const genaratesError = require('../utilities/generatesError');

const auth = (req, res, next) => {
 const { authorization: token } = req.headers;

 if (!token) throw genaratesError(TOKEN_NOT_FOUND);
 if (token.length !== 16) throw genaratesError(INVALID_TOLKEN);

 return next();
};

module.exports = auth;
