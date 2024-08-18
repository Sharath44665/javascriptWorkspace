var sidebarButton = document.querySelector(".sidebar-toggle");
var sidebar = document.querySelector(".sidebar");
var closeButton = document.querySelector(".close-btn");

sidebarButton.addEventListener('click', function(){
    // console.log(sidebarButton.classList)
    sidebar.classList.toggle("show-sidebar");     
});


closeButton.addEventListener('click', function(){
    sidebar.classList.remove("show-sidebar");       
})