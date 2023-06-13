export default class CategoryService {
    
    static async findCategories() {

        const response = await fetch("http://localhost:3000/categories");
        const status = response.status;

        console.log(`response status: ${status}`);

        if(status == 200){
            const listarCategorias = await response.json();   
            return listarCategorias;
            
        } else {
            return "Erro, não foi possível encontrar a lista de categorias!";
        }    
    }

    static async findCategoryById(idCategoria) {

        const response = await fetch(`http://localhost:3000/categories/${idCategoria}`);
        const status = response.status;

        console.log(`response status: ${status}`);

        if(status == 200){
            const categoria = await response.json();   
            return categoria;
            
        } else {
            return "Erro, não foi possível encontrar a categoria.";
        }    
    }
}
