//-------------alert saying I got clicked pops up when buttons are clicked------------

for(var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert(" I got clicked!")
    })
}