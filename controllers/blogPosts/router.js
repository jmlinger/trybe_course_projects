const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const auth = require('../../middewares/auth');
const create = require('./create');
const list = require('./list');
const get = require('./get');
const update = require('./update');
const remove = require('./remove');

router.post('/', auth, rescue(create));
router.get('/', auth, rescue(list));
router.get('/:id', auth, rescue(get));
router.put('/:id', auth, rescue(update));
router.delete('/:id', auth, rescue(remove));

module.exports = router;
