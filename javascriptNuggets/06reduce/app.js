const cart = [
    {
      title: 'Samsung Galaxy S7',
      price: 599.99,
      amount: 1,
    },
    {
      title: 'google pixel ',
      price: 499.99,
      amount: 2,
    },
    {
      title: 'Xiaomi Redmi Note 2',
      price: 699.99,
      amount: 4,
    },
    {
      title: 'Xiaomi Redmi Note 5',
      price: 399.99,
      amount: 3,
    },
  ]


let {totalItems, cartTotal} = cart.reduce((total, cartItem) => {
    const {amount, price} = cartItem; // meaning amount of cart and  price of cart
    // console.log(amount)
    // console.log(price)
    // console.log(cartItem) // prints every objects

    // console.log(total) // prints 4 times whatever initialized

    // total items
    total.totalItems += amount

    // sum of price
    total.cartTotal += amount * price;

    
    return total; 
}, {totalItems : 0,
    cartTotal : 0
})

cartTotal = parseFloat(cartTotal.toFixed(2)) // returns string so type converting it into float         
// console.log(total) // { totalItems: 10, cartTotal: 5599.900000000001 }

console.log(totalItems, cartTotal) // 10 5599.9

const url = 'https://api.github.com/users/sharath44665/repos?per_page=100';

const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const newData = data.reduce((total, repo) => {
        const {language} = repo; 
        // console.log(language) // prints all languages found in respective repo

        if (language){
            if(total[language]){
                total[language] = total[language] + 1;
            }
            else{
                total[language] = 1
            }
        }
        // console.log(total[language])
        return total;
    }, {});
    console.log(newData)
    // output:
    // {
    //     Python: 15,
    //     HTML: 9,
    //     CSS: 3,
    //     C: 1,
    //     Shell: 1,
    //     Java: 1,
    //     JavaScript: 1,
    //     HCL: 9
    //   }
}

fetchRepos()
