var mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/zagat', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose is connected!');
});


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

  Article.insertMany(articles)
    .then((docs) => {
      console.log("Articles successfully written to database: ", docs);
    })
    .catch((err) => {
      console.log(err);
    });
  }

// generateArticles(20);

var restaurantSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  articles: [Number]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

var pickArticle = function () {
  return Math.floor(Math.random() * 20);
}

var generateRestaurants = function(num) {
  var restaurants = [];
  for (var i = 0; i<num; i++) {
    var numArticles = Math.floor(Math.random() * 3) + 3;
    var obj = {
      id: (i+1),
      articles: []
    }
    for (var j = 1; j<numArticles; j++) {
      obj.articles.push(pickArticle());
    }
    restaurants.push(obj);
  }

  Restaurant.insertMany(restaurants)
    .then((docs) => {
      console.log("Restaurants successfully written to database: ", docs);
    })
    .catch((err) => {
      console.log(err);
    });
}

// generateRestaurants(100);

module.exports = db;