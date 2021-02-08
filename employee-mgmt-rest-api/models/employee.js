const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('./mongoConnect');

const Schema = mongoose.Schema;

const Employee = new Schema({
  employeeId: Number, // Primary Key 
  name: String,
  phone: String,
  email: String,
  status: String,
  createdBy: Number,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now }
});

Employee.plugin(autoIncrement.plugin, { model: 'Employee', field: 'employeeId', startAt: 1 });
module.exports = mongoose.model('Employee', Employee);