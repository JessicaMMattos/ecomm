use("ecomm");

let produto = db.products.findOne({nome:"Galaxy Tab S8"});
const estoqueAtual = produto.estoque;

console.log(`O estoque é ${estoqueAtual}.`);

if(estoqueAtual >= 2) {
    db.products.updateOne(
        {nome:"Galaxy Tab S8"},
        {$inc:{estoque: -2}}
    );

    produto = db.products.findOne({nome:"Galaxy Tab S8"});
    const estoqueNovo = produto.estoque;
    console.log(`Com a decrementação de 2 unidades, o estoque atual é ${estoqueNovo}.`);
}
else {
    console.log("Não foi possível realizar a decrementação do estoque!");
}
