const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const db = require('../database/index.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.get('/api/restaurants/:restaurantId', (req, res) => {
  var restId = parseInt(req.params.restaurantId);
  Restaurant.findOne({id: restId})
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log("Error finding restaurant in database: ", err);
    })
})


