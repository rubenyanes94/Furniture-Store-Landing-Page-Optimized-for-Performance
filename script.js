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
        { id: 1, categoria: 'sofas', nombre: 'Sofa-becca', precio: '$850', img: 'img/sofa-becca.png' },
        { id: 2, categoria: 'sofas', nombre: 'Sofa argus+ blue', precio: '$500', img: 'img/sofa-argus-+-blue.png' },
        { id: 3, categoria: 'sillas', nombre: 'Poltrona Gala', precio: '$120', img: 'img/poltrona-gala.png' },
        { id: 4, categoria: 'camas', nombre: 'Cama King', precio: '$250', img: 'img/cama-king.png' },
        { id: 5, categoria: 'camas', nombre: 'Cama Nidus', precio: '$1200', img: 'img/cama-nidus.png' },
        { id: 6, categoria: 'camas', nombre: 'Cama bubbles', precio: '$150', img: 'img/cama-bubbles.png' },
        { id: 7, categoria: 'sofas', nombre: 'Juego tyrone', precio: '$150', img: 'img/juego-tyrone-blue.png' },
        { id: 8, categoria: 'sofas', nombre: 'Juego tyrone', precio: '$150', img: 'img/juego-tyrone-grey.png' },
        { id: 9, categoria: 'sofas', nombre: 'Sofá cama LIAM - blue', precio: '$150', img: 'img/sofá cama LIAM - blue.png' },
        { id: 10, categoria: 'sofas', nombre: 'Sofá cama LIAM - grey', precio: '$150', img: 'img/sofá cama LIAM - grey.png' },
        { id: 11, categoria: 'sofas', nombre: 'Sofa ares', precio: '$150', img: 'img/sofa-ares-green.png' },
        { id: 12, categoria: 'sofas', nombre: 'Sofa ares', precio: '$150', img: 'img/sofa-ares-grey.png' },
        { id: 13, categoria: 'sillas', nombre: 'Poltrona Noah', precio: '$150', img: 'img/poltrona-noah.png' },
        { id: 14, categoria: 'sofas', nombre: 'Sofa ares', precio: '$150', img: 'img/sofa-ares-blue.png' },
        { id: 15, categoria: 'sofas', nombre: 'Sofa argus+', precio: '$150', img: 'img/sofa-argus-+-grey.png' },
        { id: 16, categoria: 'sofas', nombre: 'Sofa Dioxele', precio: '$150', img: 'img/sofa-dioxele-blue.png' },
        { id: 17, categoria: 'sofas', nombre: 'Sofa Dioxele', precio: '$150', img: 'img/sofa-dioxele-grey.png' },
        { id: 18, categoria: 'sofas', nombre: 'Sofa Dioxele', precio: '$150', img: 'img/sofa-dioxele-black.png' },
        { id: 19, categoria: 'sofas', nombre: 'Sofa Hadi', precio: '$150', img: 'img/sofa-hadi-green.png' },
        { id: 20, categoria: 'sofas', nombre: 'Sofa Hadi', precio: '$150', img: 'img/sofa-hadi-blue.png' },
        { id: 21, categoria: 'sofas', nombre: 'Sofa Hadi', precio: '$150', img: 'img/sofa-hadi-grey.png' },
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


