use("ecomm");

var result = db.products.updateMany(
    {"CATEGORIA": "LIVROS"}, 
    {$set: { "QUANTIDADE EM ESTOQUE": 0}
});

console.log(result);
