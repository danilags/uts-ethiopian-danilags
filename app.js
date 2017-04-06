const express = require('express');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
const index = require('./routes/index');
const food = require('./routes/food');
const restaurant = require('./routes/restaurant');
const tambahMenu = require('./routes/tambah-menu');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
// mongoose.connect('mongodb://localhost/toko');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use('/', index)
app.use('/food', food)
app.use('/restaurant', restaurant)
app.use('/tambah-menu', tambahMenu)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/toko')
mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})

app.listen(3000, function() {
  console.log("Server Jalan !");
})
