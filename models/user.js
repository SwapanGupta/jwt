const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = new Schema({

    email: {
        type: String,
        default: null,
        isemail:true
    },
    password: {
        type: String,
        default: null
    },
},);
const user = mongoose.model('user', UserModel);
module.exports = user;