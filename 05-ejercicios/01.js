// Cree una función que permita saber cual valor es mayor
function cualEsMayor(a, b) {
    // if (a > b) {
    //     return a;
    // } else {
    //     return b;
    // }
    // return (a > b) ? a : b;
    return Math.max(a, b);
}

let mayor = cualEsMayor(10, 7, 3);
console.log(mayor);