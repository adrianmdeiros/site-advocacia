let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// document.querySelector(".slide-container").addEventListener("wheel", (e)=>{
//   if(e.deltaY < 0){
//     e.target.scrollBy(300, 0)
//   }else{
//     e.target.scrollBy(-300, 0)
//   }
// })