var socket = io();

socket.on('connect', function() {

    console.log('conectado al servidor');

})


socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

//Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Jose',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del Servidor: ', resp);
});

//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});