const express = require('express')
const router = express.Router()

// ou
// const router = require('express').Router()

const UserController = require('../controllers/UserController')
const verifyToken = require('../helpers/verify-token')
const {imageUpload} = require('../helpers/image-upload')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/:id', UserController.getUserById)
router.patch('/:id', verifyToken, imageUpload.single("image"), UserController.editUser)

module.exports = router