use("ecomm");

const nomeCliente = "Maria";

const estatisticaPedido  = db.orders.aggregate(
    {
        $match: { "account.nome": nomeCliente}
    },
    { 
        $unwind: "$itens"
    },
    {
        $group: {
            _id: "$account._id",
            total_quantidade: { $sum: "$itens.quantidade" },
            total_pedido:  { $sum: {$multiply: ["$itens.quantidade", "$itens.precoUnitario"]}},
            total_desconto: { $sum: {$ifNull: ["$itens.desconto", NumberDecimal("0")]}}
        }
    },
    {
        $project:{
            _id: 0,
            nomeCliente: nomeCliente,
            totalQuantidade: "$total_quantidade",
            totalPedido: "$total_pedido",
            totalDesconto: "$total_desconto"
        }
    }
);

console.log(estatisticaPedido);
