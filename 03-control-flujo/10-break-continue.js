// Permiten detener un ciclo
// Se puede usar con todos los loops

let i = 0;
while (i < 10) {
    i++;
    if (i === 2) {
        continue; // Todo lo que continua del ciclo va a ser ignorado
    }
    if (i === 4) {
        break; // Termina todo el ciclo
    }
    console.log(i);
}

console.log('Fuera del while');