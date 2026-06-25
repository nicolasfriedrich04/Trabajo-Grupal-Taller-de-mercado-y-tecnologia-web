document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-modo");

    boton.addEventListener("click", () => {
        /* Alterna la clase 'oscuro' en el body */
        document.body.classList.toggle("oscuro");
        
        /* Cambia el texto y el icono del botón */
        if (document.body.classList.contains("oscuro")) {
            boton.innerText = "☀️ Modo claro";
        } else {
            boton.innerText = "🌙 Modo oscuro";
        }
    });
});