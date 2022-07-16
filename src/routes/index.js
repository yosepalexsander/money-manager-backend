const express = require('express')

const router = express.Router()

// Controller
const { register, login, checkAuth } = require('../controllers/auth')

// Middleware
// import middleware here
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// Register & Login
router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth);

module.exports = router