const passport = require('passport');
const User = require('../models/user');

exports.signup = (signupFormData, callback) => {
  console.log(signupFormData);
  
  // 1. get the req in the service 
	console.log('Inside signup of authService');
	//var generator = require('generate-password');  // npm i generate-password move it to top 
 	//generate temp password 
	// var _tempPassword = generator.generate({
	//                                         length: 14,
	//                                         numbers: true
	//                                   });

  let userDao = new User(signupFormData);
  console.log(userDao);
  // in order to encrypt the password -- to get the salt and hash for the p/w 
  userDao.setPassword(signupFormData.password);
  userDao.save( (err, signedUpUserData ) => {
    if( !err){
      console.log(signedUpUserData);
      // send verify email to the registered email 

      callback(err, { 
        status: `Account with Email ${signedUpUserData.email} has been created Succesfully!` 
      });
    }else{
      callback(err, {});
    }
  });
}


exports.login = (req, callback) => {
  console.log(req);

  // 1. email, password 
  // refer: passportConfig.js to understand the following lines fully
  passport.authenticate('local', function(err, user, info) {
    // If Passport throws error catch and send it as res
    if(err){
      console.log('Some error occured');
      callback(err);
    }

    // if user found
    if(user){
      let loggedInUserInfo = {
        email: user.email,
        token: user.generateJWT()
      }
      callback(err, loggedInUserInfo);
    }else{
      callback(err, info);
    }

  })(req, callback); 

}


