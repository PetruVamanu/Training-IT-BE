const router = require("express").Router();

const { StatusCodes } = require("http-status-codes");
const userModule = require("./users");

router.use("/users", userModule);

router.use((req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send({
    succes: false,
    message: `Route  '${req.path}'doesn't exists`,
  });
});

module.exports = router;
