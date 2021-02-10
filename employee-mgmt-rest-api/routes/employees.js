var express = require('express');
var multer = require('multer');

// if you want to have control over the saved file name and folder
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/data/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

// connecting with employeeService
const employeeService = require('../services/employeesService');

var router = express.Router();

/* POST adding employees .  http://localhost:3000/api/employees/  */
router.post('/', function (req, res, next) {
  // req.url, req.body, req.params, req.query
  console.log(req.body);

  // 2. send the req.body to the service 
  employeeService.addEmployee(req.body, (err, data) => { // 3. get the o/p from the service
    console.log(err);
    console.log(data);
    if (!err) {
      res.json(data);
    } else {
      // TODO: Customizing error
      res.json(err);
    }
  });

});

/* GET employees listing.  http://localhost:3000/api/employees  */
router.get('/', function (req, res, next) {

  employeeService.getEmployees((err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

/* GET fetch employee details.  http://localhost:3000/api/employees/:id  */
router.get('/:id', function (req, res, next) {
  console.log(req.params.id);

  employeeService.getEmployeeById(req.params.id, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
});

/* PUT update employee .  http://localhost:3000/api/employees/:id  */
router.put('/:id', function (req, res, next) {

  employeeService.updateEmployee(req.params.id, req.body, (err, status) => {
    if (!err) {

      employeeService.getEmployeeById(req.params.id, (_err, employeeData) => {
        if (!_err) {
          res.json(employeeData);
        } else {
          res.json(_err);
        }
      });

    } else {
      res.json(err);
    }
  });
});

/* TODO: DELETE delete employee .  http://localhost:3000/api/employees/:id  */
router.delete('/:id', function (req, res, next) {
  console.log(req.params.id);

  res.json({
    message: 'Deleted Successfully!'
  });
});


/* File Upload on http://localhost:3000/api/employees/upload */
router.post('/upload', upload.single('employeeDP'), (req, res, next) => { 
  // employeeDP is the name of the field of file uploaded in REST API client
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});


module.exports = router;
