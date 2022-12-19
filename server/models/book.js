/*File Name:book.js
    Name: Prajwal
    Student ID 301243308
    Date 20 November 2022
*/ 

let mongoose = require('mongoose');
//create a model class

let booksModel = mongoose.Schema({
    name: String,
    number: Number,
    emailaddress: String
},
{//mongoDB collection name
    collection: "book"
});

module.exports = mongoose.model('Book', booksModel)