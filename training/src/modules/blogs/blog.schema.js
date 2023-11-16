const {Schema, model} = require('mongoose')

const BlogPostSchema = new Schema({ 
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    }
}, {collection:"blog-post"})


module.exports = model("blogs",BlogPostSchema);