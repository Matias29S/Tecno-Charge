document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.encabezado a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover-js');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('hover-js');
        });
    });
});