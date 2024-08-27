// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const mydate = document.getElementById("date");
mydate.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links");   // not a good approach for dynamic menus    
    var containerHight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHight  ) ; // 0
    const linksHeight =  links.getBoundingClientRect().height;                                
    // console.log(linksHeight); // 302.3958435058594
    
    if (containerHight === 0){
        linksContainer.style.height =   `${linksHeight}px `;
    }
    else{
        linksContainer.style.height = 0;
    }


})

var navbar = document.getElementById("nav");
var toplink = document.querySelector(".top-link");
// ********** fixed navbar ************

window.addEventListener('scroll', function(){       
    // console.log(this.window.pageYOffset);   // as u scroll number will display
    var scrollHight = this.window.pageYOffset;
    var navHeight = navbar.getBoundingClientRect().height;
    
    if (scrollHight > navHeight){
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHight > 100){
        toplink.classList.add("show-link");
    }
    else{
        toplink.classList.remove("show-link");  
    }
});


// ********** smooth scroll ************
// select links
var scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(mylink){
    mylink.addEventListener('click', function(e){
        e.preventDefault();
        // navigate to specific spot
        const navigateId = e.currentTarget.getAttribute("href").slice(1);  
        // console.log(navigateId);    // #about // slice => about
        const element = document.getElementById(navigateId); 
        // calculate hieghts
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav") // returns true or false

        var position = element.offsetTop -navHeight; // returns element position
        // console.log(position)

        if (!fixedNav){
            position = position-navHeight;
        }
        if (navHeight > 82){
            position = position+containerHight;
        }

        window.scrollTo({
            left:0,
            top:position,          
        });
        linksContainer.style.height =0;     
    });
});     

