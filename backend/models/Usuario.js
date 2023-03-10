const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//mongoose.set('useCreateIndex', true);
const UsuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  }
}, {
    timestamps: true
  });

module.exports = UsuarioSchema;