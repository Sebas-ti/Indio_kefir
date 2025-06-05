        // Script para el efecto de scroll en la navbar
        const navbar = document.getElementById('mainNavbar');
        const scrollTopThreshold = 50; // Cuántos píxeles scrollear antes de aplicar el estilo

        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollTopThreshold) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Opcional: Cerrar el menú móvil después de hacer clic en un enlace
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
        const navToggler = document.querySelector('.navbar-toggler');
        const collapseMenu = document.querySelector('.navbar-collapse');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Solo cierra si el menú está expandido (visible en móvil)
                if (collapseMenu.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(collapseMenu, {
                        toggle: false // Evita que se vuelva a abrir/cerrar inmediatamente
                    });
                    bsCollapse.hide();
                }
            });
        });