//using selectors inside the element

var questionDiv = document.querySelectorAll(".question");

questionDiv.forEach(function (myQuestion){
    var myBtn = myQuestion.querySelector('.question-btn');
    // console.log(myBtn)

    
    myBtn.addEventListener('click', function(){

        // hiding others
    questionDiv.forEach(function (openQuestion){
        if (openQuestion !== myQuestion){
            openQuestion.classList.remove("show-text");
        }
    });
    
        myQuestion.classList.toggle("show-text");
    })
})



