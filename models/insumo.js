const {model, Schema} = require('mongoose');

const insumoSchema =  new Schema({
    code: {
        type: Number,
        required :[true, 'The code is required']
    },
    nameInsumo: {
        type:String, //tipo dato
        unique: true, //unico
        required :[true, 'The nameInsumo is required'], // requerido
        maxlength:[40, 'Max 40 characters'], //tamaño maximo
        minlength:[2, 'Min 2 characters'] // tamaño 5 characterts
    },
    quantity: {
        type:Number, //tipo dato
        required :[true, 'The color is required'], // requerido
        min: [0, 'The cantidad must be greater than or equal to 0'] // mínimo valor 0
    },
    price: {
        type: Number, //tipo dato
        required :[true, 'The model is required'], // requerido
        min: [0, 'The price must be greater than or equal to 0'] // mínimo valor 0
    }
})

module.exports = model("Insumo", insumoSchema, "insumo") // crear la coleccion  si no existe y 