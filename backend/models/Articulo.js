const mongoose = require('mongoose');
const ArticuloSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    rebaja:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    inCart:{ 
        type: Boolean, 
        default: false 
    }
});
module.exports = mongoose.model('Articulo',ArticuloSchema);