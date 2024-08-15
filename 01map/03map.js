var cart = [
    {product: "rice", price: 40},
    {product: "tomato", price: 45},
    {product: "dal", price: 35}
];

var total = cart.map(item => item.price).reduce((acc, price) => acc+price, 0);
console.log(total);
