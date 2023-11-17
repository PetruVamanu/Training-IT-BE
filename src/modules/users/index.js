const router = require('express').Router();
const userController = require('./users.controller');

router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);

module.exports = router;