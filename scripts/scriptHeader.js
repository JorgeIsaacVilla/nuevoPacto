const menuItems = document.querySelector('.menu-items');
const listMenu = document.querySelector('.list-menu');

menuItems.addEventListener('click', () => {
    console.log('clic en menu')
   listMenu.classList.toggle('display-none');
});
