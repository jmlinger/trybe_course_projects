const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', require('./list'));

router.get('/:id', require('./get'));

router.post('/', require('./create'));

router.put('/:id', require('./update'));

module.exports = router;
