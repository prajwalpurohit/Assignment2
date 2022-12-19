/*File Name:book.js
    Name: Prajwal
    Student ID 301243308
    Date 20 November 2022
*/ 

let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");

//connect to our Book model
let jwt = require('jsonwebtoken');

let passport = require("passport");

// connect to our Book Model
//let Book = require("../models/book");

let listsController = require("../controllers/book");

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

/* GET Route for the Business List page - READ Operation */
router.get("/", listsController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", requireAuth, listsController.addPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", requireAuth, listsController.addProcessPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get("/edit/:id", requireAuth, listsController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post("/edit/:id", requireAuth, listsController.processingEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, listsController.deletePage);

module.exports = router;
