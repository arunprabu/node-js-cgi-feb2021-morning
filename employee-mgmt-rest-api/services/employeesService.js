
// create 
// 1. get the req with req.body from the routes 
exports.addEmployee = ( employeeData, callback ) => {
  console.log(employeeData);
  console.log(callback);

  let status = {
    message: 'Employee Added Successfully!!!'
  }

  // 2. send the o/p to the routes 
  callback(null, status);
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



exports.getEmployeeById = ( employeeId, callback ) => {
  let employeeData = {
    id: employeeId,
    name: 'John',
    companyName: 'CGI',
    phone: 234332,
    email: 'a@b.com'
  }
  callback(null, employeeData);
}

