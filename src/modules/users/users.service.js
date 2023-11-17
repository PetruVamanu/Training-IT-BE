const UserSchema = require('./users.schema')

module.exports.createNewUser = async (username, password, name, isAdmin) => {
    const user = new UserSchema({ username, password, name, isAdmin });
    console.log(user);
    await user.save();
    return user
}

module.exports.getAllUsers = async () => {
    const users = await UserSchema.find({}, { password: 0 });
    return users;
}