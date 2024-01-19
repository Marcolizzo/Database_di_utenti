import { getUsers } from "./module/api.js"
import { displayUsers } from "./module/helper.js"

let users = []

window.addEventListener("DOMContentLoaded", init)
async function init() {
    users = await getUsers()
    // console.log(users)
    displayUsers(users)
};