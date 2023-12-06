const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getVenta, postVenta, putVenta, deleteVenta} = require('../controllers/venta') //Importando el controlador

route.get('/', getVenta)

route.post('/', postVenta)

route.put('/', putVenta)

route.delete('/', deleteVenta)

module.exports = route