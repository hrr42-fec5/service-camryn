const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const Restaurant = require('../database/restaurantSchema.js');
const Article = require('../database/articleSchema.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.get('/api/restaurants/:restaurantId', (req, res) => {
  var restId = parseInt(req.params.restaurantId);
  var articles = [];
  Restaurant.findOne({id: restId})
    .then((docs) => {
      docs.forEach((doc) => {
        Article.findOne({ id: doc })
        .then((art) => {
          articles.push(art);
        })
      })
    })
    .then(() => {
      res.send(articles);
    })
    .catch((err) => {
      console.log("Error finding restaurant in database: ", err);
    })
})


