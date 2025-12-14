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
});


