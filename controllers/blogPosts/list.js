const blogPostsServices = require('../../services/blogPosts');

module.exports = async (_req, res, _next) => {
  const result = await blogPostsServices.list();

  return res.status(result.status).json(result.message);
};
