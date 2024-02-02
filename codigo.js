
function irArriba(pxPantalla) {
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > pxPantalla) {
            botonArriba.style.right = 100 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba(200);

const toggleMenuElement = document.getElementById('toggle-menu');
const MenuElement = document.getElementById('menu');

toggleMenuElement.addEventListener('click', () => {
    MenuElement.classList.toggle('menu--show');

});