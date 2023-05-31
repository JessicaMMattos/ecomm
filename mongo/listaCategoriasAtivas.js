use("ecomm");

var categorias = db.categories.find({status: "ATIVA"});

console.log(categorias);
