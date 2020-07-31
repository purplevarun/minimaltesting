alert("THIS WEBSITE IS PRIMARILY DESIGNED FOR MOBILES");
$(document).ready(function(){
    $("#vento").animate({
        fontSize:"100px"},
        1000
    );
    $("#vento").animate({
        left:"460px",top:"80px"},
        1000
    );
        
    $("#exciting").animate({
        left: 150,
        opacity:0,
    });	
    $("#exciting").animate({
        left: 445,
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