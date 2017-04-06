const express = require('express');
const index = require('./routes/index');
const food = require('./routes/food');
const restaurant = require('./routes/restaurant');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', index);
app.use('/foods', food);
app.use('/restaurants', restaurant);


mongoose.connect('mongodb://localhost/uts-ethiopian-danilags');
mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})

app.listen(3000, function() {
  console.log("Server Jalan !");
})
