// Permite iterar propiedades de un objeto
let user = {
    id: 1,
    name: 'Jorge',
    age: 26,
}

for (const key in user) {
    // console.log(key); // Nos permite mostrar el nombre de la propiedad
    // console.log(user[key]); // Nos permite mostrar el valor de la propiedad
    console.log(key, user[key]);
}