require("dotenv").config(); // para usar process.env
const express = require("express");
const cors =  require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const dbConnect = require("./config/db");

const port = process.env.PORT || 3001;

app.use('/api',require('./routes'));

app.listen(port,()=>{
    console.log('Tu app esta lista por http://localhost:' + port);
});

dbConnect();