const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo')
})

const linkMenu = document.querySelector('.menu-lateral__link')

linkMenu.addEventListener('mouseover', () => {
  linkMenu.classList.toggle('menu-lateral__link--ativo')
})
linkMenu.addEventListener('mouseout', () => {
  linkMenu.classList.toggle('menu-lateral__link--ativo')
})