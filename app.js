const express = require('express');
const bodyParser = require('body-parser');
const food = require('./routes/food');
const restaurant = require('./routes/restaurant');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/foods', food);
app.use('/restaurants', restaurant);


app.listen(3000, function() {
  console.log("Server Jalan !");
})
