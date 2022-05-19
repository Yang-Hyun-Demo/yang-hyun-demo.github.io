let slideIndex = 1;
let slideIndexContent = 1;
showSlides(slideIndex);
setInterval(function(){
  slideIndex++;
  currentSlide(slideIndex);
}, 10000)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("manual-btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" select", "");
  }
  dots[slideIndex-1].className += " select";
  let marginLeft = 0;
  if (slideIndex -1 !== 0) {
    marginLeft = - (slideIndex -1) * 25;
  }
  document.getElementsByClassName("slide frist")[0].style.marginLeft = `${marginLeft}%`;
}

// Next/previous controls content
function plusSlidesContent(n) {
  showSlidesContent(slideIndexContent += n);
}

// Thumbnail image controls
function currentSlideContent(n) {
  showSlidesContent(slideIndexContent = n);
}

function showSlidesContent(n) {
  let i;
  let slides = document.getElementsByClassName("slide-content");
  let items = document.getElementsByClassName("item-info");
  if (n > slides.length) {slideIndexContent = 1}
  if (n < 1) {slideIndexContent = slides.length}
  for (i = 0; i < items.length; i++) {
      items[i].className = items[i].className.replace(" select-item", "");
  }
  items[slideIndexContent-1].className += " select-item";
  let marginLeft = 0;
  if (slideIndexContent -1 !== 0) {
    marginLeft = - (slideIndexContent -1) * 20;
  }
  document.getElementsByClassName("slide-content frist-slide")[0].style.marginLeft = `${marginLeft}%`;
}

function backHomePage(){
  if (!event.ctrlKey) {
    window.open('https://jethrokingpear.github.io/demoYanghyun/', '_self');
  } else {
    let windowFocus = window.open('https://jethrokingpear.github.io/demoYanghyun/');
    windowFocus.focus;
  }
}