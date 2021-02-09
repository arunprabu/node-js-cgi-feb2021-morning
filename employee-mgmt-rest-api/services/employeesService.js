const Employee = require('../models/employee');

// create 
// 1. get the req with req.body from the routes 
exports.addEmployee = (employeeData, callback) => {
  console.log(employeeData);
  console.log(callback);

  // 1. exec query to save employeeData
  const employeeDao = new Employee(employeeData);
  employeeDao.save((err, savedEmployee) => {
    console.log(err);
    console.log(savedEmployee);
    if(!err){
      console.log('Employee Saved Successfully!');
    }
    callback(err, savedEmployee); // 2. send the o/p to the routes
  });
}

// read 
exports.getEmployees = (callback) => {
  
  Employee.find((err, employeeList) => {
    console.log(employeeList);
    if(!err){
      console.log('Employees Fetched Successfully!');
    }
    callback(err, employeeList); 
  });
}

exports.getEmployeeById = (_employeeId, callback) => {
  console.log(_employeeId);
  
  Employee.findOne({employeeId: _employeeId}, (err, employeeData) => {
    if(!err){
      console.log('Employee Details Fetched Successfully!');
    }
    callback(err, employeeData);
  });
}

// update employee
exports.updateEmployee = (_employeeId, _employeeData, callback) => {
  console.log(_employeeId);
  console.log(_employeeData);

  Employee.updateOne({employeeId: _employeeId}, _employeeData, (err, status) => {
    if(!err){
      console.log('Employee Details Updated Successfully!');
      status = {
        message: 'Employee Updated Successfully!' 
      }
    }
    callback(err, status);
  });
  
}

// TODO: delete employee
