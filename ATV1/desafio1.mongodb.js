// Selecionando o banco techmix
use('techmix');

//Inserindo P001
db.produtos.insertOne(
    {
        id : 'P001',
        nome : 'AtlasBook 14',
        categoria :  'informatica',
        preco : 3499.90,
        estoque : 8 ,
        atributosEspecificos :  { 
                                marca : 'Nexa',
                                memoria : '16GB',
                                armazenamento : '512GB'
                                }
    }
)

//Inserindo P002
db.produtos.insertOne(
    {
        id: 'P002',
        nome: 'Mouse Pulse M20',
        categoria: 'informatica',
        preco: 89.90,
        estoque: 35,
        atributosEspecificos:   { 
                                marca: 'Pulse',
                                conexao: 'sem fio',
                                cor: 'preto'
                                }
    }
)

//Inserindo P003
db.produtos.insertOne(
    {
        id: 'P003',
        nome: 'Teclado KeyPro',
        categoria: 'informatica',
        preco: 159.90,
        estoque: 20,
        atributosEspecificos:   {
                                marca: 'KeyPro',
                                layout: 'ABNT2',
                                iluminacao: 'RGB'
                                }
    }
)


// Exibindo todos os documentos cadastrados
db.produtos.find()