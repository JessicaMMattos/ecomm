use("ecomm");

var categorias = db.categorias.find({status: "ATIVA"});

console.log(categorias);
