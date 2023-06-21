import categories from "../models/category.js";

class categoriesController {

  static listarCategorias = async (_req, res) => {
    const listarCategorias = await categories.find();
    res.status(200).json(listarCategorias);
  };

}

export default categoriesController;
