/** @type { import('express').RequestHandler } */

const errorHandler = (err, _req, res, _next) => {
  const { message, status } = err;
  if (status) return res.status(status).json({ message });
  res.status(400).json({ message });
};

module.exports = errorHandler;
