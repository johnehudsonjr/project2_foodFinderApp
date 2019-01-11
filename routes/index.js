// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')
const addFoodController = require('../controllers/addFoodController')

// findfood
router.get('/findfood', shareLocationController.index2)
router.get('/findfood', shareLocationController.new2)


// Share Location
router.get('/', shareLocationController.index)
router.get('/sharefood', shareLocationController.new)
router.post('/', shareLocationController.create) 




router.get('/:id', shareLocationController.show)
router.get('/:id/update', shareLocationController.edit)
router.patch('/:id', shareLocationController.update)
router.delete('/:id', shareLocationController.delete)

// Add Food
router.get('/:id/addfood', addFoodController.show)
router.post('/:id/addfood', addFoodController.create)

// TESTING
router.delete('/:id', addFoodController.delete)
// TESTING


module.exports = router