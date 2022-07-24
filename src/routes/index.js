const express = require('express')

const router = express.Router()

// Controller
const { register, login, checkAuth } = require('../controllers/auth')
const { addCategory, getAllCategoriesIncome, getAllCategoriesExpenses, getCategory, updateCategory, deleteCategory } = require('../controllers/categories')
const { addAccount, getAllAccounts, getAccount, updateAccount, deleteAccount } = require('../controllers/accounts')
const { addTransactionIncome, addTransactionExpenses, getAllTransactions, getTransaction, updateTransaction, deleteTransaction } = require('../controllers/transactions')

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
router.get('/categories/income', auth, getAllCategoriesIncome)
router.get('/categories/expenses', auth, getAllCategoriesExpenses)
router.get('/categories/:id', auth, getCategory)
router.patch('/categories/:id', auth, updateCategory)
router.delete('/categories/:id', auth, deleteCategory)

// Accounts
router.post('/accounts', auth, addAccount)
router.get('/accounts', auth, getAllAccounts)
router.get('/accounts/:id', auth, getAccount)
router.patch('/accounts/:id', auth, updateAccount)
router.delete('/accounts/:id', auth, deleteAccount)

// Transactions
router.post('/transactions/income', auth, addTransactionIncome)
router.post('/transactions/expenses', auth, addTransactionExpenses)
router.get('/transactions', auth, getAllTransactions)
router.get('/transactions/:id', auth, getTransaction)
router.patch('/transactions/:id', auth, updateTransaction)
router.delete('/transactions/:id', auth, deleteTransaction)

module.exports = router