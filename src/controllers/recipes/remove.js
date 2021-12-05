const Service = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { user } = req;
  const { id } = req.params;
  const result = await Service.remove(user, id);

  res.status(result.status)
    .json(typeof result.message === 'object'
      ? result.message
      : { message: result.message });
};