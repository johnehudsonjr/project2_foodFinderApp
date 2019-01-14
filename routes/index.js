// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')
const addFoodController = require('../controllers/addFoodController')
const subscriberListController = require('../controllers/subscriberListController')


// router.get('/subscribe', subscriberListController.index)
// router.post('/subscribe', subscriberListController.create)





router.get('/', shareLocationController.index)
router.get('/sharefood', shareLocationController.index2)
router.get('/sharefood/new', shareLocationController.new)
router.get('/findfood', shareLocationController.new2) 
router.post('/', shareLocationController.create) 
router.get('/', shareLocationController.show) 
router.get('/:id', shareLocationController.show)
router.get('/:id/update', shareLocationController.edit)
router.patch('/:id', shareLocationController.update)
router.delete('/:id', shareLocationController.delete)


// Add Food
router.get('/:id/addfood', addFoodController.show)
router.post('/:id/addfood', addFoodController.create)

// TESTING
router.delete('/:id/:newFood', addFoodController.delete)
// TESTING


module.exports = router