use("ecomm");

const produtos = db.products.find({estoque: { $gte: 3}}, {nome: 1, estoque: 1});

console.log(produtos);
