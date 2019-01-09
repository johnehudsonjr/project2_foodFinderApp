// Requirement information
const express = require('express')
const router = express.Router()
const shareLocationController = require('../controllers/shareLocationController')



router.get('/', shareLocationController.index)
router.post('/', shareLocationController.create)
router.get('/sharefood', shareLocationController.new)
router.get('/:id', shareLocationController.show)

router.delete('/:id',shareLocationController.delete)




module.exports = router