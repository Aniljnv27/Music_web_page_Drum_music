var numberOfDrum =document.querySelectorAll(".drum").length;
// Detecting when button is pressed

for(var i=0;i<numberOfDrum;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
         //this.style.color="white";
         var button=this.innerHTML;
         makeSound(button);
         addAnimation(button);
       });


// Detecting when kwy is pressed 

  document.addEventListener("keydown",function(event){
 console.log(event);
makeSound(event.key);
addAnimation(event.key);
});


function makeSound(key){

    switch(key){
        case "a":
        var tom1=new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        case "b":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
        case "c":
        var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":
        var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
        case "e":
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        case "f":
        var kick_bass=new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
        case "g":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    
        default:
            console.log(Event);
    
    
      }
}
    }   
 function addAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
 }
