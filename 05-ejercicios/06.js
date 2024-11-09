/**
 * Crea una función de longitud N, y que sus elementos sean
 * numero de 1 hasta N
 */

let longitud = 7;

function crearArrayN(n) {
    if (n <= 0) {
        return [];
    }
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}

let resultado = crearArrayN(longitud);
console.log(resultado);  // Salida: [1, 2, 3, 4, 5, 6, 7]