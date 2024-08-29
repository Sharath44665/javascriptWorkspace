const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, idx){
    slide.style.left = `${idx*100}%`;   
}); 

var counter = 0
prevBtn.style.display="none"; // comment this if you want to show this in the beginning

nextBtn.addEventListener('click', function(){
    counter += 1;
    caruosel();
})

prevBtn.addEventListener('click', function(){
    counter -= 1;
    caruosel();
})


function caruosel(){
    // if (counter == slides.length){ // end of the slide click next
    //     counter =0;
    // }
    // if (counter < 0){ // first slide and click prev
    //     counter = slides.length-1;
    // }
   
    if (counter < slides.length-1){
        nextBtn.style.display = "block";
    }
    else{
        nextBtn.style.display = "none";
    }
    if (counter > 0){
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display="none";   
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;     
    })
}