import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router
  .get("/products", productsController.listarProdutos)
  .get("/products/:id", productsController.listarProdutoPorId)
  .post("/admin/products", productsController.inserirProduto)
  .put("/admin/products/:id", productsController.atualizarProduto)
  .delete("/admin/products/:id", productsController.excluirProduto)

export default router;
