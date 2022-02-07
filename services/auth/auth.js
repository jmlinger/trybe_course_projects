const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const genToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
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
