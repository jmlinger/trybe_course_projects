const blogPostsServices = require('../../services/blogPosts');

module.exports = async (req, res, _next) => {
  const post = req.body;
  const userId = req.user.id;

  const result = await blogPostsServices.create(post, userId);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
