/* # HOSTING -- 
function sayHi() {
    console.log(name); ---> undefined
    console.log(age); ---> Referencer error - the reason is cos you can pass value or acess value without declare him.
    var name = 'Walker';
    let age = 21;
}

Quando nós declaramos a variavel com var -> ela sofre hoisting ela é elevada ao outro nível de memória de forma que ela recebe o valor undefined msm antes de ser declarada ou inicializada
Ocorre algo semelhante com os tipos const e let, porém elas não são acessíveis até sua linha de declaração / inicalização isso é chamado de "temporal dead zone" e quando isso ocorre o javascript
irá lançar o ReferenceError.

sayHi();

*/

for(var i = 0; i < 3 ; i++)  {
    setTimeout(() => console.log(i), 1)
}

for(let i = 0; i < 3 ; i++)  {
    setTimeout(() => console.log(i), 1)
}


// (function () {
//     setTimeout(() => console.log('eae'), 1);
// })();