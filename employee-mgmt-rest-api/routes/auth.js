const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

router.post('/signup', (req, res, next) => {  
  console.log('Inside signup Route');
  authService.signup( req.body, (err, status) => {
    if(!err){
      res.json(status);
    }else{
      res.json(err);
    }
  });
});

router.post('/login', (req, res, next) => {  
  console.log('Inside login Route');
  
  authService.login( req, (err, userInfo) => {
    if(!err){
      res.json(userInfo);
    }else{
      res.json(err);
    }
  });
});

module.exports = router;