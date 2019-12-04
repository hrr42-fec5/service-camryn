const express = require('express');
const app = express();
const port = 3003;
const Restaurant = require('../database/restaurantSchema.js');
const Article = require('../database/articleSchema.js');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.get('/api/restaurants/:restaurantId', (req, res) => {
  var restId = parseInt(req.params.restaurantId);
  Restaurant.findOne({id: restId})
    .then((doc) => {
      // sends articles array
      res.send(doc.articles)
    })
    .catch((err) => {
      console.log("Error finding restaurant in database: ", err);
    })
})


