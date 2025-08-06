const mongoose = require('mongoose');

const CommandsSchema = new mongoose.Schema({
    command: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    commandProducts: [
        {
            products: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    commandStatus: {
        type: String,
        enum: ['Aberta', 'Finalizada', 'Cancelada'],
        default: 'Aberta'
    }
}, {
    collection: 'commands',
    timestamps: true
});

module.exports = mongoose.model('Commands', CommandsSchema);