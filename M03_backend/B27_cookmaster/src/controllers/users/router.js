const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(require('./create')));

module.exports = router;
