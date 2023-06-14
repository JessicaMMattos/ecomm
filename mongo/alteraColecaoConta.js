use("ecomm");

const result = db.runCommand(
{ collMod: "accounts",
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
                    pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$",
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
                    pattern: "^[0-9]{10,}$"
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
                            pattern: "^(\\d+|S/N)$",
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
                            pattern: "^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$"
                        }
                    }
                }
            }
        }
    }
});

console.log(result);
