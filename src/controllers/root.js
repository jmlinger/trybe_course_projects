const express = require('express');
const auth = require('../middlewares/auth');

const root = express.Router({ mergeParams: true });

root.use('/users', require('./users/router'));

root.use('/login', require('./login/router'));

root.use('/recipes', auth, require('./recipes/router'));

module.exports = root;