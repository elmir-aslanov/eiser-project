const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String,
        required: [true, 'Please add an image URL']
    },
    category: {
        type: String,
        required: [true, 'Please add a category']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
