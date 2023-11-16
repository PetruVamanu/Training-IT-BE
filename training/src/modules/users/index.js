const router = require('express').Router(); 
const userController = require('./users.controller')

router.get('/', userController.getAllUsers);
router.post('/',userController.createNewUsers);

module.exports = router;