const categoriesServices = require('../../services/categories');

module.exports = async (req, res, _next) => {
  const category = req.body;

  const result = await categoriesServices.create(category);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
