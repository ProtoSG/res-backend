const { Router } = require('express')
const { postVentaPlato, getById, deleteVP, updateVP } = require("../controllers/venta-plato")

const router = Router()

router
    .put('/:idVentaPlato', updateVP)
    .post('/', postVentaPlato)
    .get('/:id', getById)
    .delete('/:idVentaPlato', deleteVP);

module.exports = router