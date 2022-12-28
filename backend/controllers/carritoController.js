const Cart = require('../models/Cart');
const Articulo = require('../models/Articulo');

exports.addArticCart = async (req, res) => {
  const { name, imagen, precio, rebaja } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnArticulos = await Articulo.findOne({ name });

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = name !== "" && imagen !== "" && precio !== "" && rebaja !== "";

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({ name });

  /* Si no tenemos el Articulo */
  if (!estaEnArticulos) {
    res.status(400).json({
      mensaje: "Este Articulo no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (noEstaVacio && !estaEnElCarrito) {
    const c = new Cart({ name, imagen, amount: 1, rebaja, precio});
    console.log(c?._id);

    c.save();
    res.json({mensaje: `El articulo fue agregado al carrito`});


    /* Y actualizamos la prop inCart: true en nuestros Articulo */
    await Articulo.findByIdAndUpdate(
      estaEnArticulos?._id,
      { inCart: true, name, imagen, precio, rebaja },
      { new: true }
    )
      .then((articulo) => {
        	
      })
      .catch((error) => console.error(error));
    /* Y si esta en el carrito avisamos */
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El Articulo ya esta en el carrito",
    });
  }


};


exports.getArticsCart = async (req, res) => {
  try {
    const articsCart = await Cart.find();
    res.json(articsCart);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.deleteArticCart = async (req,res) => {

  const { articId } = req.params;
  
  const articInCart = await Cart.findById(articId);

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { name, imagen, precio, rebaja, _id } = await Articulo.findOne({
    name: articInCart.name,
  });

  /* Buscamos y eliminamos el producto con la id */
  await Cart.findByIdAndDelete(articId);

  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */
  await Articulo.findByIdAndUpdate(
    _id,
    { inCart: false, name, imagen, precio, rebaja },
    { new: true }
  )
    .then((artic) => {
      res.json({
        mensaje: `El articulo ${artic.name} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
  
}

exports.deleteArticCartName = async (req,res) => {

  const articInCart = await Cart.findOne(req.body)

  const { name, imagen, precio, rebaja, _id } = await Articulo.findOne({
    name: articInCart.name,
  });

  await Cart.findOneAndDelete(articInCart);

  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */
  
  await Articulo.findByIdAndUpdate(
    _id,
    { inCart: false, name, imagen, precio, rebaja },
    { new: true }
  )
    .then((artic) => {
      res.json({
        mensaje: `El articulo ${artic.name} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
  
}