// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
// console.log(Array.from(udemy)); //[ 'u', 'd', 'e', 'm', 'y' ]

const text = document.querySelectorAll(".text");
// console.log(text); // returns nodelist // check in browser

let newText = Array.from(text)

// console.log(newText); // [h2.text, h2.text, h2.text]

newText = Array.from(text).find((item) =>{
    return item.textContent  === "person"});

// console.log(newText); // <h2 class="text">person</h2>


let items = Array.from({length:120});

// console.log(items) // prints undefined 120 times in array

items = Array.from({length:120}, (_,idx) => { // ignore the first parameter 
    return idx;
})
// console.log(items); //prints [0, 1, 2, 3, .... 119]

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);   
// console.log(pages) // 9

let newItems = Array.from({length:pages}, (_,idx) => {
    const start = idx * itemsPerPage;
    const tempItems = items.slice(start,start+itemsPerPage);
    return tempItems;

});
console.log(newItems);
  

