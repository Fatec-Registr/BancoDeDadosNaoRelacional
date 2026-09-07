// Selecionando o banco techmix
use('techmix');


// Inserindo P004
db.produtos.insertOne(
    {
        id: 'P004',
        nome: 'Headset Wave H7',
        categoria: 'informatica',
        preco: 219.90,
        estoque: 14,
        atributosEspecificos:   {
                                    marca: 'Wave',
                                    conexao: 'USB',
                                    cor: 'preto'
                                }
    }
)


// Inserindo P005P
db.produtos.insertOne(
    {
        id: 'P005',
        nome: 'Camiseta Dev Mode',
        categoria: 'vestuario',
        preco: 59.90,
        estoque: 25,
        atributosEspecificos:   {
                                    tamanho: 'M',
                                    cor: 'preta',
                                    material: 'algodao'
                                }
    }
)


// Inserindo P006
db.produtos.insertOne(
    {
        id: 'P006',
        nome: 'Ventilador Brisa 40',
        categoria: 'eletrodomesticos',
        preco: 189.90,
        estoque: 10,
        atributosEspecificos:   {
                                    voltagem: '110V',
                                    potencia: '50W'
                                }
    }
)


// Inserindo P007
db.produtos.insertOne(
    {
        id: 'P007',
        nome: 'Banco de Dados Modernos',
        categoria: 'livros',
        preco: 119.90,
        estoque: 18,
        atributosEspecificos:   {
                                    autor: 'Ana Martins',
                                    paginas: 420
                                }
    }
)


// Inserindo P008
db.produtos.insertOne(
    {
        id: 'P008',
        nome: 'Caneca Codigo & Cafe',
        categoria: 'utilidades',
        preco: 39.90,
        estoque: 40,
        atributosEspecificos:   {
                                    capacidade: '350ml',
                                    material: 'ceramica'
                                }
    }
)


// Inserindo P009
db.produtos.insertOne(
    {
        id: 'P009',
        nome: 'Smartphone Nova X',
        categoria: 'telefonia',
        preco: 1999.90,
        estoque: 7,
        atributosEspecificos:   {
                                    memoria: '8GB',
                                    armazenamento: '256GB',
                                    cor: 'azul'
                                }
    }
)


// Inserindo P010
db.produtos.insertOne(
    {
        id: 'P010',
        nome: 'Mochila Urban Tech',
        categoria: 'acessorios',
        preco: 149.90,
        estoque: 16,
        atributosEspecificos:   {
                                    capacidade: '25L',
                                    cor: 'cinza'
                                }
    }
)


// Inserindo P011
db.produtos.insertOne(
    {
        id: 'P011',
        nome: 'Luminaria Pixel Desk',
        categoria: 'casa',
        preco: 129.90,
        estoque: 12,
        atributosEspecificos:   {
                                    alimentacao: 'USB',
                                    cor: 'branca'
                                }
    }
)


// Inserindo P012
db.produtos.insertOne(
    {
        id: 'P012',
        nome: 'Caderno Algoritmos',
        categoria: 'papelaria',
        preco: 24.90,
        estoque: 50,
        atributosEspecificos:   {
                                    folhas: 160,
                                    tamanho: 'A5'
                                }
    }
)


// Exibindo todos os documentos cadastrados
db.produtos.find()