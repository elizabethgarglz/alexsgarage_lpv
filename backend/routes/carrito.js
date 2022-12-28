const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

router.post('/', carritoController.addArticCart);
router.delete('/:articId', carritoController.deleteArticCart);
router.get('/', carritoController.getArticsCart);

module.exports = router;