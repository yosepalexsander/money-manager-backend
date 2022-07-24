const { transactions, accounts, categories } = require("../../models");

// Add new transaction for income
exports.addTransactionIncome = async (req, res) => {
    try {

        const data = {
            type: "Income",
            date: req.body.date,
            accountId: req.body.account,
            categoryId: req.body.category,
            amount: req.body.amount,
            userId: req.user.id
        };

        await transactions.create(data)

        res.send({
            status: 'success',
            message: 'Add transaction finished'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Add new transaction for expenses
exports.addTransactionExpenses = async (req, res) => {
    try {

        const data = {
            type: "Expenses",
            date: req.body.date,
            accountId: req.body.account,
            categoryId: req.body.category,
            amount: req.body.amount,
            userId: req.user.id
        };

        await transactions.create(data)

        res.send({
            status: 'success',
            message: 'Add transaction finished'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
    try {

        const userId = req.user.id

        const transactionsData = await transactions.findAll({
            where: {
                userId
            },
            include: [
                {
                    model: accounts,
                    as: 'accounts',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                },
                {
                    model: categories,
                    as: 'categories',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt','accountId','categoryId']
            }
        })

        res.send({
            status: 'success',
            data: transactionsData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Fetch transaction by id
exports.getTransaction = async (req, res) => {
    try {
        const { id } = req.params

        const transactionData = await transactions.findOne({
            where: {
                id
            },
            include: [
                {
                    model: accounts,
                    as: 'accounts',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                },
                {
                    model: categories,
                    as: 'categories',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt','accountId','categoryId']
            }
        })

        res.send({
            status: 'success',
            data: transactionData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Update transaction by id
exports.updateTransaction = async (req, res) => {
    try {
        const { id } = req.params

        const data = {
            date: req?.body?.date,
            accountId: req?.body?.account,
            categoryId: req?.body?.category,
            amount: req?.body?.amount,
            userId: req?.user?.id
        }


        await transactions.update(data, {
            where: {
                id
            }
        })

        const transactionData = await transactions.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            message: `Update transaction id: ${id} finished`,
            data: {
                transactionData
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Detele transaction by id
exports.deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params

        await transactions.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Delete transaction id: ${id} finished`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}