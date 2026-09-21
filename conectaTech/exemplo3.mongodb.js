
//Dentro das expressões da pipeline, $preco significa "use o valor dp campo preco". Sem o cifrão, o Mongodb interpretaria o conteúdo com valor literal, não como referência ao campo.


//group e acumuladores
/*
$group reúne documentos que compartilham critério, o campo id do group define por qual valor ocorrerá o agrupamento. Os acumuladores calculam resultados para cada grupo
*/

//Exemplo 3 - relatório por categoria
//agrupa todos os ids que tiverem a mesma categoria
db.produtos.aggregate([{$group:{ _id:'$categoria',quantidade:{$sum:1},preco_medio:{$avg:'$preco'},mais_barato:{$min:'$preco'},mais_caro:{$max:'$preco'}}},{$sort:{_id:1}}])