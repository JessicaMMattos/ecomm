import CategoryService from './CategoryService.js';
import fs from 'fs';

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

        case '--inserirCategoria':
            const arquivoNovaCategoria = argumentos[3];
            const novaCategoria = await CategoryService.createCategory(arquivoNovaCategoria);
            console.log(novaCategoria);
            break;

        case '--atualizarCategoria':
            const idAtualizarCategoria = argumentos[3];
            const arquivoCategoriaAtualizada = argumentos[4];
            const conteudoCategoriaAtualizada = await fs.promises.readFile(arquivoCategoriaAtualizada, 'utf-8');

            const categoriaAtualizada = await CategoryService.updateCategory(idAtualizarCategoria, conteudoCategoriaAtualizada);
            console.log(categoriaAtualizada);
            break;

        default:
            console.log(`Não foi possível identificar o comando: ${comando}.`);
    }
}

processarComando(process.argv);
