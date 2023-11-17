const { model, Schema } = require('mongoose');
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    imageURL: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        }
    ]

}, { collection: 'profiles' })

module.exports = model('profiles', ProfileSchema);