const usersServices = require('../../services/users');

module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const result = await usersServices.getById(id);

  return res.status(result.status)
    .json(typeof result.message !== 'object'
      ? { message: result.message }
      : result.message);
};
