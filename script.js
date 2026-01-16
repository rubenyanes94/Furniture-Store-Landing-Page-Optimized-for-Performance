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


    // 1. Base de Datos de Productos
const productosDB = [
    // --- SOFÁS ---
    { 
        id: 1, 
        categoria: 'sofas', 
        nombre: 'Sofá Lua', 
        precio: '$520', 
        img: 'img/sofa-becca.png', 
        medidas: '210 x 90 cm', 
        material: 'Tela' 
    },
    { 
        id: 2, 
        categoria: 'sofas', 
        nombre: 'Sofá Nexus Elite', 
        precio: '$1.600', 
        img: 'img/sofa-argus-+-blue.png', 
        medidas: '305 x 210 cm', 
        material: 'Tela' 
    },
    { 
        id: 7, 
        categoria: 'sofas', 
        nombre: 'Juego Consul', 
        precio: '$630', 
        img: 'img/juego-tyrone-blue.png', 
        medidas: '3P: 178 x 75 cm', 
        material: 'Tela' 
    },
    { 
        id: 8, 
        categoria: 'sofas', 
        nombre: 'Sofá cama Mor', 
        precio: '$800', 
        img: 'img/sofá cama LIAM - grey.png', 
        medidas: '185 x 90 cm', 
        material: 'Tela' 
    },
    { 
        id: 9, 
        categoria: 'sofas', 
        nombre: 'Sofá Pro', 
        precio: '$520', 
        img: 'img/sofa-ares-green.png', 
        medidas: '180 x 80 cm', 
        material: 'Tela' 
    },
    { 
        id: 11, 
        categoria: 'sofas', 
        nombre: 'Vitra - Dos puestos', 
        precio: '$650', 
        img: 'img/sofa-dioxele-blue.png', 
        medidas: '170 x 95 cm', 
        material: 'Tela' 
    },
    { 
        id: 12, 
        categoria: 'sofas', 
        nombre: 'Sofá Aura', 
        precio: '$520', 
        img: 'img/sofa-hadi-green.png', 
        medidas: '180 x 80 cm', 
        material: 'Tela' 
    },
    { 
        id: 14, 
        categoria: 'sofas', 
        nombre: 'Sofá Modular Comfy', 
        precio: '$440', 
        img: 'modular-estambul-grey.png', 
        medidas: '240 x 150 cm', 
        material: 'Tela' 
    },
    { 
        id: 25, 
        categoria: 'sofas', 
        nombre: 'Juego Vitra', 
        precio: '$1.440', 
        img: 'juego-dioxele.png', 
        medidas: '3P: 215x95 | 2P: 170x95', 
        material: 'Tela' 
    },
    { 
        id: 26, 
        categoria: 'sofas', 
        nombre: 'Vitra - 3 Puestos', 
        precio: '$790', 
        img: 'dioxele-tres.png', 
        medidas: '215 x 95 cm', 
        material: 'Tela' 
    },
    { 
        id: 27, 
        categoria: 'sofas', 
        nombre: 'Juego Broca', 
        precio: '$1.550', 
        img: 'juego-broca.png', 
        medidas: '3P: 235x95 | 2P: 170x95', 
        material: 'Tela' 
    },
    { 
        id: 28, 
        categoria: 'sofas', 
        nombre: 'Broca - 3 Puestos', 
        precio: '$775', 
        img: 'broca-3.png', 
        medidas: '235 x 95 cm', 
        material: 'Tela' 
    },
    { 
        id: 29, 
        categoria: 'sofas', 
        nombre: 'Broca - 2 Puestos', 
        precio: '$770', 
        img: 'broca-dos-puestos.png', 
        medidas: '170 x 95 cm', 
        material: 'Tela' 
    },
    { 
        id: 31, 
        categoria: 'sofas', 
        nombre: 'Sofa Bubble', 
        precio: '$220', 
        img: 'poltrona-carlos.png', 
        medidas: '195 x 170 cm', 
        material: 'Tela' 
    },
    { 
        id: 36, 
        categoria: 'sofas', 
        nombre: 'Juego Legado', 
        precio: '$980', 
        img: 'juego-clasico.png', 
        medidas: '3P: 180x75 | 2P: 150x85', 
        material: 'Tela' 
    },
    { 
        id: 41, 
        categoria: 'sofas', 
        nombre: 'Nuvola Especial', 
        precio: '$370', 
        img: 'modular-especial.png', 
        medidas: 'Sofá: 180 x 70 cm', 
        material: 'Tela' 
    },
    { 
        id: 42, 
        categoria: 'sofas', 
        nombre: 'Modular Nexus', 
        precio: '$1.580', 
        img: 'sofa-argus-blue.png', 
        medidas: '265 x 210 cm', 
        material: 'Tela' 
    },
    { 
        id: 43, 
        categoria: 'sofas', 
        nombre: 'Modular Kori', 
        precio: '$440', 
        img: 'modular-basil-original.png', 
        medidas: '195 x 170 cm', 
        material: 'Tela' 
    },

    // --- SILLAS Y POLTRONAS ---
    { 
        id: 3, 
        categoria: 'sillas', 
        nombre: 'Poltrona Velvet', 
        precio: '$220', 
        img: 'img/poltrona-gala.png', 
        medidas: '75 x 78 cm', 
        material: 'Tela' 
    },
    { 
        id: 10, 
        categoria: 'sillas', 
        nombre: 'Poltrona Bubble', 
        precio: '$300', 
        img: 'img/poltrona-noah.png', 
        medidas: '80 cm (Diámetro)', 
        material: 'Tela' 
    },
    { 
        id: 37, 
        categoria: 'sillas', 
        nombre: 'Poltrona Sira', 
        precio: '$200', 
        img: 'poltrona-valery.png', 
        medidas: '95 x 70 cm', 
        material: 'Tela' 
    },
    { 
        id: 38, 
        categoria: 'sillas', 
        nombre: 'Poltrona Eva', 
        precio: '$200', 
        img: 'poltrona-eva.png', 
        medidas: '95 x 70 cm', 
        material: 'Tela' 
    },
    { 
        id: 39, 
        categoria: 'sillas', 
        nombre: 'Sillon Mura', 
        precio: '$200', 
        img: 'mura.png', 
        medidas: '55 x 68 cm', 
        material: 'Tela' 
    },
    { 
        id: 40, 
        categoria: 'sillas', 
        nombre: 'Poltrona Duna', 
        precio: '$200', 
        img: 'duna.png', 
        medidas: '95 x 70 cm', 
        material: 'Tela' 
    },

    // --- CAMAS ---
    { 
        id: 4, 
        categoria: 'camas', 
        nombre: 'Cama Dintel - Queen', 
        precio: '$440', 
        img: 'img/cama-king.png', 
        medidas: '190 x 160 cm', 
        material: 'Tela/Madera' 
    },
    { 
        id: 5, 
        categoria: 'camas', 
        nombre: 'Cama Saint - Individual', 
        precio: '$290', 
        img: 'img/cama-nidus.png', 
        medidas: '190 x 100 cm', 
        material: 'Tela/Madera' 
    },
    { 
        id: 6, 
        categoria: 'camas', 
        nombre: 'Cama Puro - Matrimonial', 
        precio: '$380', 
        img: 'img/cama-bubbles.png', 
        medidas: '190 x 135 cm', 
        material: 'Tela/Madera' 
    },
    { 
        id: 30, 
        categoria: 'camas', 
        nombre: 'Cama Night - King', 
        precio: '$800', 
        img: 'cama-night.png', 
        medidas: '200 x 200 cm', 
        material: 'Tela/Madera' 
    },

    // --- MESAS (Madera) ---
    { 
        id: 15, 
        categoria: 'mesas', 
        nombre: 'Corteza', 
        precio: '$120', 
        img: 'mesa-corteza.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 16, 
        categoria: 'mesas', 
        nombre: 'Veta', 
        precio: '$120', 
        img: 'mesa-veta.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 17, 
        categoria: 'mesas', 
        nombre: 'Astilla', 
        precio: '$120', 
        img: 'mesa-astilla.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 18, 
        categoria: 'mesas', 
        nombre: 'Lignum', 
        precio: '$120', 
        img: 'mesa-lignum.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 19, 
        categoria: 'mesas', 
        nombre: 'Bosque', 
        precio: '$120', 
        img: 'mesa-bosque.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 20, 
        categoria: 'mesas', 
        nombre: 'Nudo', 
        precio: '$120', 
        img: 'mesa-nudo.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 21, 
        categoria: 'mesas', 
        nombre: 'Artesano', 
        precio: '$120', 
        img: 'mesa-artesano.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 22, 
        categoria: 'mesas', 
        nombre: 'Roble', 
        precio: '$120', 
        img: 'mesa-roble.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 23, 
        categoria: 'mesas', 
        nombre: 'Sandalo', 
        precio: '$160', 
        img: 'mesa-sandalo.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 24, 
        categoria: 'mesas', 
        nombre: 'Raiz', 
        precio: '$120', 
        img: 'mesa-raiz.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },

    // --- NOVEDADES (Duplicados para la sección de novedades) ---
    { 
        id: 32, 
        categoria: 'novedades', 
        nombre: 'Sofa Bubble', 
        precio: '$220', 
        img: 'poltrona-carlos.png', 
        medidas: '195 x 170 cm', 
        material: 'Tela' 
    },
    { 
        id: 33, 
        categoria: 'novedades', 
        nombre: 'Sandalo', 
        precio: '$160', 
        img: 'mesa-sandalo.png', 
        medidas: 'Consultar', 
        material: 'Madera' 
    },
    { 
        id: 34, 
        categoria: 'novedades', 
        nombre: 'Cama Dintel - Queen', 
        precio: '$440', 
        img: 'img/cama-king.png', 
        medidas: '190 x 160 cm', 
        material: 'Tela/Madera' 
    },
    { 
        id: 35, 
        categoria: 'novedades', 
        nombre: 'Sofá Nexus Elite', 
        precio: '$1.600', 
        img: 'img/sofa-argus-+-blue.png', 
        medidas: '305 x 210 cm', 
        material: 'Tela' 
    }
];


// 2. Configuración y Selectores
const numeroWhatsApp = "521234567890";
const seccionDisplay = document.getElementById('display-productos');
const contenedor = document.getElementById('contenedor-productos');
const tituloSeccion = document.getElementById('titulo-seccion');


function mostrarProductos(categoria) {
    // 1. Mostrar la sección y limpiar
    seccionDisplay.classList.remove('d-none');
    contenedor.innerHTML = '';

    // 2. Filtrar
    const filtrados = productosDB.filter(p => p.categoria === categoria);
    tituloSeccion.textContent = 'Explorando: ' + categoria.toUpperCase();

    // 3. Validar si hay productos
    if (filtrados.length === 0) {
        contenedor.innerHTML = '<p class="text-center text-muted w-100">No hay productos disponibles en esta categoría.</p>';
        return;
    }

    // 4. Generar HTML
    const htmlContent = filtrados.map(p => {
        // --- AQUÍ FALTABA ESTO: Definir medidas y material ---
        const medidas = p.medidas || 'Consultar';
        const material = p.material || 'Tela'; 

        const mensaje = `Hola, estoy interesado en el modelo ${p.nombre} que vi en la web por ${p.precio}.`;
        // Asegúrate de que numeroWhatsApp esté definido globalmente
        const linkWhatsApp = `https://wa.me/${typeof numeroWhatsApp !== 'undefined' ? numeroWhatsApp : ''}?text=${encodeURIComponent(mensaje)}`;

        return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 animate__animated animate__fadeIn">
                <div class="card h-100 border-0 shadow-sm overflow-hidden">
                    <div class="row g-0 h-100">
                        
                        <div class="col-7 col-md-12 position-relative">
                            <img 
                                src="${p.img}" 
                                loading="lazy" 
                                class="img-fluid w-100" 
                                style="height: 220px; object-fit: cover; object-position: center;" 
                                alt="${p.nombre}"
                            >
                        </div>
                        
                        <div class="col-5 col-md-12 d-flex flex-column">
                            <div class="card-body d-flex flex-column p-2 p-md-3 h-100 text-md-center text-start">
                                
                                <div class="mb-1">
                                    <h6 class="fw-bold text-truncate mb-0" style="font-size: 0.9rem;" title="${p.nombre}">${p.nombre}</h6>
                                    <p class="text-primary fw-bold mb-1" style="font-size: 0.9rem;">${p.precio}</p>
                                </div>

                                <div class="mb-2">
                                    <div class="d-flex align-items-center justify-content-start justify-content-md-center gap-2 mb-0">
                                        <i class="fa-solid fa-ruler-combined text-secondary" style="font-size: 0.7rem; width: 12px; text-align:center;"></i>
                                        <span class="text-muted text-truncate" style="font-size: 0.65rem; max-width: 80px;" title="${medidas}">${medidas}</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-start justify-content-md-center gap-2">
                                        <i class="fa-solid fa-couch text-secondary" style="font-size: 0.7rem; width: 12px; text-align:center;"></i>
                                        <span class="text-muted text-truncate" style="font-size: 0.65rem; max-width: 80px;">${material}</span>
                                    </div>
                                </div>

                                <div class="mb-2 d-none d-md-block"> 
                                    <div class="d-flex align-items-center justify-content-center gap-1">
                                        <span class="color-swatch-sm" style="width:10px; height:10px; background-color: #34495e;"></span>
                                        <span class="color-swatch-sm" style="width:10px; height:10px; background-color: #95a5a6;"></span>
                                        <span class="color-swatch-sm" style="width:10px; height:10px; background-color: #c7b299;"></span>
                                        <span class="text-muted small fw-bold" style="font-size: 0.7rem;">+</span>
                                    </div>
                                </div>
                                
                                <div class="mt-auto w-100">
                                    <a href="${linkWhatsApp}" target="_blank" class="btn btn-success btn-sm w-100 d-flex align-items-center justify-content-center gap-2 py-2">
                                        <i class="bi bi-whatsapp"></i> 
                                        <span class="small fw-bold" style="font-size: 0.75rem;">Comprar</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join(''); 

    // 5. Inyectar y Scroll
    contenedor.innerHTML = htmlContent;
    seccionDisplay.scrollIntoView({ behavior: 'smooth' });
}

// 4. Event Listeners
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


