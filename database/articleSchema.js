var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  image: String,
  title: String,
  body: String
})

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;