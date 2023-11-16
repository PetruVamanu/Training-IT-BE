const router = require('express').Router();
const {StatusCodes} = require('http-status-codes');
const userModule = require('./users');
const blogModule = require('./blogs');

router.use('/users', userModule);
router.use('/blogs', blogModule);

router.use((req,res) => {
    return res.status(StatusCodes.NOT_FOUND).send(
        {
            success: false,
            message: `Route ${req.path} not found`
        }
    )
})

module.exports = router; 