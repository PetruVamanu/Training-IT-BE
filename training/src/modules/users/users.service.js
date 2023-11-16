const UserSchema = require('./users.schema');

exports.createNewUsers = (req,res,next) => {
    const {username,name,password,isAdmin} = req.body;
    const user = UserSchema.create({
        username,
        name,
        password,
        createdAt: Date.now(),
        isAdmin,
    })

    return user;
}