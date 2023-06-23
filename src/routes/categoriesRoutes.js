import express from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", categoriesController.listarCategorias)
  .get("/categories/:id", categoriesController.listarCategoriaPorId)
  .post("/admin/categories", categoriesController.inserirCategoria)
  .put("/admin/categories/:id", categoriesController.atualizarCategoria)
  .patch("/admin/categories/:id", categoriesController.ativarCategoria)
  .delete("/admin/categories/:id", categoriesController.excluirCategoria)

export default router;
