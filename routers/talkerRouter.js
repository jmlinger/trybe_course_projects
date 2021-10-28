const express = require('express');
const rescue = require('express-rescue');
const { 
  readAll,
  readById,
} = require('../controllers/talkerController');

const router = express.Router();

router.get('/talker',
  rescue(readAll));

router.get('/talker/:id', 
  rescue(readById),
  (err, _req, res, _next) => 
    res.status(404).json({ message: `${err}` }));

module.exports = router;
