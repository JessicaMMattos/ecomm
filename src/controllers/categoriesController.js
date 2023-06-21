import categories from "../models/category.js";
import mongoose from "mongoose";

class categoriesController {

  static listarCategorias = async (_req, res) => {
    const listarCategorias = await categories.find();
    res.status(200).json(listarCategorias);
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const listarCategoriaPorId = await categories.findById(id);
      res.status(200).json(listarCategoriaPorId);        

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Id da Categoria não localizado.` });
    }
  };

  static inserirCategoria = async (req, res) => {
    try {
      let novaCategoria = new categories(req.body);
      novaCategoria._id = new mongoose.Types.ObjectId();

      await novaCategoria.save();
      res.status(201).send(novaCategoria.toJSON());

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Erro ao cadastrar nova categoria.` });
    }
  };

}

export default categoriesController;
