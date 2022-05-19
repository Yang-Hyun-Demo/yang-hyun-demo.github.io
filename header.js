//const HOME_PAGE_URL  = 'file:///D:/CyberLogitec%20VietNam%20Company/yanghyun/index.html'; //local url
const HOME_PAGE_URL  = 'https://yang-hyun-demo.github.io/';
function backHomePage(){
  if (!event.ctrlKey) {
    window.open(HOME_PAGE_URL, '_self');
  } else {
    let windowFocus = window.open(HOME_PAGE_URL);
    windowFocus.focus;
  }
}