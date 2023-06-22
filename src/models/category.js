import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId},
    nome: {
      type: String,
      match: /^(?![0-9])[a-zA-Z0-9]{3,}$/,
      required: true
    },
    status: {type: String, enum: ["ATIVA", "INATIVA"]}
  }
);

const category = mongoose.model("categories", categoriesSchema)

export default category;
