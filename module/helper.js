import { tableHtml } from "./components.js";
import { getUsers } from "./api.js";
export { displayUsers, EventHandler }

const btnDropdownToggle = document.querySelector(".dropdown-toggle")
const btnDropdown = document.querySelectorAll(".btnDropdown")
const input = document.getElementById("input")
let filter

function displayUsers(users) {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = ""
    users.forEach((user, index) => {
        tbody.innerHTML += tableHtml(user, index)
    });
}

function EventHandler() {
    btnDropdown.forEach((btn) => {
        btn.addEventListener("click", selectCategory)
    })

    input.addEventListener("keyup", searchUser)
}

function selectCategory(ev) {
    filter = ev.target.innerText
    btnDropdownToggle.innerText = filter
    input.disabled = false
    input.placeholder = "Insert " + filter.toLowerCase()
}


async function searchUser() {
    const users = await getUsers();
    let filteredUsers = []
    filteredUsers = users.filter((user) => {
        console.log(input.value.toLowerCase())
        return user[filter.toLowerCase()].toLowerCase().includes(input.value.toLowerCase())
    })
    displayUsers(filteredUsers)
}