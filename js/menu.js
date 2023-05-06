const menuIcon = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')
const menuBackground = document.querySelector('.fecha-menu')


menuIcon.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile')
  menuBackground.classList.toggle('isClosed')
  menuIcon.classList.toggle('ph-x')
})

menuBackground.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile')
  menuBackground.classList.toggle('isClosed')
  menuIcon.classList.toggle('ph-x')
})


const checkScreenWidth = () => {
  const screenWidth = window.innerWidth

  if(screenWidth > 832){
    menu.classList.remove('menu-mobile')
    menuIcon.classList.remove('ph-x')
  }
}

window.addEventListener('resize', checkScreenWidth)