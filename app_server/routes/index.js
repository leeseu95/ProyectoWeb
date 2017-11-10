var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/login', indexController.login);

// GET Register page
router.get('/register', indexController.register);

module.exports = router;
