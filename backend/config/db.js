/**const mongoose = require("mongoose");
require("dotenv").config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
        process.exit(1); //detenemos la app 
    }
}

module.exports = conectarDB **/


const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
        (err, res) => {
            if (!err) {
                console.log("*****CONEXION CORRECTA*****");
            } else {
                console.log("*****ERROR EN LA CONEXION*****");
            }
        });
}

module.exports = dbConnect;