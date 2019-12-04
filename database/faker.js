const faker = require('faker');
const Article = require('./articleSchema.js');
const Restaurant = require('./restaurantSchema.js');

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