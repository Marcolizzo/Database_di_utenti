export {getUsers}

const getUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await res.json()
        return users
    } catch (err) {
        console.log("Error:" + err)
        alert(err)
    }
};