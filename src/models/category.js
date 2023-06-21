import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    status: {type: String}
  }
)

const category = mongoose.model("categories", categoriesSchema)

export default category;