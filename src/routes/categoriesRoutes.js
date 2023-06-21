import express from "express";
import categoriesController from "../controllers/categoriesController.js";

const router = express.Router();

router
  .get("/categories", categoriesController.listarCategorias)

export default router;
