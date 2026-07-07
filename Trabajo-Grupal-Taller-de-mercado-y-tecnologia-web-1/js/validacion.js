const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const tipoUsuario = document.getElementById("tipo-usuario").value;
        const programa = document.getElementById("programa").value;

        const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefono = /^[0-9+\-\s()]{8,20}$/;

        if (!regexNombre.test(nombre)) {
            alert("Ingrese un nombre válido.");
            return;
        }

        
        if (!regexEmail.test(email)) {
            alert("Ingrese un correo electrónico válido.");
            return;
        }

        
        if (!regexTelefono.test(telefono)) {
            alert("Ingrese un teléfono válido.");
            return;
        }

        
        if (tipoUsuario === "") {
            alert("Seleccione cómo desea participar.");
            return;
        }

        if (programa === "") {
            alert("Seleccione un programa.");
            return;
        }

        alert("Formulario enviado correctamente.");

        formulario.submit();

    });

});
