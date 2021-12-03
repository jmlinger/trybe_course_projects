const express = require('express');
const rescue = require('express-rescue');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, rescue(require('./create')));

router.get('/', rescue(require('./list')));

module.exports = router;
