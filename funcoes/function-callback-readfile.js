const fs = require('fs')
const path = require('path')

// join -> Nos auxilia colocando as barras independente se for windows ou mac
// __dirname é uma variável para o diretório que estamos executando atual
const url = path.join(__dirname, 'dados.txt')

fs.readFile(url, (err, data) => {
    if(err) throw Error('Falha ao ler o arquivo')
    console.log(data.toString())
})