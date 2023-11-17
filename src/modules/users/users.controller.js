const { StatusCodes } = require("http-status-codes");
const userService = require("./user.service");
const getAllUsers = (req, res) => {
  return res.status(StatusCodes.OK).send({
    success: true,
  });
};

const createNewUser = async (req, res) => {
  try {
    const response = await userService.createNewUser(req, res);
    return res.status(StatusCodes.OK).send({
      success: true,
      message: "Succesfully created new user",
      data: {
        user: response,
      },
    });
  } catch (err) {
    return err.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      succes: false,
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
