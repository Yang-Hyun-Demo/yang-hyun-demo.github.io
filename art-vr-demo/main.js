function backHomePage(){
    if (!event.ctrlKey) {
        window.open('https://jethrokingpear.github.io/demoYanghyun/', '_self');
    } else {
        let windowFocus = window.open('https://jethrokingpear.github.io/demoYanghyun/');
        windowFocus.focus;
    }
}