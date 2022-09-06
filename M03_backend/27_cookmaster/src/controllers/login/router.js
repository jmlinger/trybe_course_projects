const express = require('express');
const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(require('./login')));

module.exports = router;
