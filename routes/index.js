var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'A demo Angular app' });
});

/* GET home page. */
router.get('/threejs', function(req, res, next) {
  res.render('threejs', { title: 'Three.js Demo' });
});

module.exports = router;
