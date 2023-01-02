const pinpad = document.getElementById("button")
const keyBoard = document.getElementById("keyboard")
const message = document.getElementById("message")
const values = [undefined, undefined, undefined, undefined, undefined, undefined]
const numbers = []


const pin = prompt("Unesi pin od 6 znamenki (0-9):")

const pinCheck = () => {
    if (pin.length === 6){
        
    }
}


window.onload =()=>{
    const pins = document.querySelector("#pins")
    values.forEach((value, index) => {
         let li = document.createElement("li")
         li.id=`dot${index}`
         pins.prepend(li)
})}

const renderDots = () =>{
    values.forEach((value, index) =>{
        let li = document.getElementById(`dot${index}`)
        if(value){
            li.style.color = "#2CA6FF"
        }
        else{
            li.style.color = "#C4C4C4"
        }
    })
}

const mouseClick = (e) =>{ 
    if(numbers.length === 6)
    return

    numbers.push(e.value)
    values[numbers.length - 1] = e.value
    renderDots()
    if(numbers.length === 6){
        if (pin === numbers.join("")){
            correctPin()
        }
        else{
            wrongPin()
        }
    }
}

const correctPin = () => {
    keyBoard.remove()
    message.innerHTML = "PIN correct"
}
const wrongPin = () => {
    keyBoard.remove()
    message.innerHTML = "incorrect PIN"
}

document.addEventListener("keydown", function(e){
        let num = e.key
        document.getElementsById(`${num}`).style.backgroundColor = "#2CA6FF"               
    })
const keyDown = (e) => {
    
}
    
window.addEventListener("keydown", function(event){
    event.preventDefault();
    let userInput;
    switch(event.key){
      default:
        userInput = event.key;
        break;
      case("2"):
        userInput = "2";
        break;
      case("*"):
        userInput = "x";
        break;
      case("Enter"):
        userInput = "=";
        break;
      case("Backspace"):
        userInput = "DEL";
        break;
    }
    event.preventDefault();
    buttonPressed(userInput);
  });
    
    
