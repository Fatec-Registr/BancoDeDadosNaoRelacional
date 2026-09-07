use ('techmix')

// // 1. Cadastre o produto P014: nome Camera Action One; categoria fotografia; preco 899.90; estoque 6; resolucao 4K; estabilizacao digital; resistencia_agua 10m.
// db.produtos.insertOne(
//     {
//         id: 'P014',
//         nome: 'Camera Action One',
//         categoria: 'fotografia',
//         preco: 899.90,
//         estoque: 6,
//         atributosEspecificos:   {
//             resolucao: '4K',
//             estabilizacao: 'digital',
//             resistencia_agua: '10m'
//         }
//     }
// )

// // 2. Cadastre o produto P015: nome Livro Python Aplicado; categoria livros; preco 94.90; estoque 22; autor Carlos Nogueira; paginas 360; assuntos deve ser uma lista contendo Python, dados e automacao.
// db.produtos.insertOne(
//     {
//         id: 'P015',
//         nome: 'Livro Python Aplicado',
//         categoria: 'livros',
//         preco: 94.90,
//         estoque: 22,
//         atributosEspecificos:   {
//             autor: 'Carlos Nogueira',
//             paginas: 360,
//             assuntos: ['Python', 'dados', 'automacao']
//         }
//     }
// )

// // 3. Cadastre o produto P016: nome Garrafa Smart Temp; categoria utilidades; preco 79.90; estoque 30; capacidade 500ml; material inox; recursos deve ser uma lista contendo temperatura e display.
// db.produtos.insertOne(
//     {
//         id: 'P016',
//         nome: 'Garrafa Smart Temp',
//         categoria: 'utilidades',
//         preco: 79.90,
//         estoque: 30,
//         atributosEspecificos:   {
//             capacidade: '500ml',
//             material: 'inox',
//             recursos: ['temperatura', 'display']
//         }
//     }
// )


// // 4. Faça uma consulta que encontre P014 pelo campo resolucao.
// db.produtos.find(
//     { 
//         'atributosEspecificos.resolucao': '4K' 
//     }
// )
// 5. Faça uma consulta que encontre P015 pelo campo autor e outra que encontre P016 pelo campo material.
// db.produtos.find(
//     {
//         'atributosEspecificos.autor': 'Carlos Nogueira'
//     }
// )
// db.produtos.find(
//     {
//         'atributosEspecificos.material': 'inox'
//     }
// )


// // Evidência de conclusão: a coleção deve terminar com 16 produtos e os três novos registros devem ser localizados por atributos que nao existem em todos os demais documentos.
 db.produtos.find()