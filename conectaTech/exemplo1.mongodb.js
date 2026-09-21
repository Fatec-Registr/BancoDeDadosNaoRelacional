//pipeline de agregação
/*o pipeline funciona como uma esteira: cada estágio recebe o resultado anterior, transforma e entrega para o próximo */

//aggregate, match e project
/*
$match filtra documentos. É comum colocá-lo cedo para reduzir o volume que seguirá pelo pipeline
$project escolhe campos e também pode criar campos calculados
*/

//Exemplo1 - filtrar uma categoria
//acessa a coleção produtos e vamos agregar tudo o que for igual - parece o group by
db.produtos.aggregate([{$match: {categoria:'papelaria'}}])