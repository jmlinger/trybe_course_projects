const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const auth = require('../../middewares/auth');
const create = require('./create');
const list = require('./list');
const getById = require('./getById');
const remove = require('./remove');

router.post('/', rescue(create));
router.get('/', auth, rescue(list));
router.get('/:id', auth, rescue(getById));
router.delete('/me', auth, rescue(remove));

module.exports = router;
