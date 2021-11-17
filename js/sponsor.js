var adsIndex = 0;
adsSlides();

function adsSlides() {
  var i;
  var slides = document.getElementsByClassName("sponsorSlides");
  var dots = document.getElementsByClassName("dotS");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  adsIndex++;
  if (adsIndex > slides.length) {adsIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeS", "");
  }
  slides[adsIndex-1].style.display = "block";  
  dots[adsIndex-1].className += " activeS";
  setTimeout(adsSlides, 4000);
}