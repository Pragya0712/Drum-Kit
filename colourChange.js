
//-------------change the colour of the buttons text to white when clicked------------
for(var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        this.style.color = "white";
        console.log(this.innerHTML);
    })
}