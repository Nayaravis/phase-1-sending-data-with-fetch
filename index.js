function submitData(name, email) {
    const data = {
        name: name,
        email: email
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch("http://localhost:3000/users", requestOptions)
        .then(res => res.json())
        .then(data => {
            const newObject = document.createElement("div")
            newObject.textContent = data.id
            document.querySelector("body").appendChild(newObject)
        })
        .catch(error => {
            const newObject = document.createElement("div")
            newObject.textContent = error.message
            document.querySelector("body").appendChild(newObject)
        })
}

document.addEventListener("DOMContentLoaded", submitData("Navis", "navisayara@gmail.com"))