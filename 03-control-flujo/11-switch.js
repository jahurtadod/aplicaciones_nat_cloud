// Permite indicar que una acción bajo una acción

let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no definida');
}