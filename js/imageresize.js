window.addEventListener('resize', function() {
  if (window.innerWidth < 1102) {
    document.getElementById('slide1').src = 'assets/slide1mobile.png';
    document.getElementById('slide2').src = 'assets/slide2mobile.png';
    document.getElementById('slide3').src = 'assets/slide3mobile.png';
  } else {
    document.getElementById('slide1').src = 'assets/slide1.png';
    document.getElementById('slide2').src = 'assets/slide2.png';
    document.getElementById('slide3').src = 'assets/slide3.png';
  }
});