import CategoryService from './CategoryService.js';
import fs from 'fs';

async function processarComando(argumentos) {
    const comando = argumentos[2];
    let idCategoria;
    let arquivoNovaCategoria, arquivoCategoriaAtualizada, conteudoCategoriaAtualizada;
    let categorias, categoriaEspecifica, novaCategoria, categoriaAtualizada, categoriaExcluida;

    switch (comando) {
        case '--listarCategorias':
            categorias = await CategoryService.findCategories();
            console.log(categorias);
            break;

        case '--recuperarCategoriaPorId':
            idCategoria = argumentos[3];
            categoriaEspecifica = await CategoryService.findCategoryById(idCategoria);
            console.log(categoriaEspecifica);
            break;

        case '--inserirCategoria':
            arquivoNovaCategoria = argumentos[3];
            novaCategoria = await CategoryService.createCategory(arquivoNovaCategoria);
            console.log(novaCategoria);
            break;

        case '--atualizarCategoria':
            idCategoria = argumentos[3];
            arquivoCategoriaAtualizada = argumentos[4];
            conteudoCategoriaAtualizada = await fs.promises.readFile(arquivoCategoriaAtualizada, 'utf-8');

            categoriaAtualizada = await CategoryService.updateCategory(idCategoria, conteudoCategoriaAtualizada);
            console.log(categoriaAtualizada);
            break;

        case '--excluirCategoria':
            idCategoria = argumentos[3];
            categoriaExcluida = await CategoryService.deleteCategory(idCategoria);
            console.log(categoriaExcluida);
            break;

        default:
            console.log(`Não foi possível identificar o comando: ${comando}.`);
    }
}

processarComando(process.argv);
