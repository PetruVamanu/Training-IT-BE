const { StatusCodes } = require('http-status-codes');
const profileService = require('./profiles.service');

const getUserProfile = async (req, res) => {
    const userId = req.params.id;
    try {
        const profile = await profileService.getProfile(userId);
        return res.status(StatusCodes.OK).send({
            success: true,
            profile
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false
        })
    }
}

const createNewProfile = async (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const { imageURL = '' } = req.body;
    try {
        const profile = await profileService.createNewProfile(userId, imageURL);
        return res.status(StatusCodes.OK).send({
            success: true,
            profile
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            error: err
        })
    }
}

module.exports = { getUserProfile, createNewProfile };