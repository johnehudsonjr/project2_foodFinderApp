// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')



router.get('/', shareLocationController.index)
router.post('/', shareLocationController.create)
router.get('/sharefood', shareLocationController.new)






module.exports = router