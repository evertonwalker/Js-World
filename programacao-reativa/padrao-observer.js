/* Padrão observer pontos: 
- Ele é orientada a eventos!
Sempre precisa ter um Subject ( personagem que informa o evento)
e 1 ou N Observers na quais vão ser notificados pelos subjects
*/

const readline = require('readline');

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve) => {
        rl.question(pergunta, resp => {
            resolve(resp);
            rl.close();
        });
    });
}

function namorada() {
    console.log('N: apagar as luzes');
    console.log('N: pedir silêncio');
    console.log('N: surpresa!!!');
}

function sindico() {
    console.log('S: Monitorando barulho.');
}

async function porteiro(interessados) {
    while (true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q)');
        if (resp.toLowerCase() === 's') {
            (interessados || []).forEach(obs => obs())
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

porteiro([namorada, sindico]);