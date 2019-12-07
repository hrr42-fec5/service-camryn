const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const db = require('../database/index.js');
const Restaurant = require('../database/schema.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.get('/api/restaurants/:restaurantID', (req, res) => {
  var restId = parseInt(req.params.restaurantID);
  // console.log("Restaurant ID: ", restId);
  Restaurant.findOne({id: restId}).lean()
    .then((doc) => {
      res.send(doc);
      // console.log(doc);
    })
    .catch((err) => {
      console.log("Error finding restaurant in database: ", err);
    })
})


