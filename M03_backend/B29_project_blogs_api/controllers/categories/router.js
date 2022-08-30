const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const auth = require('../../middewares/auth');
const create = require('./create');
const list = require('./list');

router.post('/', auth, rescue(create));
router.get('/', auth, rescue(list));

module.exports = router;
