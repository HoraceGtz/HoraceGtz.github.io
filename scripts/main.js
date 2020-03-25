/*eslint-env browser*/


var miImage = document.querySelector('img');

miImage.onclick = function () {
  var miSrc = miImage.getAttribute('src');
  if (miSrc === '/images/mozilla.png') {
    miImage.setAttribute('src', '/images/mozilla2.png');
  } else {
    miImage.setAttribute('src', '/images/mozilla.png');
  }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Hola ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}