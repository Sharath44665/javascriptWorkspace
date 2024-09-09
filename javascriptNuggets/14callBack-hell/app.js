//  Javascript Nuggets - Callback Hell
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

let firstHeading = document.querySelector(".first")
let secondHeading = document.querySelector(".second")
let thirdHeading = document.querySelector(".third")
const button = document.querySelector(".btn")

// button.addEventListener('click', function(){
//     setTimeout(() => {
//         firstHeading.style.color = "red";   
//     }, 1000);

//     setTimeout(() => {
//         secondHeading.style.color = "blue";
//     }, 3000);

//     setTimeout(() => {
//         thirdHeading.style.color = "green";
//     }, 2000  );
// })

button.addEventListener('click', function(){
    
    setTimeout(() => {
        firstHeading.style.color = "red"; // 1 one second
        setTimeout(() => {
            secondHeading.style.color = "blue"; // 2 three second
            setTimeout(() => {
                thirdHeading.style.color = "green"; // 3 two second
            }, 2000  );
        }, 3000)
    },1000)
})