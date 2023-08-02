//Detecting Button Press

var numberofdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofdrums;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
function handleclick(){
            // var audio=new Audio("sounds/crash.mp3");
            // audio.play();
            // this.style.color="red";
            var buttoninnerHTML=this.innerHTML;
            makesound(buttoninnerHTML);
            buttonAnimation(buttoninnerHTML);
       
}}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);

});

function makesound(key){
    switch (key) {
        case "A":
            var crash1=new Audio("sounds/crash.mp3");
            crash1.play();
            break;
            case "S":
            var kick1=new Audio("sounds/kick-bass.mp3");
            kick1.play();
            break;
            case "D":
            var snare1=new Audio("sounds/snare.mp3");
            snare1.play();
            break;
            case "F":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "J":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "K":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "L":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
         
    
        default:console.log(innerHTML);
            break;
    }

}

function buttonAnimation(currentkey){
     
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}