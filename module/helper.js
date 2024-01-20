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

// questa funzione si avvia al keyup di input
async function searchUser() {
    const users = await getUsers();
    let filteredUsers = []
    // console.log(input.value)
    filteredUsers = users.filter((user) => {
        return user[filter.toLowerCase()].includes(input.value.toLowerCase())
    })
    console.log(filteredUsers)
    // displayUsers(filteredUsers)
}

// la funzione searchUser deve essere riprodotta al keyup dell'input
// quando si scrive qualcosa nell'input deve essere selezionata una categoria. Se non è selezionata --> alert("Scegli prima una categoria!")
// Quando si sceglie la categoria devono essere visualizzati ancora tutti gli users finche non si scrive qualcosa nell'input
// Quando si scrive nell'input mostare i risultati
// Quando si cancella tutto il testo, mostrare tutti i risultati




// function filterUsers(users, category, input) {
//     let filteredUsers = []
//     filteredUsers = users.filter((user) => {
//         // user[`${category}`] = test ? displayUsers(filteredUsers) : displayUsers(users)
//         return user[category.toLowerCase()].includes(input)
//     })
//     displayUsers(filteredUsers)
// }

// function EventHandler () {
//     input.addEventListener("keyup", filterUsers())
// }

// function filtered(index) {
//     let category
//     switch (index) {
//         case 0: category = "name";
//             break;
//         case 1: category = "username";
//             break;
//         case 2: category = "email";
//             break;
//     }
//     searchInput(category)
// }

// function searchInput(category) {
//     const input = document.getElementById("input")
//     input.addEventListener("keyup", () => {
//         let insertedText = input.innerText.toLowerCase()
//         // displayUsers(_, category, insertedText)
//         console.log("ciao")
//     })
// }