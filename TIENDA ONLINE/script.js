
    let cartCount = 0;

    function addToCart() {
        cartCount++;
        document.querySelector('.content-shopping-cart .number').textContent = `(${cartCount})`;
    }

    // Asignar la función al botón de añadir al carrito
    const addCartButtons = document.querySelectorAll('.add-cart');
    addCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        const searchTerm = searchForm.querySelector('input[type="search"]').value;
        alert(`Buscando: ${searchTerm}`);
    });

    // Esperar a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        // Seleccionar todos los enlaces con la clase 'open-tab'
        const openTabLinks = document.querySelectorAll('.open-tab');

        // Agregar un evento de clic a cada enlace
        openTabLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
                const url = this.getAttribute('href'); // Obtener la URL del enlace
                window.open(url, '_blank'); // Abrir la URL en una nueva pestaña
            });
        });
    });
