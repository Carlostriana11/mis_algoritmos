// Escribe una función  createCounter. Debería aceptar un número entero inicial  init. Debería devolver un objeto con tres funciones.

// Las tres funciones son:

// increment() aumenta el valor actual en 1 y luego lo devuelve.
// decrement() reduce el valor actual en 1 y luego lo devuelve.
// reset() establece el valor actual  init y luego lo devuelve.

function createCounter(init) {
    let presentCount = init;
    function increment(){
        return ++presentCount;
    }
        function decrement(){
            return --presentCount;
        }
        function reset(){
            return (presentCount = init)
        }
        return { increment, decrement,  reset}
};

const counter = createCounter(5)
  console.log(counter.increment()) // 6
  console.log(counter.reset()) // 5
  console.log(counter.decrement()) // 4
