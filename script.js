// function selectCategory() {
//     const btnDropdown = document.querySelectorAll(".btnDropdown")
//     btnDropdown.forEach((btn, index) => {
//         btn.addEventListener("click", (ev) => {
//             const category = ev.target.innerText
//             const btnDropdownToggle = document.querySelector(".dropdown-toggle")
//             btnDropdownToggle.innerText = category
//             // filteredd(index)
//         })
//     })
// }

// function filteredd(index) {
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

function displayUsers(users, category, insertedText) {
    let filteredUsers = []
    let row = 1

    users.forEach((user) => {
        let tbody = document.querySelector("tbody")
        tbody.innerHTML += `
        <tr>
            <th scope="row">${row++}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
          </tr>`;
    });

}



export { selectCategory, displayUsers }