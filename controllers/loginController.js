const generateToken = require('../utilities/generateToken');
const emailValidation = require('../utilities/emailValidation');

const access = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) return next('O campo "email" é obrigatório');
  if (!emailValidation(email)) return next('O "email" deve ter o formato "email@email.com"');
  if (!password) return next('O campo "password" é obrigatório');
  if (password.length < 6) return next('O "password" deve ter pelo menos 6 caracteres');
  res.status(200).json({ token: generateToken() });
};

module.exports = access;
