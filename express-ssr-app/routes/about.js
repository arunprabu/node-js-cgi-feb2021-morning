var express = require('express');
var router = express.Router();

// for http://localhost:3000/about
/* GET about. */
router.get('/', function(req, res, next) {
  res.render('about', { pageName: 'About Page' });
});

module.exports = router;
