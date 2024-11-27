/*Esta funcion se ejecuta cuando el usuario hace clic en el icono de menu en las pantallas moviles*/
function toggleMenu() {
    var navLinks = document.getElementById("navLinks");/*Obtiene el elemento de la lista
    de navegacion*/
    navLinks.classList.toggle("active");/*Alterna la clase "active", lo que muestra u oculta
    el menu en moviles*/
}
