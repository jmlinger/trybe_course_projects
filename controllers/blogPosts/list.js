const Services = require('../../services/blogPosts');

module.exports = async (_req, res, _next) => {
  const result = await Services.list();

  return res.status(result.status).json(result.message);
};
