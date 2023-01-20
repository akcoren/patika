// initialize local storage handle empty localstorage
if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]))
}

let submitButton = document.querySelector("#submitToDo")
submitButton.addEventListener("click", submitToDo)

let TODO_INFO = document.querySelector("#toDoText")
let toDoListDOM = document.querySelector("#toDoList")

// toast notifier
const toastNotification = document.getElementById('liveToast')

// populate TODO items at the beginning
populateUI()


function populateUI() {

    for (let index = 0; index < JSON.parse(localStorage.getItem("todos")).length; index++) {
        const element = JSON.parse(localStorage.getItem("todos"))[index];
        console.log(element)

        createToDoListItem(element.item, element.status)

    }

    console.log("UI populated!")
}

function addToLocalStorage(toBeAdded, status) {
    // local storage should be string
    // localStorage.setItem(`${toBeAdded}`,`${status}`)

    // convert to array
    todos = JSON.parse(localStorage.getItem('todos') || []);

    let toBeAddedToDo = {
        item: toBeAdded,
        status: status,
    };

    todos.push(toBeAddedToDo);
    
    // stringify and set
    localStorage.setItem('todos', JSON.stringify(todos));

}

function deleteFromLocalStorage(toBeDeleted) {
    let todos = JSON.parse(localStorage.getItem("todos"))
    let toBeRemovedIndex = todos.findIndex(e => e.item === toBeDeleted)
    todos.splice(toBeRemovedIndex, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function submitToDo() {

    if (JSON.parse(localStorage.getItem("todos") || []).find(e => e.item === TODO_INFO.value)) {
        document.querySelector("#toastText").innerHTML = "Cannot add same item twice!"
        const toast = new bootstrap.Toast(toastNotification)
        toast.show()
        TODO_INFO.value = ""
        return
    }

    if (TODO_INFO.value === "" || TODO_INFO.value.split(' ').join('') === "") {
        document.querySelector("#toastText").innerHTML = "Enter a valid todo item!"
        const toast = new bootstrap.Toast(toastNotification)
        toast.show()
        TODO_INFO.value = ""
        return
    }

    let toBeAdded = TODO_INFO.value.trim()
    createToDoListItem(toBeAdded, "active")
    addToLocalStorage(toBeAdded, "active")

    document.querySelector("#toastText").innerHTML = "Item added to your list!"
    const toast = new bootstrap.Toast(toastNotification)
    toast.show()


    TODO_INFO.value = ""
    console.log("Item added!")

}

function createToDoListItem(toBeAdded, status) {
    // takes input as string

    let liDOM = document.createElement("li")

    let checkBoxDOM = document.createElement("input")
    checkBoxDOM.setAttribute("type", "checkbox")
    checkBoxDOM.addEventListener('change', changeStatus)

    let labelDOM = document.createElement("label")
    labelDOM.addEventListener("click", changeStatus)
    labelDOM.innerHTML = toBeAdded

    if (status === "inactive") {
        checkBoxDOM.checked = true
        liDOM.classList.add("inactive")
    }

    let removeButtonDOM = document.createElement("button")
    removeButtonDOM.addEventListener("click", deleteToDoListItem)
    removeButtonDOM.classList.add("btnClose")
    removeButtonDOM.innerHTML = "X"


    labelDOM.prepend(checkBoxDOM)
    liDOM.appendChild(labelDOM)
    liDOM.appendChild(removeButtonDOM)

    toDoListDOM.appendChild(liDOM)
}

function deleteToDoListItem() {

    console.log(this)
    deleteFromLocalStorage(this.parentElement.children[0].innerText)
    this.parentElement.remove()

    document.querySelector("#toastText").innerHTML = "Item deleted from your list!"
    const toast = new bootstrap.Toast(toastNotification)
    toast.show()

    console.log("Item removed!")

}


function changeStatus(e) {
    e.preventDefault();

    // if does not overlined, overline
    // if does not checked, check
    console.log(this.parentElement.children[0].innerText)

    let status;
    if (this.parentElement.children[0].children[0].checked) {
        this.parentElement.children[0].children[0].checked = false
        status = "active"
        this.parentElement.classList.remove("inactive")

    } else {
        this.parentElement.children[0].children[0].checked = true
        status = "inactive"
        this.parentElement.classList.add("inactive")
    }

    let toBeChanged = this.parentElement.children[0].innerText
    let todos = JSON.parse(localStorage.getItem("todos"))
    let toBeChangedIndex = todos.findIndex(e => e.item === toBeChanged)
    todos[toBeChangedIndex] = {
        item: toBeChanged,
        status: status,
    }

    localStorage.setItem("todos", JSON.stringify(todos))

    console.log("Item status has changed!")
}

