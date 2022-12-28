const { model, Schema } = require("mongoose");

const CarritoSchema = new Schema({
  name: { type: String, required: true},
  imagen: { type: String, required: true },
  amount: { type: Number, required: true },
  rebaja: { type: Number, required: true },
  precio: { type: Number, required: true },
});

module.exports = model("Cart", CarritoSchema);