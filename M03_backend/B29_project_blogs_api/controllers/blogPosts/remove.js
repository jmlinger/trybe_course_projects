const blogPostsServices = require('../../services/blogPosts');

module.exports = async (req, res, _next) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;

  const result = await blogPostsServices.remove(postId, userId);

  return res.status(result.status)
    .json(result.message ? { message: result.message } : null);
};
