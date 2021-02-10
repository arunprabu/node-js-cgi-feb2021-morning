const autoIncrement = require('mongoose-auto-increment');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
const mongoose = require('./mongoConnect');

const Schema = mongoose.Schema;

const User = new Schema({
  userId: {
    type: Number,
    unique: true
  }, // Primary Key 
  name: String,
  email: {
    type: String,
    unique: true
  },
  salt: String,
  hash: String,
  status: Boolean,
  createdBy: Number,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  isEmailVerified: Boolean,
  updatedOn: { type: Date, default: Date.now }
}, { strict: true });

// define util functions around User Model
// convert password to salt and hash 
//util method to set salt and hash for the entered password
User.methods.setPassword = function(password){
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

// define util fn to verify the p/w -- while login 
User.methods.validatePassword = function(password){
  console.log(password);
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash == hash;
}


// generate Token using JWT (jsonwebtoken)
User.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);

	return jwt.sign({
		email: this.email,
		id: this._id,
		exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}


User.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
module.exports = mongoose.model('User', User); // User is the Collection