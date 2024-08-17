var counter = 0;

var spanValue = document.querySelector("#value");
var allBtns = document.querySelectorAll(".btn");

allBtns.forEach(function(buttonItem){
    // console.log(item);

    buttonItem.addEventListener('click', function(e){
        // console.log(e.target.classList);
        var checkButton = e.target.classList;
        
        if (checkButton.contains("decrease")){
            counter -=  1;
            
        }
        else if (checkButton.contains("increase")){
            counter += 1;
            
        }
        else if (checkButton.contains("reset")){
            counter = 0;   
        }

        if (counter > 0){
            spanValue.style.color = "green";
        }
        else if (counter < 0){
            spanValue.style.color = "red";
        }
        else if (counter === 0){
            spanValue.style.color = "black";
        }
        spanValue.textContent = counter;

    });
});