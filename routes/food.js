var express = require('express');
var router = express.Router();
var contFood = require('../controller/food')

router.get('/', contFood.getAll)
router.post('/', contFood.createFood)
router.put('/', contFood.updateFood)
router.delete('/', contFood.deleteFood)

module.exports = router
