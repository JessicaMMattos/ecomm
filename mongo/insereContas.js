use("ecomm");

const result = db.accounts.insertMany([
  {
    nome: "Lufue",
    email: "Lufue2012@gmail.com",
    senha: "Lulu123",
    dataCriacao: new Date(),
    cpf: "09133237050",
    telefone: "19981626977",
    endereco: {
        bairro: "Fortaleza",
        rua: "Avenida Rio Solimões",
        numero: "23",
        complemento: "Casa",
        cep: "68926380",
        cidade: "Santana",
        uf: "AP"
    }
  },
  {
    nome: "Maria",
    email: "mariadocarmo@hotmail.com",
    senha: "M@ria.1234",
    dataCriacao: new Date(2023, 06, 01),
    cpf: "65302755092",
    telefone: "11985245755",
    endereco: {
        bairro: "Alto da Boa Vista",
        rua: "Rua Doutor Leandro Ribeiro da Silva",
        numero: "268",
        cep: "20535160",
        cidade: "Rio de Janeiro",
        uf: "RJ"
    }
  },
  {
    nome: "Antonio",
    email: "antoniosouza12@gmail.com",
    senha: "toninho4321",
    dataCriacao: new Date(2023, 05, 01),
    cpf: "34188287012",
    telefone: "19981626977",
    endereco: {
        bairro: "Vila Tamandaré",
        rua: "Rua Adolfo Bianchi",
        numero: "602",
        cep: "14085140",
        cidade: "Ribeirão Preto",
        uf: "SP"
    }
  }
]);

console.log(result);
