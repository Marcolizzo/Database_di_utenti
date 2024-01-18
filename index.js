import { getUsers } from "./fetch.js";
import { displayUsers } from "./script.js"

let users = []

window.addEventListener("DOMContentLoaded", init)
async function init() {
    users = await getUsers()
    // console.log(users)
    displayUsers(users)
};