const express = require('express');
const Usuarios = require("../controllers/usuarioController")
const router = express.Router();

router.post('/register',Usuarios.createUser);
router.post('/login', Usuarios.loginUser);

module.exports = router;

