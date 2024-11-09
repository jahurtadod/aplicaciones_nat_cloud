/**
 * Cree una función que nos permita buscar una elemento
 * de un arreglo por su indice donde enviemos como parametros
 * el arreglo y el indice
 * 
 * Pero valida que el indice que reciba la función no sea menor de cero
 * y que exista el elemetno en el arreglo
 * 
 */

function getbyIdx(array, idx) {
    if (idx < 0 || array.length <= idx) {
        return 'Elemento no existe';
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado)