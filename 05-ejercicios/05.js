/**
 * Crea una función que devuelva la cantidad
 * de numeros positivos del array
 */

let array = [2, 5, 7, 15, -5, -100, 55]

function cuantosPositivos(arr) {
    let cantidad = 0;
    for (elemento of arr) {
        if (elemento > 0) {
            cantidad++;
        }
    }
    return cantidad;
}

