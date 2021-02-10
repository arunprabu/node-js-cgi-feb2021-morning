var express = require('express');
var multer  = require('multer');
var router = express.Router();

var multer  = require('multer');

//var upload = multer({ dest: './public/data/uploads/' });

// if you want to have control over the saved file name
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/data/uploads/');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee Management REST API' });
});


// profile is the name of the field of file uploaded in REST API client
router.post('/upload', upload.single('profile'), function(req, res, next) { 
  try {
    res.send(req.file);
  }catch(err) {
    res.send(400);
  }
});


module.exports = router;
