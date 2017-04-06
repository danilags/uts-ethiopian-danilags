var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name        : String,
  owner       : String,
  address     : String,
  open_status : Boolean,
  menu        : [{type : Schema.Types.ObjectId, ref: 'Food'}]
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant
