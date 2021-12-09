/* Callback é passar uma função como parâmetro para outra e essa função ser chamada de volta.
 E isso surge o pensamento da função reativa, partindo do principio de que quando ocorra um evento
 outro é chamado de volta.

 */ 

const somar = (n1, n2) => console.log(n1 + n2)
const subtrair = (n1, n2) => console.log(n1 - n2)

function exec(fn, n1, n2) {
    return fn(n1, n2)
}

exec(somar, 56, 38)
exec(subtrair, 56, 38)

const cb = () => console.log('exec')

setInterval(cb, 1000);
setInterval(() => console.log('exec 2'), 1000);