
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
    if (isMobile) {
        // alert("You are using Mobile");
    } else {
         
            window.location = 'desktop version/desktop.html';
        
        }	
$(document).ready(function(){
    

    $("#vento").animate({
        fontSize:"60px"},
        1000
    );
    $("#vento").animate({
        left:"60px"},
        1000
    );
    $("#exciting").animate({
        left: 110,
        opacity:0,
    });	
    $("#exciting").animate({
        left: 25,
        opacity:1,
    });	
});

var text=document.querySelector('#k');
var text1=text.textContent;
var arr=text1.split("");
text.textContent="";
for(let i=0;i<arr.length;i++){
    text.innerHTML += "<span>" +arr[i] + "</span>";
}
let char=0;
let timer=setInterval(onTick,30);
function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add("fadeOut");
    char++;
    if (char === arr.length){
        clearInterval(timer);
        timer=null;
        return;
    }
}

$("#search-btn").click(function(){
    const ip=$("#wayg").val();
    if(ip==""){
        alert("Type something then search.");
    }
    else{
        window.location="https://www.google.com/search?q="+ip+"+in+kolkata";
    }
});