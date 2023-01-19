
const userListDOM = document.querySelector("#userList")

let users = ["lorem","ipsum","dolor","sit","amet","consectetur"]

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    liDOM.classList.add("list-group-item", "bg-primary")
    userListDOM.appendChild(liDOM) 


    const element = users[index];
    console.log(element)

}

