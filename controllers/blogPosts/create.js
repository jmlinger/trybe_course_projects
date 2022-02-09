const Services = require('../../services/blogPosts');

module.exports = async (req, res, _next) => {
  const post = req.body;
  const userId = req.user.id;

  const result = await Services.create(post, userId);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
