const mongoose = require('mongoose');
const faker = require('faker');
const Restaurant = require('./restaurantSchema.js');


mongoose.connect('mongodb://localhost/zagat', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose is connected!');
});

exports.db = db;