// var data = require('./faker.js');
const faker = require('faker');


var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var restaurantSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  articles: [Number]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

var articleSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  image: String,
  title: String,
  body: String
})

var Article = mongoose.model('Article', articleSchema);

var generateArticles = function(num) {
  var articles = [];
  for (var i = 0; i<num; i++) {
    var obj = {
      id: (i+1),
      image: `https://creidfecimages.s3-us-west-1.amazonaws.com/photo${i+1}.jpeg`,
      title: faker.lorem.words(),
      body: faker.lorem.paragraphs()
    }
    articles.push(obj);
  }
  // console.log(articles);

  var article1 = new Article({ id: 35, image: 'test', title: 'test', body: 'test' });

  // save model to database
  article1.save(function (err, article) {
    if (err) return console.error(err);
    console.log('worked');
  });


  // console.log(Article);
  // Article.insertMany(articles)
  //   .then((docs) => {
  //     console.log("Articles successfully written to database: ", docs);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

generateArticles(20);

module.exports = Article;