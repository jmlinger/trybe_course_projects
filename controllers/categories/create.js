const Services = require('../../services/categories');

module.exports = async (req, res, _next) => {
  const categorie = req.body;
  console.log(categorie);
  const result = await Services.create(categorie);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
