const blogPostsServices = require('../../services/blogPosts');

module.exports = async (req, res, _next) => {
  const { q } = req.query;

  const result = await blogPostsServices.getBySearch(q);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
