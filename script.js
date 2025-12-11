document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.encabezado a'); /*selecciona todas las clases "encabezado a"*/

    navItems.forEach(item => {
        item.addEventListener('mouseover', () => { /*un evento donde al pasar el mouse por el boton le agrega la clase hover-js*/
            item.classList.add('hover-js');
        });

        item.addEventListener('mouseout', () => { /*ahora al quitarlo se lo quita*/
            item.classList.remove('hover-js');
        });
    });

});
