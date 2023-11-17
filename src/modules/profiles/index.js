const router = require('express').Router({ mergeParams: true });
const profileController = require('./profiles.controller');

router.get('/', profileController.getUserProfile);
router.post('/', profileController.createNewProfile);

module.exports = router;