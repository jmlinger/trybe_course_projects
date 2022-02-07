const Services = require('../../services/login');

module.exports = async (req, res, _next) => {
  const user = req.body;

  const result = await Services.login(user);

  return res.status(result.status)
    .json(result.message.length < 100
      ? { message: result.message }
      : { token: result.message });
};
