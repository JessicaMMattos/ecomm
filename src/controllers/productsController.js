import products from "../models/product.js";
import mongoose from "mongoose";

class productsController {

  static listarProdutos = async (_req, res) => {
    const listarProdutos = await products.find();
    res.status(200).json(listarProdutos);
  };

  static listarProdutoPorId = async (req, res) => {
    try {
      let id = req.params.id;

      const listarProdutoPorId = await products.findById(id);
      res.status(200).json(listarProdutoPorId);        

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Id do Produto não localizado.` });
    }
  };

  static inserirProduto = async (req, res) => {
    try {
      let novoProduto = new products(req.body);
      novoProduto._id = new mongoose.Types.ObjectId();

      await novoProduto.save();
      res.status(201).json(novoProduto);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Erro ao cadastrar novo Produto.` });
    }
  };

  static atualizarProduto = async (req, res) => {
    try{
      let id = req.params.id;

      await products.findByIdAndUpdate(id, {$set: req.body});
      res.status(200).json({ message: 'Produto atualizado com sucesso.' });

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Erro, Produto não encontrado.` });
    }
  }

  static excluirProduto = async (req, res) => {
    try{
      let id = req.params.id;

      await products.findByIdAndDelete(id);
      res.status(200).json({message: 'Produto removido com sucesso.'})

    } catch (error) {
      res.status(400).json({ message: `${error.message} - Erro, Produto não encontrado.` });
    }
  }
}

export default productsController;
