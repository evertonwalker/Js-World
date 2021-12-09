// arrow function -> mais conhecidas como funções anônimas

const boaTarde = () => console.log('boa tarde')
boaTarde()

const saudacao = nome => `Fala: ${nome} !!`
console.log(saudacao('Walker'))

const somar = numeros => {
    let soma = 0
    for(let n of numeros) {
        soma += n
    }
    return soma;
}

console.log(somar([10, 5, 25, 100]))


const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

// Arrow function e seu escopo this.

// Como a função conhece o local que ela esta, ela consegue logar perfeitamente o valor de quem a chama.
Array.prototype.log = function() {
    console.log(this)
}

// Mas nesse caso ela loga {}, porque ela é anônima e olha para o escopo global e não para quem está chamando ela. 
Array.prototype.firstItem = () => console.log(this)

const numeros = [1, 2, 3]
numeros.log()
numeros.firstItem()