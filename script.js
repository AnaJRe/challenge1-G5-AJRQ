const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar")

const mensajeInput = document.querySelector(".mensaje");
const copiarButton = document.querySelector(".btn-copiar");
const encriptarButton = document.querySelector(".btn-encriptar");

encriptarButton.addEventListener('click', function() {
  if (mensajeInput.value.trim().length > 0) {
    copiarButton.style.display = "inline-block";
  } else {
    copiarButton.style.display = "none";
  }
});

function validarTxt() {
    let txtEscrito = textArea.value;
    let validador = txtEscrito.match(/^[a-z\s]*$/);
    if (!validador || validador === 0) {
        alert("Solo se permiten letras minúsculas y sin acentos");
        return true;
    }
    return false;
}

function btnEncriptar() {
    if (!validarTxt()) {
        const txtEncriptado = encriptar(textArea.value);
        mensaje.value = txtEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
    }
}

// Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replace(new RegExp(matrizCodigo[i][1], "g"), matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}