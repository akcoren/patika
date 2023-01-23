let greeting = document.querySelector("#greeting")

greeting.addEventListener("click", greetingClick)
greeting.addEventListener("mouseover", greetingMouseover)

function greetingClick() {
    console.log("ZURNA")
    this.innerHTML = "YARRAKOS"
}

function greetingMouseover() {
    console.log("SIE")
    // this.innerHTML = "TRISKES"
    this.style.color == "red" ? this.style.color = "black" : this.style.color="red" 
}


let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', function(event) {
// output.innerText = event.target.value.split('').join('');
output.innerText = event.target.value
});



function btnIncrease() {
    console.log("pressed increaseBtn")
    // counter = counter + 1
    // counterDOM.innerHTML = counter
    counterDOM.innerHTML = counter += 1
    localStorage.setItem("counter",counter)
}


function btnDecrease() {
    console.log("pressed decreaseBtn")
    // counter = counter - 1
    // counterDOM.innerHTML = counter - 1
    counterDOM.innerHTML = counter -= 1
    localStorage.setItem("counter",counter)
}

let counter = 0

if(localStorage.getItem("counter")) {
    counter = parseInt(localStorage.getItem("counter"))
    // localStorage.setItem("counter",counter)
} else {
    localStorage.setItem("counter",counter)
}

function btnClear() {
    counter = 0
    counterDOM.innerHTML = counter
    localStorage.setItem("counter",0)
}

let counterDOM = document.querySelector("#counter")
let increaseBtnDOM = document.querySelector("#increase")
let decreaseBtnDOM = document.querySelector("#decrease")
let clearBtnDOM = document.querySelector("#clear")

counterDOM.innerHTML = counter
increaseBtnDOM.addEventListener("click",btnIncrease)
decreaseBtnDOM.addEventListener("click",btnDecrease)
clearBtnDOM.addEventListener("click",btnClear)




