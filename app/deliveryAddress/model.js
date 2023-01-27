const { Schema, model } = require('mongoose');

const deliveryAddressSchema = Schema({
    nama: {
        type: String,
        required: [true, 'Nama alamat harus diisi'],
        maxLength: [255, 'Panjang maksimal nama alamat 255 karakter']
    },

    kelurahan: {
        type: String,
        required: [true, 'Nama kelurahan harus diisi'],
        maxLength: [255, 'Panjang maksimal nama kelurahan 255 karakter']
    },

    kecamatan: {
        type: String,
        required: [true, 'Nama kecamatan harus diisi'],
        maxLength: [255, 'Panjang maksimal nama kecamatan 255 karakter']
    },

    kabupaten: {
        type: String,
        required: [true, 'Nama kabupaten harus diisi'],
        maxLength: [255, 'Panjang maksimal nama kabupaten 255 karakter']
    },

    provinsi: {
        type: String,
        required: [true, 'Nama provinsi harus diisi'],
        maxLength: [255, 'Panjang maksimal nama provinsi 255 karakter']
    },

    detail: {
        type: String,
        required: [true, 'Detail alamat harus diisi'],
        maxLength: [1000, 'Panjang maksimal detail alamat 1000 karakter']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {timestamps: true});


module.exports = model('DeliveryAddress', deliveryAddressSchema);