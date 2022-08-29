const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.error(err);
  const { status, ...errWithoutStatus } = err;
  if (status) {
    res.status(status).json({ err: errWithoutStatus });
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
