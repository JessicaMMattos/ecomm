import categories from "../models/category.js";
import mongoose from "mongoose";

class categoriesController {

  static listarCategorias = async (_req, res) => {
    const listarCategorias = await categories.find();
    res.status(200).json(listarCategorias);
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      let id = req.params.id;

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
      res.status(201).json(novaCategoria);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Erro ao cadastrar nova categoria.` });
    }
  };

  static atualizarCategoria = async (req, res) => {
    try{
      let id = req.params.id;

      await categories.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).json({ message: 'Categoria atualizada com sucesso.' });

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Erro, categoria não encontrada.` });
    }
  }

  static excluirCategoria = async (req, res) => {
    try{
      let id = req.params.id;

      await categories.findByIdAndDelete(id);
      res.status(200).json({message: 'Categoria removida com sucesso.'})

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Erro, categoria não encontrada.` });
    }
  }

  static ativarCategoria = async (req, res) => {
    try{
      let id = req.params.id;

      await categories.findByIdAndUpdate(id, {status: "ATIVA"});
      res.status(200).json({message: 'Categoria ativa com sucesso.'});

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Erro, categoria não encontrada.` });
    }
  }

}

export default categoriesController;
