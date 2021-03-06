const db = require('../models/restaurant');


let getAll =  function(req, res) {
  db.find(function(err, foods) {
    res.send(foods)
  })
}

let createRestaurant = function(req, res) {
  console.log("isudhiasdihasidhiao");
  db.create({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address,
    open_status: req.body.open_status
  }).then(function(resto) {
    console.log(resto);
    res.send(resto)
  }).catch(function(err) {
    res.send({
      message: "error sesuatu",
      error: err
    })
  })
}

let updateRestaurant = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      name: req.body.name,
      owner: req.body.owner,
      address: req.body.address,
      open_status: req.body.open_status,
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Restaurant berhasil di update !")
    }
  })
}

let deleteRestaurant = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Restaurant berhasil di hapus !")
    }
  })
}

module.exports = {
  getAll,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
}
