var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClicked);
}
function handleClicked () {
   var buttonInnerhtml = this.innerHTML;
makeSound(buttonInnerhtml)
buttonAnimation(buttonInnerhtml)
}
document.addEventListener("keypress", keyPress);
function keyPress(event) {
    makeSound(event.key);
    console.log(event.key)
    buttonAnimation(event.currutkey);
}
function makeSound(key) {

switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
    case "j": 
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
    case "l":
        var kick= new Audio("sounds/kick.mp3");
        kick.play();
        break;

default:
}
   }
function buttonAnimation(currutkey){
    var activeButton = document.querySelector("."+ currutkey);
    activeButton.classList.add("pressed")
    setTimeout(function (){
        activeButton.classList.remove("pressed");

    },100);
}