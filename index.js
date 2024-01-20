import { getUsers } from "./module/api.js"
import { displayUsers, EventHandler } from "./module/helper.js"

let users = []

window.addEventListener("DOMContentLoaded", init)
async function init() {
    users = await getUsers()
    displayUsers(users);
    EventHandler();
};

