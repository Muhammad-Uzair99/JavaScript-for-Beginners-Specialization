(function(){
    "use strict";

    const imgs = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    const imgEl = document.querySelector("#myimage");
    const next = document.querySelector("#next");
    const prev = document.querySelector("#previous");
    let currentImg = 0;

    next.addEventListener("click", () => {
        currentImg++;
        if(currentImg >= imgs.length) {
            currentImg = 0;
        }
        imgEl.src = imgs[currentImg];
    });

    prev.addEventListener("click", () => {
        currentImg--;
        if(currentImg < 0) {
            currentImg = imgs.length - 1;
        }
        imgEl.src = imgs[currentImg];
    });
})();