const { StatusCodes } = require("http-status-codes");
const pageService = require("./page.service");
const pagesSchema = require("./pages.schema");

const getAllPages = async (req, res) => {
  const pages = await pagesSchema.find();
  return res.status(StatusCodes.OK).send({
    success: true,
    pages,
  });
};

const createNewPage = async (req, res) => {
  try {
    const response = await pageService.createNewPage(req, res);
    response.save();
    return res.status(StatusCodes.OK).send({
      success: true,
      message: "Succesfully created new page",
      data: {
        page: response,
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
  getAllPages,
  createNewPage,
};
