 
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

if(localStorage.getItem("score")) {
    document.querySelector('#score').value = parseInt(localStorage.getItem("score"))
}

function formSubmit(event) {
    event.preventDefault()
    console.log("FORM SUBMITTED")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    localStorage.setItem("score",scoreInputDOM.value)
}

