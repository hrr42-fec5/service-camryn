const faker = require('faker');

// generate 100 restaurant records
  // id increments 1-100
  // articles range from 4-6 per restaurant & number from 1-20
// generate 20 articles
  // id increments 1-20
  // image
  // title
  // body

var generateRestaurants = function(num, cb) {
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
  // cb(restaurants);
  return restaurants;
}

var pickArticle = function () {
  return Math.floor(Math.random() * 20);
}

var generateArticles = function(num, cb) {
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
  // cb(articles);
  return articles;
}

// test seeding with node
// var rests = generateRestaurants(2);
// var arts = generateArticles(2);

// console.log('restaurants: ', rests, 'articles: ', arts);