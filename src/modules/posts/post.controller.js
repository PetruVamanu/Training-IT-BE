const { StatusCodes } = require('http-status-codes');
const postService = require('./post.service');

const getUserPosts = async (req, res) => {
    const userId = req.params.id;
    try {
        const posts = await postService.getUserPosts(userId);
        return res.status(StatusCodes.OK).send({
            success: true,
            posts
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false
        })
    }
}

const createNewPost = async (req, res) => {
    const userId = req.params.id;
    const profileId = req.params.profileId;
    const { text } = req.body;
    try {
        const post = await postService.createNewPost(userId, profileId, text);
        return res.status(StatusCodes.OK).send({
            success: true,
            post
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            success: false,
            error: err
        })
    }
}

module.exports = { getUserPosts, createNewPost };