let index = 1;
showSlidesNews(index);

// Next/previous controls
function plusSlides(n) {
  showSlidesNews(index += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesNews(index = n);
}

function showSlidesNews(n) {
  let i;
  let slides = document.getElementsByClassName("new");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[index-1].style.display = "block";
}