use("ecomm");

var produtos = db.products.find({$or: [{"CATEGORIA": "LIVROS"}, {"CATEGORIA": "CELULARES"}]}, );

console.log(produtos);
