const rescue = require('express-rescue');
const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(require('./list')));

router.get('/:id', rescue(require('./get')));

router.post('/', rescue(require('./create')));

router.put('/:id', rescue(require('./update')));

router.delete('/:id', rescue(require('./remove')));

module.exports = router;
