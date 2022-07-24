const { accounts } = require("../../models");

// Add new account
exports.addAccount = async (req, res) => {
    try {

        const data = {
            name: req.body.name,
            userId: req.user.id
          };

        await accounts.create(data)

        res.send({
            status: 'success',
            message: 'Add account finished'
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Fetch all account
exports.getAllAccounts = async (req, res) => {
    try {

        const userId = req.user.id

        const accountsData = await accounts.findAll({
            where: {
                userId
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: accountsData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Fetch account by id
exports.getAccount = async (req, res) => {
    try {
        const { id } = req.params

        const accountData = await accounts.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: accountData
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

// Update account by id
exports.updateAccount = async (req, res) => {
    try {
        const { id } = req.params

        const data = {
            name: req.body.name
        }


        await accounts.update(data, {
            where: {
                id
            }
        })

        const accountData = await accounts.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            message: `Update account id: ${id} finished`,
            data: {
                account: accountData
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

// Detele account by id
exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params

        await accounts.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            message: `Delete account id: ${id} finished`
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}