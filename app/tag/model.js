// const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let tagSchema = Schema ({
    name: {
        type: String,
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'panjang nama kategori maximal 20 karakter'],
        required: [true, 'Nama kategori harus diisi']
    }
})

module.exports = model('Tag', tagSchema);