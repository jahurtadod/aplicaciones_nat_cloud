// Cuales son los numeros pares
let i = 0;
while (i < 10) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

console.log('Fuera del while');

// While para iterar arreglos
let animales = ['gato', 'perro', 'dragon']

let j = 0;
while (j < animales.length) {
    console.log(animales[j]);
    j++;
}