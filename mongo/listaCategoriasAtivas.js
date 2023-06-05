use("ecomm");

const categorias = db.categories.find({status: "ATIVA"});

console.log(categorias);
