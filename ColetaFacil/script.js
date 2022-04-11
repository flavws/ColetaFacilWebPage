function abrirMenu(){
    const menuHamburguer = document.querySelector('.menu-hamburguer'); 
    const listRow = document.querySelector('.list-row');
 
    listRow.classList.toggle('list-column');
    menuHamburguer.classList.toggle('fa-times');
 }