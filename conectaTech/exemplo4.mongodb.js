// Ranking das categorias com mais produtos
//sort, limit e unwind

db.produtos.aggregate(
    [{$group: 
    {
        _id:'$categoria',
        total:{$sum:1}
    }},
    {$sort:{total:-1, _id:1}},
    {$limit:3}
    ])