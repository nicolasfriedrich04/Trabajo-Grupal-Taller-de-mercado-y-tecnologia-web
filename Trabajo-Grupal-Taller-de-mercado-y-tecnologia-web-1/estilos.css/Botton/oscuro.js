document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-modo");

    boton.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");
        
        // Cambiamos el texto del botón según el modo
        if (document.body.classList.contains("oscuro")) {
            boton.innerText = "☀️ Modo claro";
        } else {
            boton.innerText = "🌙 Modo oscuro";
        }
    });
});