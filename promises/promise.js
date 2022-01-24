// Você pode trabalhar com promises de n formas diferentes

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3);
});

p.then(function (valor) {
    console.log(valor);
});


let arrayP = new Promise(resolve => {
    resolve(['s', '2', '3']);
});

// Você pode tratar cada valor de maneira separada agrupando pequenas clausulas de funções
arrayP.then(result => result[0])
    .then(resultInitial => +resultInitial + 15)
    .then(console.log); // NaN

const primeiroItemArray = (array) => array[0];
const verificaEConverteParaString = (value) => {
    if (isNaN(value)) {
        return 0;
    } else {
        return +value;
    }
}

// Ou agrupar funções e usa-las dentro de cada then. 
arrayP.then(primeiroItemArray)
    .then(verificaEConverteParaString)
    .then(console.log); // 0


function gerarNumerosEntre(min, max) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min;
        resolve(aleatorio);
    })
}


gerarNumerosEntre(1, 50).then(console.log);