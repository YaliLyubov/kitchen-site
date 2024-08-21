const dropItem = document.querySelector('.dropdown-menu');
const menu = document.querySelector('.submenu_bottom');

dropItem.addEventListener('mouseover', function () {
    menu.style.display = "block";
});
dropItem.addEventListener('mouseout', function () {
    menu.style.display = "none";
});