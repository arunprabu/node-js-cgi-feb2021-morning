var express = require('express');
var router = express.Router();

// for http://localhost:3000/users
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { pageName: 'Users Page' });
});

module.exports = router;
