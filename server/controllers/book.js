/*File Name:book.js
    Name: Prajwal
    Student ID 301243308
    Date 20 November 2022
*/ 

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let jwt = require('jsonwebtoken');

//create reference to the model (dbschema )
let BookList = require("../models/book");

module.exports.displayBookList = (req, res, next) => {
  BookList.find((err, bookList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(listsList);

      res.render("book/list", { title: "Books Contact", BookList: bookList,
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

//add page
module.exports.addPage = (req, res, next) => {
  res.render("book/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

//add page
module.exports.addProcessPage = (req, res, next) => {
  let newBook = BookList({
    "name": req.body.name,
    "number": req.body.number,
    "emailaddress": req.body.emailaddress,
  });
  BookList.create(newBook, (err, BookList) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the lists list
      res.redirect("/book-list");
    }
  });
};

//get edit page
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id; 

  BookList.findById(id, (err, listToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("book/edit", { title: "Edit List", BookList: listToEdit, 
      displayName: req.user ? req.user.displayName : ''});
    }
  });
};

//edit page
module.exports.processingEditPage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updateLists = BookList({
    "_id": id,
    "name": req.body.name,
    "number": req.body.number,
    "emailaddress": req.body.emailaddress,
  });
  BookList.updateOne({ _id: id }, updateLists, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the lists list
      res.redirect("/book-list");
    }
  });
};

//delete page
module.exports.deletePage = (req, res, next) => {
  let id = req.params.id;
  
  BookList.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh lists list
      res.redirect("/book-list");
    }
  });
};
