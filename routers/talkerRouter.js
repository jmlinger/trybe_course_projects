const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const addTalkerValidations = require('../middlewares/addTalkerValidations');
const { 
  readAll,
  readById,
  addTalker,
} = require('../controllers/talkerController');
const readByIdValidations = require('../middlewares/readByIdValidations');

const router = express.Router();

router.get('/talker',
  rescue(readAll));

router.get('/talker/:id', 
  rescue(readByIdValidations),
  rescue(readById));

router.post('/talker',
  rescue(auth),
  rescue(addTalkerValidations),
  rescue(addTalker));

module.exports = router;
