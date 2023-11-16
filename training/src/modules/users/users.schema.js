//Create the schema for the user
//It's like a patter of an user 

const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
    name :{
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    }
}, {collection: 'users'});

module.exports = model('users', UserSchema);