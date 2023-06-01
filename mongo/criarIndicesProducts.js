use("ecomm");

var indexNome = db.products.createIndex({ nome: 1 });
var indexCategoria = db.products.createIndex({ categoria: 1 });

console.log(indexNome);
console.log(indexCategoria);
