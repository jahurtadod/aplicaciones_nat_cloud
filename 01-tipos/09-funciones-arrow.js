// Reduce la sintaxis de las funciones
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(1, 5);
console.log(resultado);

const suma = (a, b) => a + b; // De una sola linea no necesita el return

const suma2 = (a, b) => { // Permite agregar mas lineas
    console.log('Voy a sumar los valores', a, b);
    return a + b;
}