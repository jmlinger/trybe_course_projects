const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const { byIdValidations, addUpdateValidations } = require('../middlewares/talkerValidations');
const { 
  readAll,
  readById,
  addTalker,
  updateTalker,
  deleteTalker,
  searchTalker,
} = require('../controllers/talkerController');

const router = express.Router();

router
  .route('/talker')
  .get(
    rescue(readAll),
  )
  .post(
    rescue(auth),
    rescue(addUpdateValidations),
    rescue(addTalker),
  );

router
  .get('/talker/search',
  rescue(auth),
  rescue(searchTalker));

router
.route('/talker/:id')
.get(
  rescue(byIdValidations),
  rescue(readById),
)
.put(
  rescue(auth),
  rescue(byIdValidations),
  rescue(addUpdateValidations),
  rescue(updateTalker),
)
.delete(
  rescue(auth),
  rescue(byIdValidations),
  rescue(deleteTalker),
);

module.exports = router;
