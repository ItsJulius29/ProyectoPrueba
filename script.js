window.onload = function () {
    console.log("Script cargado correctamente");

    //Imagen Dinámica con Título Interactivo
    const imagenContainer = document.querySelector("#imagen-dinamica");

    const imagen = document.createElement("img");
    imagen.src = "mar.jpg";
    imagen.alt = "Imagen de presentación";
    imagen.style.display = "block";
    imagen.style.margin = "20px auto";
    imagen.style.borderRadius = "10px";
    imagen.style.width = "100%";
    imagen.style.maxWidth = "400px";

    const titulo = document.createElement("h3");
    titulo.textContent = "Haz clic para cambiar el título";
    titulo.style.textAlign = "center";
    titulo.style.cursor = "pointer";

    titulo.addEventListener("click", function () {
        titulo.textContent = "¡Título cambiado!";
        titulo.style.color = "red";
    });

    imagenContainer.appendChild(imagen);
    imagenContainer.appendChild(titulo);

    // 🎯 Cambiar Color del Header al Hacer Scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#333";
        } else {
            header.style.backgroundColor = "#c93838";
        }
    });

    // 🎯 Validación del Formulario
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();

        if (nombre === "" || email === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        alert(`¡Gracias, ${nombre}! Nos pondremos en contacto contigo pronto.`);
        form.reset();
    });
}