const ProfileSchema = require('./profiles.schema')
const UserSchema = require('../users/users.schema')

module.exports.createNewProfile = async (userId, imageURL) => {
    const user = await UserSchema.findById(userId);
    if (!user) {
        throw new Error('user id not found');
    }
    const profile = new ProfileSchema({ imageURL, user: user.id });
    user.profile = profile;

    await user.save();
    await profile.save();
    console.log(profile)
    return await profile.populate('user');
}

module.exports.getProfile = async (userId) => {
    const profile = await ProfileSchema.find({ user: userId }).populate('user');
    return profile;
}