const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    author: [{
      type: mongoose.Types.ObjectId,
      ref: 'Author'       // Nombre del modelo
    }],
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
