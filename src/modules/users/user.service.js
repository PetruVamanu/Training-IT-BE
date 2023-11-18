const UserSchema = require("./users.schema");

exports.createNewUser = (req, res, next) => {
  const newUser = new UserSchema({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    isAdmin: false,
  });
  return newUser;
};
