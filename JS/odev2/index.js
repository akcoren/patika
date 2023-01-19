// initialize local storage
if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos",JSON.stringify([]))
}

let submitButton = document.querySelector("#submitToDo")
submitButton.addEventListener("click", submitToDo)
let TODO_INFO = document.querySelector("#toDoText")
// let todos = []
// todos.push(JSON.parse(localStorage.getItem("todos")))
// localStorage.setItem("todos", JSON.stringify(todos))
// let tobeadded = "asfasdfa"
let toDoListDOM = document.querySelector("#toDoList")


// console.log(Object.keys(localStorage))
// console.log(Object.entries(localStorage))
console.log(JSON.parse(localStorage.getItem("todos")))

populateUI()


// Parse the serialized data back into an aray of objects
// Push the new data (whether it be an object or anything else) onto the array
// Alert the array value
// alert(todos);  // Should be something like [Object array]
// Re-serialize the array back into a string and store it in localStorage
// addToLocalStorage("zurna")

function populateUI() {
    for (let index = 0; index < JSON.parse(localStorage.getItem("todos")).length; index++) {
        const element = JSON.parse(localStorage.getItem("todos"))[index];
        console.log(element)

        createToDoListItem(element.item, element.status)
        // let liDOM = document.createElement("li")
        // let spanDOM = document.createElement("span")
        // let checkBoxDOM = document.createElement("input")
        // checkBoxDOM.setAttribute("type", "checkbox")
        
        // spanDOM.innerHTML = `${element.item}`
        
        
        // let removeButtonDOM = document.createElement("button")
        // removeButtonDOM.addEventListener("click", deleteToDoListItem)
        // removeButtonDOM.classList.add("btnClose")
        
        // removeButtonDOM.innerHTML = "X"
        
        // liDOM.appendChild(checkBoxDOM)
        // liDOM.appendChild(spanDOM)
        // liDOM.appendChild(removeButtonDOM)
        
        // toDoListDOM.appendChild(liDOM)
        // console.log(toDoListDOM.parentElement.id)
    }
        
    console.log("UI populated!")
}

function addToLocalStorage(toBeAdded,status) {
    // local storage should be string
    // localStorage.setItem(`${toBeAdded}`,`${status}`)

    todos = JSON.parse(localStorage.getItem('todos') || []);
    // console.log(todos)
    let toBeAddedToDo = {
        item: toBeAdded,
        status: status,
    };
    
    todos.push(toBeAddedToDo);
    // input should be string
    localStorage.setItem('todos', JSON.stringify(todos));

}

function deleteFromLocalStorage(toBeDeleted) {
    let todos = JSON.parse(localStorage.getItem("todos"))
    let toBeRemovedIndex = todos.findIndex(e=>e.item===toBeDeleted)
    todos.splice(toBeRemovedIndex,1)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function submitToDo() {
    // console.log("eventSubmitted")
    // console.log(TODO_INFO.value)
    // TODO_INFO.value = ''

    if(JSON.parse(localStorage.getItem("todos") || []).find(e=>e.item===TODO_INFO.value)) {
        return
    }

    if(TODO_INFO.value === "") {
        return
    }

    let toBeAdded = TODO_INFO.value
    createToDoListItem(toBeAdded, "active")
    addToLocalStorage(toBeAdded,"active")

}

// let i = 1
function createToDoListItem(toBeAdded,status) {
//takes input as string

    let liDOM = document.createElement("li")
    
    let checkBoxDOM = document.createElement("input")
    checkBoxDOM.setAttribute("type", "checkbox")
    checkBoxDOM.addEventListener('change',changeStatus)
    
    let labelDOM = document.createElement("label")
    labelDOM.addEventListener("click",changeStatus)
    labelDOM.innerHTML = toBeAdded

    if(status === "inactive") {
        checkBoxDOM.checked = true
        labelDOM.classList.add("inactive")
    }
    
    let removeButtonDOM = document.createElement("button")
    removeButtonDOM.addEventListener("click", deleteToDoListItem)
    removeButtonDOM.classList.add("btnClose")
    removeButtonDOM.innerHTML = "X"
    
    
    labelDOM.prepend(checkBoxDOM)
    liDOM.appendChild(labelDOM)
    liDOM.appendChild(removeButtonDOM)

    toDoListDOM.appendChild(liDOM)
    // console.log(toDoListDOM.parentElement.id)

    // addToLocalStorage(TODO_INFO.value,"active")


}

function deleteToDoListItem() {

    console.log(this)
    // localStorage.removeItem(`${this.parentElement.children[1].innerHTML}`)
    deleteFromLocalStorage(this.parentElement.children[0].innerText)
    // console.log(this.parentElement.children[1].innerHTML)
    this.parentElement.remove()
}



function changeStatus(e) {
    // e.stopPropagation();
    e.preventDefault();

    // if does not overlined, overline

    // if does not checked, check
    console.log(this.parentElement.children[0].innerText)

    let status;
    if(this.parentElement.children[0].children[0].checked) {
        this.parentElement.children[0].children[0].checked = false
        status = "active"
        this.parentElement.children[0].classList.remove("inactive")

    } else {
        this.parentElement.children[0].children[0].checked = true
        status = "inactive"
        this.parentElement.children[0].classList.add("inactive")
    }
    
    let toBeChanged = this.parentElement.children[0].innerText
    let todos = JSON.parse(localStorage.getItem("todos"))
    let toBeChangedIndex = todos.findIndex(e=>e.item===toBeChanged)
    todos[toBeChangedIndex] = {
        item: toBeChanged,
        status: status,
    }

    // // todos.splice(toBeChangedIndex,1)
    // // change the status of the 
    localStorage.setItem("todos",JSON.stringify(todos))

    console.log("STATUS CHANGED")
}