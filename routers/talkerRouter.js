const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const { byIdValidations, addUpdateValidations } = require('../middlewares/talkerValidations');
const { 
  readAll,
  readById,
  addTalker,
  updateTalker,
} = require('../controllers/talkerController');

const router = express.Router();

router.get('/talker',
  rescue(readAll));

router.get('/talker/:id', 
  rescue(byIdValidations),
  rescue(readById));

router.post('/talker',
  rescue(auth),
  rescue(addUpdateValidations),
  rescue(addTalker));

router.put('/talker/:id',
  rescue(auth),
  rescue(byIdValidations),
  rescue(addUpdateValidations),
  rescue(updateTalker));

module.exports = router;
