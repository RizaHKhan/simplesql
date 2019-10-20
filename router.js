const express = require('express')
const mainController = require('./controller/mainController')
const router = express.Router()

router.get('/', mainController.home)
router.get('/createpoststable', mainController.createPostTable)
router.get('/insertPostData', mainController.insertPostData)
router.get('/getData', mainController.getData)
router.get('/single/:id', mainController.getSingle)
router.get('/updatepost/:id', mainController.updatepost)
router.get('/deletepost/:id', mainController.deletepost)

module.exports = router