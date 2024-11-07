// A diferencia de while do while siempre se va a ejecutar
// al menos una vez
let i = 0;
// while (i < 5) {
//     if (i % 2 == 0) {
//         console.log('Número par:', i);
//     }
//     i++;
// }

do {
    if (i % 2 == 0) {
        console.log('Número par:', i);
    }
    i++;
} while (i < 5);