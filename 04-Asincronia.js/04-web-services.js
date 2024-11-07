// Función para obtener una broma de Chuck Norris por su categoría
var url = "https://api.chucknorris.io/jokes/random?category=";

async function obtenerBromaPorCategoria(categoria) {
    try {
        const respuesta = await fetch(`${url}${categoria}`);
        const data = await respuesta.json();
        const broma = data.value;
        console.log(`[${categoria}] ${broma}`);
    } catch (error) {
        console.error('Error al obtener la broma:', error);
    }
}

obtenerBromaPorCategoria('history');