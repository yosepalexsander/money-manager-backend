const express = require('express')

const router = express.Router()

// Controller
const { register, login, checkAuth } = require('../controllers/auth')
const { addCategory, getAllCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categories')
const { addAccount, getAllAccounts, getAccount, updateAccount, deleteAccount } = require('../controllers/accounts')

// Middleware
// import middleware here
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

// Register & Login
router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth);

// Categories
router.post('/categories', auth, addCategory)
router.get('/categories', auth, getAllCategories)
router.get('/categories/:id', auth, getCategory)
router.patch('/categories/:id', auth, updateCategory)
router.delete('/categories/:id', auth, deleteCategory)

// Accounts
router.post('/accounts', auth, addAccount)
router.get('/accounts', auth, getAllAccounts)
router.get('/accounts/:id', auth, getAccount)
router.patch('/accounts/:id', auth, updateAccount)
router.delete('/accounts/:id', auth, deleteAccount)

module.exports = router