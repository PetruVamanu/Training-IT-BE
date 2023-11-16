//here we have all the requests
//GET, POST

const {StatusCodes} = require('http-status-codes');

const userService = require('./users.service'); //in users.service we have all the utilies that we need
const UserSchema = require('./users.schema');

const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({});
        res.status(StatusCodes.OK).send({
            message: users,
            success: true,
        })
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).send({
            message: error,
            success: false
        })
    }
}

const createNewUsers = async (req, res) => {
    try {
        const response = await userService.createNewUsers(req,res);
        return res.status(StatusCodes.OK).send({
            success: true,
            message: "Successfully created new user",
            data: {
                user: response,
            }
        })   
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: true,
            message: error.message
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUsers
}