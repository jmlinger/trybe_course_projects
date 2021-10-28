const express = require('express');
const rescue = require('express-rescue');
const { readAll } = require('../controllers/talkerController');

const router = express.Router();

router.get('/talker',
  rescue(readAll));

module.exports = router;
