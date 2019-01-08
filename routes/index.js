// Requirement information
const express = require('express')
const router = express.Router()
// const applicationController = require('../controllers/applicationController')
const shareFoodController = require('../controllers/shareFoodController')



router.get('/', shareFoodController.index)
router.post('/', shareFoodController.create)
router.get('/sharefood', shareFoodController.new)






module.exports = router