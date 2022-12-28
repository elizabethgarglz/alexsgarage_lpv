const Articulo = require('../models/Articulo');

exports.postArticulo = async (req,res) => {
    try {
        let p;
        //Creamos nustro producto
        d = new Articulo(req.body)
        await d.save();
        res.send(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.getArticulos = async (req,res) => {
    try {
        const d = await Articulo.find()
        res.json(d)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.putArticulo = async (req,res) => {
    try {
        //El name de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        const {name, precio, rebaja, imagen} = req.body;
        let d = await Articulo.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el Articulo"});
        }

        d.name = name;
        d.precio = precio;
        d.rebaja = rebaja;
        d.imagen = imagen;

        d = await Articulo.findOneAndUpdate({_id: req.params.id},d,{new: true});
        res.json(d);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}
exports.getArticulo = async (req,res) => {
    try {
        //El name de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Articulo.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el articulo"});
        }
        res.json(d);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.deleteArticulo = async (req,res) => {
    try {
        //El name de estas variables debe ser el mismo que las 
        //variables que vamos a modificar de la clase Produto
        let d = await Articulo.findById(req.params.id);
        if(!d){
            req.status(404).json({msg:"no existe el articulo"});
        }
        await Articulo.findOneAndRemove({_id: req.params.id})
        res.json({msg: "Articulo eliminado exitosamente"});


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}