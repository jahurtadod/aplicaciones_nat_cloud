/**
 * Crea una función que devuelva el numero
 * menor y mayor de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55]

function getMenorMayor(array) {
    let menor = array[0];
    let mayor = array[0];

    for (numero of array) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return { menor, mayor };
}

let result = getMenorMayor(array);
console.log(result);  // Salida: { menor: -100, mayor: 55 }

/**
 * Encuentra el número menor y mayor de un array.
 * 
 * @param {number[]} array - El array de números.
 * @returns {{menor: number, mayor: number}} Un objeto con el número menor y mayor del array.
 */
function encontrarMenorYMayor(array) {
    let menor = Math.min(...array);
    let mayor = Math.max(...array);
    return { menor, mayor };
}

let resultado = encontrarMenorYMayor(array);
console.log(resultado);  // Salida: { menor: -100, mayor: 55 }