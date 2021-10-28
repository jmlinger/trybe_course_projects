const express = require('express');
const access = require('../controllers/loginController');

const router = express.Router();

router.post('/login',
  access,
  (err, _req, res, _next) => 
    res.status(400).json({ message: `${err}` })); 

module.exports = router;
