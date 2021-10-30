const express = require('express');
const rescue = require('express-rescue');
const access = require('../controllers/loginController');
const loginValidations = require('../middlewares/loginValidations');

const router = express.Router();

router.post('/login',
  rescue(loginValidations),
  rescue(access)); 

module.exports = router;
