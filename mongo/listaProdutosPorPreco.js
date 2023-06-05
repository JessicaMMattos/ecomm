use("ecomm");

const produtos = db.products.find(
    {preco: {$gte: 1000, $lte: 2000}},
    {nome: 1, preco: 1}
);

console.log(produtos);
