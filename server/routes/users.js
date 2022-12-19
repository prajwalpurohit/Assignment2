/*File Name:users.js
    Name: Prajwal
    Student ID 301243308
    Date 20 November 2022
*/ 

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
