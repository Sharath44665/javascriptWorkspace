//using selectors inside the element -> see app.js, for full refer to app.js


// traversing the dom

var allQuestBtns = document.querySelectorAll(".question-btn");

// console.log(allQuestBtn);

allQuestBtns.forEach(function (myBtn){
    myBtn.addEventListener('click',function(e){
        // console.log(e.currentTarget);
        var getParentElement = e.currentTarget.parentElement.parentElement;
        // console.log(getParentElement)
        getParentElement.classList.toggle('show-text');
    });
});




