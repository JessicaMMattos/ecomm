use("ecomm");

const result = db.createCollection("orders",
{
    validator:{
        $jsonSchema:{
            title: "Register user orders",
            bsonType: "object",
            required:[ "_id", "dataPedido", "account", "enderecoEntrega", "itens"],
            additionalProperties: false,
            properties: {
                _id:{
                    description: "Identificador do pedido",
                    bsonType: "objectId"
                },
                dataPedido: {
                    description: "Data do pedido",
                    bsonType: "date",
                },
                account:{
                    title: "User account",
                    bsonType: "object",
                    required:[ "accountId", "nome"],
                    additionalProperties: false,
                    properties:{
                        accountId:{
                            description: "Identificador da conta",
                            bsonType: "objectId"
                        },
                        nome: {
                            description: "Nome do usuário",
                            bsonType: "string"
                        }
                    }
                },
                enderecoEntrega:{
                    title: "Register delivery address",
                    bsonType: "object",
                    required:[ "bairro", "rua", "numero", "cep", "cidade", "uf"],
                    additionalProperties: false,
                    properties:{
                        bairro:{
                            description: "Bairro do endereço da entrega",
                            bsonType: "string",
                            minLength: 1
                        },
                        rua: {
                            description: "Rua do endereço da entrega",
                            bsonType: "string",
                            minLength: 1
                        },
                        numero: {
                            description: "Número do endereço da entrega",
                            bsonType: "string",
                            minLength: 1
                        },
                        complemento: {
                            description: "Complemento do endereço da entrega",
                            bsonType: ["string", "null"]
                        },
                        cep: {
                            description: "CEP do endereço da entrega",
                            bsonType: "string",
                            pattern: "^[0-9]{8}$"
                        },
                        cidade: {
                            description: "Cidade da entrega",
                            bsonType: "string",
                            minLength: 5
                        },
                        uf: {
                            description: "UF da entrega",
                            bsonType: "string",
                            pattern: "^[A-Z, a-z]{2}$"
                        }
                    }
                },
                itens: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        title: "Register order item",
                        bsonType: "object",
                        required: ["productId", "quantidade", "precoUnitario"],
                        additionalProperties: false,
                        properties:{
                            productId:{
                                description: "Identificador do produto",
                                bsonType: "objectId"
                            },
                            quantidade: {
                                description: "Quantidade do produto",
                                bsonType: "int",
                                minimum: 1
                            },
                            desconto: {
                                description: "Desconto no item do pedido",
                                bsonType: "decimal",
                                minimum: 0.00,
                                exclusiveMinimum: true
                            },
                            precoUnitario: {
                                description: "Preço unitário do produto",
                                bsonType: "decimal",
                                minimum: 0.00,
                                exclusiveMinimum: true
                            }
                        }
                    }
                }
            }
        }
    }
});

console.log(result);
