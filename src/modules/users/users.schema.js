const { model, Schema } = require('mongoose');
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'profiles'
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'users' })

module.exports = model('users', UserSchema);