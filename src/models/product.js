import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId},
    nome: {
      type: String,
      match: /^(?![0-9])[a-zA-Z0-9]{3,}$/,
      required: true
    },
    descricao: {type: String},
    slug: {
      type: String,
      match: /^[a-zA-Z0-9-]+$/
    },
    preco: {
    type: mongoose.Schema.Types.Decimal128, 
    validate: {
      validator(value) {
        return value > 0;
      }},
    },
    estoque: {type: Number, min: 1, max: 10000},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categories'}
  }
);

const product = mongoose.model("products", productsSchema)

export default product;
