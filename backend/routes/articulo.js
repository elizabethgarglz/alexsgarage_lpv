const express = require('express');
const router = express.Router();
const articuloController= require("../controllers/articuloController")

router.post('/altaArticulo', articuloController.postArticulo);
router.get('/', articuloController.getArticulos);
router.put('/:id', articuloController.putArticulo);
router.get('/:id', articuloController.getArticulo);
router.delete('/:id', articuloController.deleteArticulo);

module.exports = router;