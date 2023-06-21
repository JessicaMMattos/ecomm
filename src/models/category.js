import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId},
    nome: {
      type: String, 
      minLength: 3, 
      validate: {
        validator: function(validar) {
          return /^[^0-9]{1}[A-Z, a-z, 0-9]$/.test(validar);
        },
        message: props => `${props.value} Nome da categoria inválido.`
      },
    },
    status: {type: String, enum: ["ATIVA", "INATIVA"]}
  }
);

const category = mongoose.model("categories", categoriesSchema)

export default category;