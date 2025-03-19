const caja = document.getElementById('miCaja');
const botonMostrarAlerta = document.getElementById('btnMostrarAlerta');
const popup = document.getElementById('miPopup');
const popupText = document.getElementById('popupText');
const colorButton = document.getElementById('colorButton');
let contador = 0;

// Mostrar alerta con el texto de la caja al presionar Enter
caja.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        mostrarAlerta(caja.value);
    }
});

// Mostrar alerta al hacer clic en el botón
botonMostrarAlerta.addEventListener('click', () => {
    mostrarAlerta(caja.value);
});

// Función para mostrar la alerta con el texto de la caja
function mostrarAlerta(texto) {
    popupText.textContent = texto;
    popup.style.display = 'block';
}

// Cambiar el color de fondo y texto en la ventana emergente
colorButton.addEventListener('click', () => {
    contador++;
    if (contador === 1) {
        popup.style.backgroundColor = 'white';
        colorButton.style.color = 'black';
    } else if (contador === 2) {
        popup.style.backgroundColor = 'black';
        colorButton.style.color = 'white';
    } else if (contador === 3) {
        popup.style.backgroundColor = 'lightblue';
        colorButton.style.color = 'red';
        contador = 0; // Reiniciar contador
    }
});