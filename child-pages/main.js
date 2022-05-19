let slideIndexChild = 1;
showSlidesChild(slideIndexChild);

// Next/previous controls
function plusSlidesChild(n) {
  showSlidesChild(slideIndexChild += n);
}

// Thumbnail image controls
function currentSlideChild(n) {
  showSlidesChild(slideIndexChild = n);
}

function showSlidesChild(n) {
  let i;
  let slides = document.getElementsByClassName("slide-image");
  let items = document.getElementsByClassName("item-info");
  if (n > slides.length) {slideIndexChild = 1}
  if (n < 1) {slideIndexChild = slides.length}
  for (i = 0; i < items.length; i++) {
    items[i].className = items[i].className.replace(" select-item", "");
  }
  items[slideIndexChild-1].className += " select-item";
  let marginLeft = 0;
  if (slideIndexChild -1 !== 0) {
    marginLeft = - (slideIndexChild -1) * 25;
  }
  document.getElementsByClassName("slide-image")[0].style.marginLeft = `${marginLeft}%`;
}


function backHomePage(){
    if (!event.ctrlKey) {
        window.open('https://jethrokingpear.github.io/demoYanghyun/', '_self');
    } else {
        let windowFocus = window.open('https://jethrokingpear.github.io/demoYanghyun/');
        windowFocus.focus;
    }
}