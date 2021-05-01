const monggose = require('mongoose')
const Schema = monggose.Schema

const BarangSchema = new Schema({
    NamaBarang: {
        type: String
    },
    JenisBarang: {
        type: String
    },
    Jumlahbarang: {
        type: Number
    },
    HargaModal: {
        type: Number
    },
    HargaJual: {
        type: Number
    },
    tanggal: {
        type:  Date , default : new Date()
    }
})

module.exports = monggose.model('Barang', BarangSchema)