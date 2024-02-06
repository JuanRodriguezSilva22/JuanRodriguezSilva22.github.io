
function irArriba(pxPantalla) {
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > pxPantalla) {
            botonArriba.style.right = 30 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    })
}


irArriba(200);
/* tomar las 2 variables para menu responsive */
const toggleMenuElement = document.getElementById('toggle-menu');
const MenuElement = document.getElementById('menu');
/*agregar las variables a la clase menu show creada en css*/
toggleMenuElement.addEventListener('click', () => {
    MenuElement.classList.toggle('menu--show');

});