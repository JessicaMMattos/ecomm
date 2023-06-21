import express from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", categoriesController.listarCategorias)
  .post("/admin/categories", categoriesController.inserirCategoria)

export default router;
