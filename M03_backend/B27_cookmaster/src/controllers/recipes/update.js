const Service = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { user, file } = req;
  const { id } = req.params;
  const recipe = req.body;
  const result = await Service.update(user, file, id, recipe);

  res.status(result.status)
    .json(typeof result.message === 'object'
      ? result.message
      : { message: result.message });
};