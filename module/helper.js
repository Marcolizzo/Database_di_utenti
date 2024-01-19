import { tableHtml } from "./components.js";
export { displayUsers }

function displayUsers(users) {
    users.forEach((user) => {
        let tbody = document.querySelector("tbody");
        tbody.innerHTML += tableHtml(user)
    });
    selectCategory();
}

function selectCategory() {
    const btnDropdown = document.querySelectorAll(".btnDropdown")
    btnDropdown.forEach((btn, index) => {
        btn.addEventListener("click", (ev) => {
            const category = ev.target.innerText
            const btnDropdownToggle = document.querySelector(".dropdown-toggle")
            btnDropdownToggle.innerText = category
        })
    })
}

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