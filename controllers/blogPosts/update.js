const Services = require('../../services/blogPosts');

module.exports = async (req, res, _next) => {
  const { id: postId } = req.params;
  const { id: userId } = req.user;
  const post = req.body;

  const result = await Services.update(post, postId, userId);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
