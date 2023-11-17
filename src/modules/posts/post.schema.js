const { model, Schema } = require('mongoose');
const PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    profile:
    {
        type: Schema.Types.ObjectId,
        ref: 'profiles'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

}, { collection: 'posts' })

module.exports = model('posts', PostSchema);