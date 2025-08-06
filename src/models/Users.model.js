const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    }, 
    userPhone: {
        type: String,
        required: true,
    }
}, {
    collection: 'users',
    timestamps: true
});

module.exports = mongoose.model('Users', UsersSchema);