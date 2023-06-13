import CategoryService from './CategoryService.js';

async function processarComando(argumentos) {
    const comando = argumentos[2];

    switch (comando) {
        case '--listarCategorias':
            const categorias = await CategoryService.findCategories();
            console.log(categorias);
            break;

        case '--recuperarCategoriaPorId':
            const idCategoria = argumentos[3];
            const categoriaEspecifica = await CategoryService.findCategoryById(idCategoria);
            console.log(categoriaEspecifica);
            break;

        default:
            console.log(`Não foi possível identificar o comando: ${comando}.`);
    }
}

processarComando(process.argv);
