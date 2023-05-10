const boton = document.getElementById("boton")
const checkbox = document.getElementById("checkbox")
const mail = document.getElementById("floatingInput")

boton.addEventListener("click", chequeo)

function chequeo() {
    (mail.value != "" && checkbox.checked) ? alert("¡Felicitaciones! Pronto escucharás de nosotros") : alert("Parece que nos faltó algo...");
}



