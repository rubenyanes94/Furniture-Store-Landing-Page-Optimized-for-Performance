document.addEventListener('DOMContentLoaded', function () {

    function sendWhatsAppMessage() {
        const phoneNumber = "584140000000";

        const nombre = document.getElementById('contact-nombre').value;
        const email = document.getElementById('contact-email').value;
        const tipoProyecto = document.getElementById('contact-tipo-proyecto').value;
        const asunto = document.getElementById('contact-asunto').value;
        const mensaje = document.getElementById('contact-mensaje').value;

        if (nombre === "" || email === "") {
            alert("Por favor, completa al menos tu nombre y correo para continuar.");
            return;
        }

        const whatsappMessage = `*Nueva Solicitud de Asesoría* 🛋️%0A` +
            `%0A*Nombre:* ${nombre}` +
            `%0A*Email:* ${email}` +
            `%0A*Tipo de Proyecto:* ${tipoProyecto}` +
            `%0A*Asunto:* ${asunto}` +
            `%0A*Mensaje:* ${mensaje}`;

        const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(url, '_blank').focus();
    };

    const mainNav = document.getElementById('main-nav');
    if (mainNav) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        });
    };

    var ambienteCarousel = document.getElementById('ambienteCarousel')
    if (ambienteCarousel) {
        var carousel = new bootstrap.Carousel(ambienteCarousel, {
            interval: 4000,
            ride: 'carousel'
        })
    }

    const staticFurnitureImage = document.getElementById('staticFurnitureImage');
    if (!staticFurnitureImage) return;

    const viewSpaceButtons = document.querySelectorAll('.view-space-btn');

    viewSpaceButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const newImageSrc = this.getAttribute('data-product-image');
            staticFurnitureImage.src = newImageSrc;
            document.getElementById('vista-ambiente').scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.view-space-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productName = e.target.closest('.card-body').querySelector('.card-title').textContent;
                console.log(`Función 'Ver en tu Espacio' activada para: ${productName}`);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const swatches = document.querySelectorAll('.color-swatch');

    swatches.forEach(swatch => {
        swatch.addEventListener('click', (event) => {
            const clickedSwatch = event.currentTarget;

            const newImageUrl = clickedSwatch.getAttribute('data-color-url');

            const card = clickedSwatch.closest('.card');

            const imageElement = card ? card.querySelector('.card-img-top') : null;

            if (imageElement && newImageUrl) {
                imageElement.src = newImageUrl;

                const siblingSwatches = clickedSwatch.parentNode.querySelectorAll('.color-swatch');
                siblingSwatches.forEach(s => s.classList.remove('active'));

                clickedSwatch.classList.add('active');
            }
        });
    });

    const numeroWhatsApp = "521234567890";

    const productosDB = [
        { id: 1, categoria: 'sofas', nombre: 'Sofá Lua', precio: '$520', img: 'img/sofa-becca.png' },
        { id: 2, categoria: 'sofas', nombre: 'Sofá Nexus Elite', precio: '$1.600', img: 'img/sofa-argus-+-blue.png' },
        { id: 3, categoria: 'sillas', nombre: 'Poltrona Velvet', precio: '$220', img: 'img/poltrona-gala.png' },
        { id: 4, categoria: 'camas', nombre: 'Cama Dintel - Queen', precio: '$440', img: 'img/cama-king.png' },
        { id: 5, categoria: 'camas', nombre: 'Cama Saint - Individual', precio: '$290', img: 'img/cama-nidus.png' },
        { id: 6, categoria: 'camas', nombre: 'Cama Puro - Matrimonial', precio: '$380', img: 'img/cama-bubbles.png' },
        { id: 7, categoria: 'sofas', nombre: 'Juego Consul', precio: '$630', img: 'img/juego-tyrone-blue.png' },
        { id: 8, categoria: 'sofas', nombre: 'Sofá cama Mor', precio: '$800', img: 'img/sofá cama LIAM - grey.png' },
        { id: 9, categoria: 'sofas', nombre: 'Sofá Pro', precio: '$520', img: 'img/sofa-ares-green.png' },
        { id: 10, categoria: 'sillas', nombre: 'Poltrona Bubble', precio: '$300', img: 'img/poltrona-noah.png' },
        { id: 11, categoria: 'sofas', nombre: 'Vitra - Dos puestos', precio: '$650', img: 'img/sofa-dioxele-blue.png' },
        { id: 12, categoria: 'sofas', nombre: 'Sofá Aura', precio: '$520', img: 'img/sofa-hadi-green.png' },
        { id: 14, categoria: 'sofas', nombre: 'Sofá Modular Comfy', precio: '$440', img: 'modular-estambul-grey.png' },
        { id: 15, categoria: 'mesas', nombre: 'Corteza', precio: '$120', img: 'mesa-corteza.png' },
        { id: 16, categoria: 'mesas', nombre: 'Veta', precio: '$120', img: 'mesa-veta.png' },
        { id: 17, categoria: 'mesas', nombre: 'Astilla', precio: '$120', img: 'mesa-astilla.png' },
        { id: 18, categoria: 'mesas', nombre: 'Lignum', precio: '$120', img: 'mesa-lignum.png' },
        { id: 19, categoria: 'mesas', nombre: 'Bosque', precio: '$120', img: 'mesa-bosque.png' },
        { id: 20, categoria: 'mesas', nombre: 'Nudo', precio: '$120', img: 'mesa-nudo.png' },
        { id: 21, categoria: 'mesas', nombre: 'Artesano', precio: '$120', img: 'mesa-artesano.png' },
        { id: 22, categoria: 'mesas', nombre: 'Roble', precio: '$120', img: 'mesa-roble.png' },
        { id: 23, categoria: 'mesas', nombre: 'Sandalo', precio: '$160', img: 'mesa-sandalo.png' },
        { id: 24, categoria: 'mesas', nombre: 'Raiz', precio: '$120', img: 'mesa-raiz.png' },
        { id: 25, categoria: 'sofas', nombre: 'Juego Vitra', precio: '$1.440', img: 'juego-dioxele.png' },
        { id: 26, categoria: 'sofas', nombre: 'Vitra - 3 Puestos', precio: '$790', img: 'dioxele-tres.png' },
        { id: 27, categoria: 'sofas', nombre: 'Juego Broca', precio: '$1.550', img: 'juego-broca.png' },
        { id: 28, categoria: 'sofas', nombre: 'Broca - 3 Puestos', precio: '$775', img: 'broca-3.png' },
        { id: 29, categoria: 'sofas', nombre: 'Broca - 2 Puestos', precio: '$770', img: 'broca-dos-puestos.png' },
        { id: 30, categoria: 'camas', nombre: 'Cama King - Night', precio: '$770', img: 'cama-night.png' },
        { id: 31, categoria: 'sillas', nombre: 'Poltrona Cloud', precio: '$220', img: 'cama-night.png' },
    ];

    const seccionDisplay = document.getElementById('display-productos');
    const contenedor = document.getElementById('contenedor-productos');
    const tituloSeccion = document.getElementById('titulo-seccion');

    function mostrarProductos(categoria) {
        seccionDisplay.classList.remove('d-none');
        contenedor.innerHTML = '';

        const filtrados = productosDB.filter(p => p.categoria === categoria);
        tituloSeccion.textContent = 'Explorando: ' + categoria.toUpperCase();

        filtrados.forEach(p => {
            const mensaje = `Hola, estoy interesado en el modelo ${p.nombre} que vi en la web por ${p.precio}.`;
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

            const card = `
            <div class="col animate__animated animate__fadeIn">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${p.img}" class="card-img-top" style="height:200px; object-fit:cover;" alt="${p.nombre}">
                    
                    <div class="card-body text-center d-flex flex-column">
                        <h6 class="fw-bold">${p.nombre}</h6>
                        
                        <div class="mb-2">
                         <p class="text-muted small mb-0" style="font-size: 0.75rem;">Más colores disponibles</p>
                             <div class="d-flex align-items-center justify-content-center gap-2 mb-1">
                                <span class="color-swatch-sm" style="background-color: #34495e;" title="Azul Marino"></span>
                                <span class="color-swatch-sm" style="background-color: #95a5a6;" title="Gris Texturizado"></span>
                                <span class="color-swatch-sm" style="background-color: #c7b299;" title="Beige"></span>
                                <span class="color-swatch-sm" style="background-color: #16a085;" title="Turquesa"></span>
                                <span class="color-swatch-sm" style="background-color: #1e5945;" title="Verde Botella"></span>
                                <span class="color-swatch-sm" style="background-color: #b37685;" title="Rosa Viejo"></span>
                                <span class="text-muted ms-1 small fw-bold">+</span>
                            </div>
                        </div>
                        <p class="text-primary fw-bold mb-3">${p.precio}</p>
                        
                        <div class="mt-auto">
                            <a href="${linkWhatsApp}" target="_blank" class="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2">
                                <i class="bi bi-whatsapp"></i> Comprar
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
            contenedor.innerHTML += card;
        });

        seccionDisplay.scrollIntoView({ behavior: 'smooth' });
    }

    // Event Listeners (sin cambios)
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = btn.getAttribute('data-category');
            mostrarProductos(cat);
        });
    });

    function cerrarVista() {
        seccionDisplay.classList.add('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    $(document).ready(function(){
    $("#carousel-principales").owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: { items: 1 },    // 1 card en móvil
            768: { items: 2 },  // 2 cards en tablet
            1024: { items: 3 }  // 3 cards en PC (igual que tu diseño actual)
        }
    });
});
});


