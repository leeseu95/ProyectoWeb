var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
// router.get('/6', function(req, res, next) {
//     res.send('blogs');
//   });
router.get('/login', indexController.login);

// GET Register page
router.get('/register', indexController.register);

router.get('/session', indexController.session);

module.exports = router;
