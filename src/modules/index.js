const router = require("express").Router();

const { StatusCodes } = require("http-status-codes");

const userModule = require("./users");

const pageModule = require("./pages");


router.use("/users", userModule);
router.use("/pages", pageModule);  

router.use((req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send({
    succes: false,
    message: `Route  '${req.path}'doesn't exists`,
  });
});

module.exports = router;
