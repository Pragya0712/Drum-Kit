var numOfDrumButtons = document.querySelectorAll(".drum").length;

// Plays sound on button clicks
for(var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    })
}

//Plays sound on keyboard key press
document.addEventListener("keydown", function(event){

    makeSound(event.key);
    animateButton(event.key);
})

//to play the sound according to the key or button pressed
function makeSound(key){
    switch(key){
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
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "k": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;
        case "l": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;

        default: 
            console.log(buttonInnerHTML);
            console.log(event.key);
            break;
        
    }
}

//add animation to the letter of the button pressed
function animateButton(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}

/*


//-------------play drum1 sound when buttons are clicked--------------------------------

function playSound(){
    var drum1Sound = new Audio("sounds/tom-1.mp3");
    drum1Sound.play();
}

//-------------- logs the keyboard events that triggered event listener----------

document.addEventListener("keydown", function(event){
    console.log(event); 
});


//-------------- alerts when any keyboard key is pressed in the document----------

document.addEventListener("keydown", function(){
    alert("Key was pressed!");
});

*/