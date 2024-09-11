// returns true or false

const firstname = "sharath"

const result = firstname.includes('sha')
console.log(result) // true
const anotherResult = firstname.includes('s',1)
console.log(anotherResult) // false


const products = [
    {
        title: "hight-black bench",
    },
    {
        title: "albany table",
    },
    {
        title: "demo",
     
    },
    {
        title: "wooden table",
    },

];

text = "a"

const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(text))
console.log(filteredProducts)

// [
//     { title: 'hight-black bench' },
//     { title: 'albany table' },
//     { title: 'wooden table' }
// ]
  


