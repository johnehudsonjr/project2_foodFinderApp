// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')




// findfood
router.get('/findfood', shareLocationController.index2)
router.get('/findfood', shareLocationController.new2)


// MAIN (Nothing can go below the get and delete!)
router.get('/', shareLocationController.index)
router.get('/sharefood', shareLocationController.new)
router.post('/', shareLocationController.create) 
router.get('/:id', shareLocationController.show)
router.delete('/:id',shareLocationController.delete)

// findfood



module.exports = router