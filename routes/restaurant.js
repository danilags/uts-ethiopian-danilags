var express = require('express');
var router = express.Router();
var contRestaurant = require('../controller/restaurant')


router.get('/', contRestaurant.getAll)
router.post('/', contRestaurant.createRestaurant)
router.put('/', contRestaurant.updateRestaurant)
router.delete('/', contRestaurant.deleteRestaurant)

module.exports = router
