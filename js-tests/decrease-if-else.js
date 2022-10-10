let count = 0;

function memory(){
    console.log('save this value on localStorage', count);
}

function actionIf(action) {
    if('increase' === action) count += 1;
    if('decrease' === action) count -= 1;
    if('clear' === action) count = 0;
    memory();
}

actionIf('increase');
actionIf('increase');
actionIf('increase');
actionIf('decrease');
actionIf('clear');

// actionDictionary = {
//     'increase': () => count += 1,
//     'decrease': () => count -= 1,
//     'clear': () => count = 0,
// };

// function action(word) {
//     actionDictionary[word]();
//     memory();
// } 

// action('increase');
// action('increase');
// action('increase');
// action('decrease');
// action('clear');



