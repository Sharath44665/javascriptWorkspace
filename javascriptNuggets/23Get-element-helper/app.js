let heading = document.querySelector(".heading")
// console.log(heading)

let listItems = document.querySelectorAll(".list-item")
// console.log(listItems)

const getElement = (selector, isList) => {
    // we can make the code even smaller, but i dont want to do it
    if (isList){
        const el = document.querySelectorAll(selector);
        if (el.length < 1){
            throw new Error(`${selector} not found!`);
        }
        return el;
    }


    const element = document.querySelector(selector);
    if (element){
        return element
    }
    else{
        throw new Error(`${selector} not found!`)
    }
}

console.log(getElement(".list-item", true));    




