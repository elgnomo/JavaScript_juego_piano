"use strict"
//alert("Hola Gnomo esto sera un piano")
/*
    document.getElementById('btnDO').addEventListener('click', function () { 
        alert('Prueba Do');
    });
    * Obtenemos el Id del boton DO, le agregamos un evento de escucha en este caso click.
*/

/*
    var btnDO = document.getElementById('btnDO');
    btnDO.addEventListener('click', function () {
        alert('Prueba Do');
    })
    *Podemos asignas un nombre a la funcion
*/

/*
    var btnDO = document.getElementById('btnDO');

    btnDO.addEventListener('click', reproducirSonido);

    function reproducirSonido() {
        //Tener un elemento de audio
        //Obtener una referencia de dicho elemento
        //Dar la orden de reproducir
        var audio = document.getElementById('audioDO');
        //audio.stop(); no existe
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    };

    *Si es para un solo elemeto esto es bueno pero no es optimo cuando se tiene varias opciones
*/

var buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', playSound);
})

function playSound(event) {
    console.log(event.target); //Nos devuelven datos concretos
    var button = event.target;
    var note = button.dataset.note;
    var audio = document.getElementById('audio' + note);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
};