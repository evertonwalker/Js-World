const fs = require('fs')
const path = require('path')

function lerArquivo(nomeDoArquivo) {
    return new Promise(resolve => {
        const url = path.join(__dirname, nomeDoArquivo)
        fs.readFile(url, (err, data) => {
            if (err) throw Error("Falha ao ler arquivo");
            resolve(data.toString());
        });
    });
}

lerArquivo('texto.txt').then(console.log);