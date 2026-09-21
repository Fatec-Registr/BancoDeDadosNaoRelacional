// Unwind "desmonta" uma lista, criando uma saida para cada elemento. Na coleção pedidos, isso permite tratar o item como uma unidade de analise

//Observação do efeito unwind

db.produtos.aggregate(
    [
        {
            $unwind: {
              
            }
        }
    ]
)