const btn = document.querySelector('.btn-top')
const logo = document.querySelector('.logo')
const menuMobile = document.querySelector('.menu-mobile')
const nav = document.querySelector('.menu')
const navItems = nav.querySelectorAll('a')

window.onscroll = () => {
  if(document.documentElement.scrollTop > 400){ 
    btn.style.display = 'block'
    logo.style.height = '9rem'
    logo.style.width = '9rem'
    menuMobile.style.top = '6rem'
  }else{
    btn.style.display = 'none'
    logo.style.width = '12rem'
    logo.style.height = '12rem'
    menuMobile.style.top = '8rem'
    navItems.classlist.toggle('active-menu')
  }
}

