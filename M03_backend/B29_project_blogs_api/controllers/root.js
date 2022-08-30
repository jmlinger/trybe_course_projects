const express = require('express');

const root = express.Router({ mergeParams: true });

const users = require('./users/router');
const login = require('./login/router');
const categories = require('./categories/router');
const blogPosts = require('./blogPosts/router');

root.use('/user', users);
root.use('/login', login);
root.use('/categories', categories);
root.use('/post', blogPosts);

module.exports = root;
