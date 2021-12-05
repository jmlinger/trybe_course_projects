const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const genToken = (data) => {
  const token = jwt.sign({ data }, API_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const user = decoded.data;

    return user;
  } catch (err) {
    return null;
  }
};

module.exports = {
  genToken,
  verifyToken,
};
