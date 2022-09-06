const Service = require('../../services/recipes');

module.exports = async (_req, res, _next) => {
  const result = await Service.find();

  res.status(result.status).json(result.message);
};
