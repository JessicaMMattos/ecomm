use("ecomm");

const indexNome = db.products.createIndex({ nome: 1 });
const indexCategoria = db.products.createIndex({ categoria: 1 });

console.log(indexNome);
console.log(indexCategoria);
