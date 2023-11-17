const router = require('express').Router();
const { StatusCodes } = require('http-status-codes');
const userModule = require('./users')
const profileModule = require('./profiles')
const postModule = require('./posts')

router.use('/users', userModule);
router.use('/users/:id/profile', profileModule);
router.use('/posts/:id', postModule);
router.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).send({
        success: false,
        message: `'Route ${req.path} not found`
    })
})

module.exports = router;