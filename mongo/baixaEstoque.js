use("ecomm");

let estoqueAtual = db.products.findOne({nome:"Galaxy Tab S8"}).estoque;

console.log(`O estoque é ${estoqueAtual}.`);

if(estoqueAtual >= 2) {
    db.products.updateOne(
        {nome:"Galaxy Tab S8"},
        {$inc:{estoque: -2}}
    );

    estoqueAtual = db.products.findOne({nome:"Galaxy Tab S8"}).estoque;
    console.log(`Com a decrementação de 2 unidades, o estoque atual é de: ${estoqueAtual}`);
}
else {
    console.log("Não foi possível realizar a decrementação do estoque!");
}
