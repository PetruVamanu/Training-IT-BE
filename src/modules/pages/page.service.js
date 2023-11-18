const { StatusCodes } = require("http-status-codes");
const usersSchema = require("../users/users.schema");
const PageSchema = require("./pages.schema");

exports.createNewPage = async (req, res, next) => {
  const querry = await usersSchema.find({
    username: req.body.username,
  });
    if (querry.length == 0) {
    throw new Error("There is no user with this username");
  }
  const newPage = new PageSchema({
    userId: querry[0]._id,
    username: querry[0].username,
    title: req.body.title,
    message: req.body.message,
  });
  return newPage;
};
