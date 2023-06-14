use("ecomm");

const result = db.orders.insertMany([
  {
    dataPedido: new Date(),
    account: {
        accountId: new ObjectId('64809fa110a5cd0b7b431da2'),
        nome: "Lufue"
    },
    enderecoEntrega: {
        bairro: "Fortaleza",
        rua: "Avenida Rio Solimões",
        numero: "23",
        complemento: "Casa",
        cep: "68926380",
        cidade: "Santana",
        uf: "AP"
    },
    itens:[{
        productId: new ObjectId('6478f2e5a23eada4cd17aba4'),
        quantidade: 1,
        precoUnitario: NumberDecimal("3523.00")
    }]
  },
  {
    dataPedido: new Date(),
    account: {
        accountId: new ObjectId('64809fa110a5cd0b7b431da3'),
        nome: "Maria"
    },
    enderecoEntrega: {
        bairro: "Alto da Boa Vista",
        rua: "Rua Doutor Leandro Ribeiro da Silva",
        numero: "268",
        cep: "20535160",
        cidade: "Rio de Janeiro",
        uf: "RJ"
    },
    itens:[{
        productId: new ObjectId('6478f2e5a23eada4cd17aba5'),
        quantidade: 1,
        precoUnitario: NumberDecimal("2500.00")
    }, 
    {
        productId: new ObjectId('6478f2e5a23eada4cd17aba7'),
        quantidade: 1,
        desconto: NumberDecimal("0.15"),
        precoUnitario: NumberDecimal("3678.98")
    }]
  },
  {
    dataPedido: new Date(),
    account: {
        accountId: new ObjectId('64809fa110a5cd0b7b431da4'),
        nome: "Antonio"
    },
    enderecoEntrega: {
        bairro: "Vila Tamandaré",
        rua: "Rua Adolfo Bianchi",
        numero: "602",
        cep: "14085140",
        cidade: "Ribeirão Preto",
        uf: "SP"
    },
    itens:[{
        productId: new ObjectId('6478f2e5a23eada4cd17aba8'),
        quantidade: 1,
        precoUnitario: NumberDecimal("9176.00")
    }, 
    {
        productId: new ObjectId('6478f2e5a23eada4cd17aba9'),
        quantidade: 1,
        precoUnitario: NumberDecimal("1889.00")
    }]
  }
]);

console.log(result);
