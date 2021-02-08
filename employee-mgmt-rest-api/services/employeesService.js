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
  let employeeList = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Steve'
    }
  ];
  callback(null, employeeList);
}

exports.getEmployeeById = (employeeId, callback) => {
  let employeeData = {
    id: employeeId,
    name: 'John',
    companyName: 'CGI',
    phone: 234332,
    email: 'a@b.com'
  }
  callback(null, employeeData);
}

// update employee
exports.updateEmployee = (employeeId,
  employeeData, callback) => {
  console.log(employeeId);
  console.log(employeeData);

  let status = {
    message: 'Employee Updated Successfully!!!'
  }
  callback(null, status);
}

// TODO: delete employee
