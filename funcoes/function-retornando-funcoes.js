const bomDia = function(){
    console.log('bom dia')
}

const boaTarde = function(){
    console.log('boa tarde')
}

// Passando uma função como parâmetro, para outra função.
function executarQualquerCoisa (fn) {
    if(typeof fn === 'function')
     fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa(3)


// Como uma função retorna outra função 

function potencia(base) {
    return function(expoente) {
        return Math.pow(base, expoente)
    }
}

const potenciaDe2 = potencia(2)
const bits8 = potenciaDe2(8)
console.log(bits8) // -> 256
console.log(potencia(2)(8)) // -> 256 -> como potencia retorna uma outra função, você já pode chamar ela em seguida.

// DESAFIO 
// Criar uma função soma(2)(4)(5) que receba os valores assim e retorne o valor dos valores
// Criar uma função calcular(2, 5, fn) que receba os valores e a função dizendo qual método ele deverar calcular.

function somar(n1) {
    return function(n2){
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}

console.log(somar(10)(50)(40)) // -> 100

function calcular(n1, n2, fn) {
    return fn(n1, n2)
}

const somarNovo = (n1, n2) => n1 + n2
const substrair = (n1, n2) => n1 - n2
const dividir = (n1, n2) => n1 / n2
const multiplicar = (n1, n2) => n1 * n2

console.log(calcular(10, 10, somarNovo)) // -> 20
console.log(calcular(15, 10, substrair)) // -> 5
console.log(calcular(10, 2, dividir)) // -> 5
console.log(multiplicar(10, 10, substrair)) // -> 100