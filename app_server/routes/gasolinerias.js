var express = require('express');
var router = express.Router();
var gasolineriasController = require('../controllers/gasolineriasController');

/* GET gasolinerias. */
router.get('/6', function(req, res, next) {
  res.send('In Gasolineria');
});
router.get('/', gasolineriasController.getAll);

module.exports = router;
