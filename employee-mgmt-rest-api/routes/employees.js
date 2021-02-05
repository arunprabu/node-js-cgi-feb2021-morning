var express = require('express');

// connecting with employeeService
const employeeService = require('../services/employeesService');

var router = express.Router();

/* POST adding employees .  http://localhost:3000/api/employees/  */ 
router.post('/', function(req, res, next) { 
  // req.url, req.body, req.params, req.query
  console.log(req.body);

  // 2. send the req.body to the service 
  employeeService.addEmployee(req.body, (err, data) => { // 3. get the o/p from the service
    console.log(err);
    console.log(data);
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });

});

/* GET employees listing.  http://localhost:3000/api/employees  */ 
router.get('/', function(req, res, next) {
  
  employeeService.getEmployees( (err, data) => {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
});









/* GET fetch employee details.  http://localhost:3000/api/employees/:id  */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);

  employeeService.getEmployeeById(req.params.id, (err, data) => {
    if(!err){
      res.json(data);
    }else{
      res.json(err);
    }
  });
});
















/* PUT update employee .  http://localhost:3000/api/employees/:id  */
router.put('/:id', function(req, res, next) {
  console.log(req.params.id);
  console.log(req.body);
  res.json({
    message: 'Updated Successfully!'
  });
});

/* DELETE delete employee .  http://localhost:3000/api/employees/:id  */
router.delete('/:id', function(req, res, next) {
  console.log(req.params.id);

  res.json({
    message: 'Deleted Successfully!'
  });
});

module.exports = router;
