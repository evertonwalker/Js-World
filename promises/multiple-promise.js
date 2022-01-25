function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo);
    });
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 300),
    ]);
}

console.time('promises');
gerarVariosNumeros().then(console.log).then(() => console.timeEnd('promises'));