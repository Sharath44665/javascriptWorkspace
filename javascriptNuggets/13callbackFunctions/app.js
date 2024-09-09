function makeUpperCase(value){
    console.log(value.toUpperCase());
}

// makeUpperCase("sharathchandra"); // SHARATHCHANDRA

function makeReverseString(stringValue){
    // someVal = "sharath"
    // console.log(stringValue.split('')); //[ 's', 'h', 'a', 'r', 'a', 't', 'h']
    // console.log(stringValue.split('').reverse()); // ['h', 't', 'a', 'r', 'a', 'h', 's']
    console.log(stringValue.split('').reverse().join('')); // htarahs
}
// makeReverseString("sharath");
function handleName(name, fn){ // fn = function 

    fullName= `${name} chandra`;
    fn(fullName);
    

}           

// handleName("sharath", makeUpperCase); // SHARATH CHANDRA
// handleName("sharath", makeReverseString); // ardnahc htarahs
                            
// handleName("miku", function(val){
//     console.log(val) // miku chandra
// })


const myBtn = document.querySelector(".btn");
let heading = document.querySelector('.container h2')

myBtn.addEventListener('click', function(){
    console.log(heading);
    
    heading.innerHTML = "Hello you clicked !"

})
