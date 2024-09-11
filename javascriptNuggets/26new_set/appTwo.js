const products = [
    {
        title: "hight-black bench",
        company: "ikea"
    },
    {
        title: "albany table",
        company: "marcos"
    },
    {
        title: "accent chair",
        company: "caressa"
    },
    {
        title: "wooden table",
        company: "ikea"
    },

];


// please note that we can write the following code in one line, which i dont wanna use     

const companies = products.map((item) => item.company)
console.log(companies) // [ 'ikea', 'marcos', 'caressa', 'ikea' ]   

const uniqueCompanies = new Set(companies)
console.log(uniqueCompanies) // Set(3) { 'ikea', 'marcos', 'caressa' }



