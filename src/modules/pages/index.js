const router = require("express").Router();
const pageController = require("./pages.controller");

router.get("/", pageController.getAllPages);
router.post("/", pageController.createNewPage);
module.exports = router;
