const router = require('express').Router({ mergeParams: true });
const postController = require('./post.controller');

router.get('/', postController.getUserPosts);
router.post('/:profileId', postController.createNewPost);

module.exports = router;