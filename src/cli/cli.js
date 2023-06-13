import CategoryService from './CategoryService.js';

async function processarComando(argumentos) {
    const comando = argumentos[2];

    switch (comando) {
        case '--listarCategorias':
            const categorias = await CategoryService.findCategories();
            console.log(categorias);
            break;
    }
}

processarComando(process.argv);
