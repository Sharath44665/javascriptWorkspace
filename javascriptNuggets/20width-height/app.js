// Javascript Nuggets
// Width/Height - window, any element
// innerHeight - window
// innnerWidth - window
// getBoundingClientRect() - any element


console.log(window.innerHeight)
console.log(window.innerWidth)     

const btn = document.querySelector(".btn")
const box  = document.querySelector(".box")

btn.addEventListener('click', function(){
    const dimensions = box.getBoundingClientRect()
    console.log(dimensions)
})
