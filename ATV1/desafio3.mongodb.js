// //filtre a colecao para exibir somente os produtos cuja categoria seja informatica.
// use ('techmix')
// db.produtos.find(
//     {
//         categoria : 'informatica'
//     }
// )
// outra consulta para localizar os produtos cuja cor seja preto.
// use ('techmix')
// db.produtos.find(
//     {
//         'atributosEspecificos.cor': 'preto'
//     }
// )

//faça uma consulta que localize o produto cuja voltagem seja 110V.
use ('techmix')
 db.produtos.find(
    {
        'atributosEspecificos.voltagem': '110V'
    }
)