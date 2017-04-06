const db = require('../models/food');



let getAll =  function(req, res) {
  db.find(function(err, foods) {
    res.send(foods)
  })
}

let createFood = function(req, res) {
  db.create({
    name: req.body.name,
    price: req.body.price,
    expired_date: req.body.expired_date,
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}


let updateFood = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      name: req.body.name,
      price: req.body.price,
      expired_date: req.body.expired_date,
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Food berhasil di update !")
    }
  })
}

let deleteFood = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Food berhasil di hapus !")
    }
  })
}

module.exports = {
  getAll,
  createFood,
  updateFood,
  deleteFood
}
