use("ecomm");

const result = db.createCollection("accounts",
{
    validator:{
        $jsonSchema:{
            title: "Register user accounts",
            bsonType: "object",
            required:[ "_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
            additionalProperties: false,
            properties: {
                _id:{
                    description: "Identificador da conta",
                    bsonType: "objectId"
                },
                nome: {
                    description: "Nome de usuário",
                    bsonType: "string",
                    minLength: 5
                },
                email: {
                    description: "E-mail do usuário",
                    bsonType: "string",
                    minLength: 5
                },
                senha: {
                    description: "Senha do usuário",
                    bsonType: "string",
                    minLength: 5
                },
                dataCriacao: {
                    description: "Data de criação da conta",
                    bsonType: "date",
                },
                cpf: {
                    description: "CPF do usuário",
                    bsonType: "string",
                    pattern: "^[0-9]{11}$"
                },
                telefone: {
                    description: "Telefone do usuário",
                    bsonType: "string",
                    minLength: 10
                },
                endereco:{
                    title: "Register user adress",
                    bsonType: "object",
                    required:[ "bairro", "rua", "numero", "cep", "cidade", "uf"],
                    additionalProperties: false,
                    properties:{
                        bairro:{
                            description: "Bairro do endereço do usuário",
                            bsonType: "string",
                            minLength: 1
                        },
                        rua: {
                            description: "Rua do endereço do usuário",
                            bsonType: "string",
                            minLength: 1
                        },
                        numero: {
                            description: "Número do endereço do usuário",
                            bsonType: "string",
                            minLength: 1
                        },
                        complemento: {
                            description: "Complemento do endereço do usuário",
                            bsonType: ["string", "null"]
                        },
                        cep: {
                            description: "CEP do endereço do usuário",
                            bsonType: "string",
                            pattern: "^[0-9]{8}$"
                        },
                        cidade: {
                            description: "Cidade do usuário",
                            bsonType: "string",
                            minLength: 5
                        },
                        uf: {
                            description: "UF do usuário",
                            bsonType: "string",
                            pattern: "^[A-Z, a-z]{2}$"
                        }
                    }
                }
            }
        }
    }
});

console.log(result);
