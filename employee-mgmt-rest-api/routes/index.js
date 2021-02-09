var express = require('express');
var multer  = require('multer');
var router = express.Router();

var upload = multer({dest:'uploads/'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee Management REST API' });
});

//Upload route
router.post('/upload', upload.single('profile'), (req, res) => {
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});


module.exports = router;
