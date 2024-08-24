// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const btn = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

btn.addEventListener('click', function(){
    if (btn.classList.contains("slide")){
        btn.classList.remove("slide");
        videoContainer.play()
    }
    else{
        btn.classList.add("slide");
        videoContainer.pause();
    }
});

const preloader = document.querySelector(".preloade     r")

window.addEventListener('load', function(){
    preloader.classList.add("hide-preloader");
});

