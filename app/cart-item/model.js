const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const cartItemSchema = Schema({
    name: {
        type: String,
        minlength: [4, 'Panjang nama makanan minimal 4 karakter'],
        required: [true, 'Nama harus diisi']
    },

    qty: {
        type: Number,
        required: [true, 'Qty harus diisi'],
        min: [1, 'Minimal 1 qty']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
});


module.exports = model('CartItem', cartItemSchema);