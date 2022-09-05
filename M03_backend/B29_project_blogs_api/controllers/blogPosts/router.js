const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const auth = require('../../middewares/auth');
const create = require('./create');
const list = require('./list');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');
const getBySearch = require('./getBySearch');

router.post('/', auth, rescue(create));
router.get('/', auth, rescue(list));
router.get('/search', auth, rescue(getBySearch));
router.get('/:id', auth, rescue(getById));
router.put('/:id', auth, rescue(update));
router.delete('/:id', auth, rescue(remove));

module.exports = router;
