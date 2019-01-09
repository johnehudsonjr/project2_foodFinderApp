// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')



router.get('/', shareLocationController.index)
router.get('/sharefood', shareLocationController.new)
router.post('/', shareLocationController.create)
router.get('/:id', shareLocationController.show)
router.delete('/:id',shareLocationController.delete)

// findfood
// router.get('/findfood', shareLocationController.)


module.exports = router