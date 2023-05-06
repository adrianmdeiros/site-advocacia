window.onscroll = () => {
  scroll()
}
const scroll = () => {
  const btn = document.querySelector('.btn-top')
  const logo = document.querySelector('.logo')
  const menuMobile = document.querySelector('.menu-mobile')
  if(document.documentElement.scrollTop > 100){
    btn.style.display = 'block'
    logo.style.height = '10rem'
    logo.style.width = '10rem'
    menuMobile.style.top = '8rem'
  }else{
    btn.style.display = 'none'
    logo.style.width = '14rem'
    logo.style.height = '14rem'
    menuMobile.style.top = '10rem'
  }
}
