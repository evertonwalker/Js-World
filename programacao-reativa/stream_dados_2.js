let array = [1, 2, 3, 4, 5, 6];

function fromArray(array) {
    return {
        iniciar(fn) {
            let position = 0;
            const interval = setInterval(() => {
                if (position >= array.length) {
                    clearInterval(interval)
                }
                fn(array[position])
                position++;
            }, 1000);

            return {
                parar() {
                    clearInterval(interval);
                }
            }

        }
    }
}

const exec1 = fromArray(array);
exec1.iniciar(numero => console.log(numero * 2));
