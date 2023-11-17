const { StatusCodes } = require('http-status-codes');
const userService = require('./users.service');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(StatusCodes.OK).send({
            success: true,
            users
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false
        })
    }
}

const createNewUser = async (req, res) => {
    try {
        const { username, password, name, isAdmin = false } = req.body;
        console.log(username, password, name);
        const user = await userService.createNewUser(username, password, name, isAdmin);
        return res.status(StatusCodes.OK).send({
            success: true,
            user: user
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false
        })
    }
}

module.exports = { getAllUsers, createNewUser };