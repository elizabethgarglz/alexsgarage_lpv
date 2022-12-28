const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //Constante de node que nos da la ruta absoluta del archivo en el que estamos

/**
 * Recibe el nombre de un archivo, incluyendo su extensión
 * Genera un array con dos cadenas [nombre, extensión]
 * Con shift() tomamos el primero
 * @param {*} fileName 
 * @returns 
 */
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}
/**
 * Con fs vamos a leer el directorio de manera asíncrona 
 * La ruta es el nombre dek archivo que obtenemos
 * name es el nombre del archivo que completa la ruta
 * file es el nombre del archivo
 */
fs.readdirSync(PATH_ROUTES).filter((fileName) => {
    const name = removeExtension(fileName)
    if (name !== 'index') {
        router.use(`/${name}`, require(`./${fileName}`));
    }
});

module.exports = router;