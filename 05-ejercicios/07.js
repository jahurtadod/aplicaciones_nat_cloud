/**
 * Crear un algoritmo que devuelva el precio del producto
 * mas impuestos
 */
function precioCompleto(precio, impuestos) {
    return precio + (precio * impuestos);
}

let resultado = precioCompleto(20.15, 0.15);
console.log(resultado);
