/**
 * Determina la categoría de resolución de pantalla.
 * 
 * @param {number} ancho - El ancho de la pantalla.
 * @param {number} alto - El alto de la pantalla.
 * @returns {string} La resolución de la pantalla: '8K', '4K', 'FHD', 'HD' o 'Resolución desconocida'.
 */
function determinarResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return 'Resolución desconocida';
    }
}

let resolucion = determinarResolucion(3840, 2160);
console.log(resolucion);  // Salida: '4K'
