export default class CategoryService {

    static async listaCategoria(response) {

        const status = response.status;

        console.log(`response status: ${status}`);

        if(status === 200){
            const listar = await response.json();   
            return listar;
            
        } else {
            const descricaoErro = response.statusText;
            return `Erro: ${descricaoErro}`;
        }    
    }
    
    static async findCategories() {

        const response = await fetch("http://localhost:3000/categories");
        const listarCategorias = this.listaCategoria(response);

        return listarCategorias;  
    }

    static async findCategoryById(idCategoria) {

        const response = await fetch(`http://localhost:3000/categories/${idCategoria}`);
        const categoria = this.listaCategoria(response);
        
        return categoria;
    }
}