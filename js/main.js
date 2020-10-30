var slideImages = ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    i = 0;
slideShow = function() {
    document.slideshow.src = slideImages[i];
    if (i < slideImages.length - 1) {
        i++;

    } else {
        i = 0;
    }
    setTimeout("slideShow()", 4000);
}
slideShow();