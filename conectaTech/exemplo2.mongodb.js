//exemplo2 - Filtrar, escolher campos e calcular uma informação - //pega o preço e verifica se é maior de 100
//no campo caro vai aparecer true se for maior que 100 reais
db.produtos.aggregate([
    {$match:{categoria:'informatica'}}, 
    {$project:{_id:0, nome:1, preco:1, caro:{$gt:['$preco', 100]}}}
])