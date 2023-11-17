const ProfileSchema = require('../profiles/profiles.schema')
const UserSchema = require('../users/users.schema')
const PostSchema = require('./post.schema')

module.exports.createNewPost = async (userId, profileId, text) => {
    const user = await UserSchema.findById(userId);
    const profile = await ProfileSchema.findById(profileId);
    if (!user || !profile) {
        throw new Error('user id not found');
    }
    const post = new PostSchema({ author: user.id, profile: profile.id, text })
    user.posts.push(post);
    profile.posts.push(post);
    await user.save();
    await profile.save();
    await post.save();
    console.log(post)
    return await profile.populate('user');
}

module.exports.getUserPosts = async (userId) => {
    const user = await UserSchema.findById(userId).populate('posts');
    return user.posts;
}