const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const auth = require('../../middewares/auth');
const create = require('./create');
const list = require('./list');
const get = require('./get');
const update = require('./update');

router.post('/', auth, rescue(create));
router.get('/', auth, rescue(list));
router.get('/:id', auth, rescue(get));
router.put('/:id', auth, rescue(update));

module.exports = router;
