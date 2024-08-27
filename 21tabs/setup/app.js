const allBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articleContent = document.querySelectorAll(".content");

about.addEventListener('click', function(e){
    // console.log(e.target);  //<p> <button>
    // console.log(e.target.dataset.myid);
    const myid = e.target.dataset.myid;

    if (myid){
        // remove existing active content and add selected content
        allBtns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // hide all articles
        articleContent.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(myid);
        element.classList.add("active");

    }

});

