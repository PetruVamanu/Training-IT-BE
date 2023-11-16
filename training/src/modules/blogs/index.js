const router = require('express').Router();
const blogsController = require('./blog.controller');

router.get('/:id', blogsController.getBlogPostById);
router.get('/', blogsController.getAllBlogPosts);
router.post('/', blogsController.postBlogPost);

module.exports = router;