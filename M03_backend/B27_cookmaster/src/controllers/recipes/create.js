const Services = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const recipe = req.body;
  const { user } = req;

  const result = await Services.create(user, recipe);

  res.status(result.status)
    .json(typeof result.message === 'object'
      ? { recipe: result.message }
      : { message: result.message });
};
