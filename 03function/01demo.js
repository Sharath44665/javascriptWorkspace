const myCar = {
    company : "honda",
    model : "accord",
    year : 1998
};

function myFunc(theObj){
    theObj.company = "toyota";

}

console.log(myCar.company); // honda
myFunc(myCar);
console.log(myCar.company); // toyota               