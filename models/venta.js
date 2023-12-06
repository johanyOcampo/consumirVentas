const {Schema, model } = require('mongoose')

const VentaSchema = ({
    nombreCliente: {
        type: String,
        unique: true,
        required: [true, 'El nombre de usuario es requirido']
    },

    documento: {
        type: String,
        required: [true, 'El documento es requeridod'],
        min: [4, 'El password debe contener mínimo 4 caracteres'],
        max: [10, 'El password debe contener máximo 10 caracteres']
    },


    correo: {
        type: String,
        required: [true, 'El correo es requeridod'],
    },

    telefono: {
        type: String,
        required: [true, 'El telefono es requerido'],
    },

    
    producto: {
        type: String,
        required: [true, 'El producto es requerido'],
        enum: ['cuerdas', 'proteina', 'mancuernas'],
    },

    precioDolar: {
        type: Number,
    },

    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('ventas', VentaSchema )



