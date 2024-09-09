//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const myBtn = document.querySelector(".btn")

myBtn.addEventListener('click', function() {
    // addColor(1000, ".first", "red").then(()=>{
    //     addColor(3000, ".second", "blue").then(() => {
    //         addColor(2000, ".third", "green").then().catch((err)=>console.log(err))
    //     }).catch((err) => console.log(err))
    // }).catch((err) => console.log(err));

    addColor(1000, ".first", "red")
    .then(() => addColor(3000, ".second", "blue"))
    .then(() => addColor(2000, ".third", "green"))
    .catch((err) => console.log(err));

})  

function addColor(myTime, selector, color){
    const element = document.querySelector(selector)
    // console.log(element)

    return new Promise((resolve, reject) => {
        if (element){
            setTimeout(() => {  
                element.style.color = color;
                resolve()
            }, myTime);
            
        }
        else{
            reject(`there is no such element: "${selector}"`)
        }
    })

}