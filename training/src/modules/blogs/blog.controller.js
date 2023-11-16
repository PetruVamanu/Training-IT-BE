const {StatusCodes} = require('http-status-codes');
const BlogPostSchema = require('./blog.schema');

const getAllBlogPosts = async (req, res) => 
{
    try {
        const blog_posts = await BlogPostSchema.find();
        res.status(StatusCodes.OK).send({
            success: true,
            posts: blog_posts
        })
    } catch (error) {
        res.status(StatusCodes.InternalServerError).send({
                success: false,
                error:error.message,
        })
    }
}

const getBlogPostById = async (req, res) =>
{
    try {    
        const params = req.params;
        const blog = await BlogPostSchema.findById(params.id);

        if(!blog) 
            return res.status(StatusCodes.NOT_FOUND).send({
                status: true,
                message: 'Blog post not found'
            })
        
        return res.status(StatusCodes.OK).send({
            status: true,
            blog: blog,
        })        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            status: false,
            error: error
        })
    }
}

const postBlogPost = async (req, res) =>
{
    const {title,description,author} = req.body;

    const blog = await BlogPostSchema.create({
        title,
        description,
        author,
        createdAt: Date.now(),
    })

    try {  
        return res.status(StatusCodes.OK).send({
            status: true,
            blog: blog,
        })   
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
            status: false,
            error: error
        })
    }
}

module.exports = {
    getAllBlogPosts,
    getBlogPostById,
    postBlogPost
}