const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    priceProduct: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    collection: 'products',
    timestamps: true
});

module.exports = mongoose.model('Products', ProductsSchema);