document.addEventListener('DOMContentLoaded', () => {
  new Glide('.glide', {
    type:'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    hoverpause: false,
    keyboard: true,
    gap: 0
  }).mount()
  new Glide('.news', {
    type:'carousel',
    startAt: 0,
    perView: 3,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    gap: 20
  }).mount()
})