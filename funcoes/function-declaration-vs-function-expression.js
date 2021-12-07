/*
 A diferença entre function declaration e function expression
*/

// Function declaration 
function bomDia(){
    console.log('Bom dia')
}

bomDia();

// Function expression -> Você guarda a função em uma variável

const boaTarde = function (){ 
    console.log('Boa tarde')
}

boaTarde() // É exibido no terminal  -> boa Tarde
const x = boaTarde // retorna undefined -> porque ela n tem retorno.

// Flexbilidade dos parâmetros.
function somar(a, b) {
    return a + b
}

const resultado = somar(3, 4) // -> 7
const resultadoNovo = somar(5, 5, 5, 67 ,7 ) // -> 10, ele ignora todos os outros parâmenteos que não estão sendo utilizados
const resultadoX = somar(3) // -> NaN -> Pois ele somou o primeiro parâmetro com undefined e gera um Not a Number, para evitar esse comportament
// você pode setar um valor inicial para os parâmetros.
/* 
function somar(a, b = 0) {
    return a + b
}

Agora se o parâmetro B não for passado, o retorno sempre será apenas o valor do parâmetro A 
*/


