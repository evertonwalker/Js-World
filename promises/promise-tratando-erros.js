function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro');
        } else {
            resolve(valor);
        }
    });
}

funcionarOuNao('Testando', 50)
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log('Fim  da promise 1'));


// Você pode tratar o erro também dentro de um then e ele não irá para o catch!

funcionarOuNao('Testando', 50)
    .then(
        result => console.log('Result', result),
        err => console.log('Erro tratado no then', err)
    )
    .catch(() => console.log('Não passou por aqui'))
    .finally(() => console.log('fim da promise 2 '));
