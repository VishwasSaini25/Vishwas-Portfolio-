
// MAIN BODY

$(".myproff").css("visibility","hidden");
$(document).ready(function(){
    $(".myname").addClass("animatemyname");
   

    setTimeout(function(){
        
        $(".myproff").addClass("animatemyproff")
        $(".myproff").css("visibility","visible")

    },2000);
});

// END OF MAIN BODY

// SECOND BODY

window.addEventListener("scroll",function(){
    if(window.scrollY > 2000){
        $("span").addClass("animateinfo");
        $(".progress-line").addClass("animateprogressline");
    }
})


