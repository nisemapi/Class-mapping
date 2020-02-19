let passes = {"caro": "1234", "niko": "56"}

function check() {
    let x = document.getElementById("user").value
    let y = document.getElementById("pass").value
    
    if (y == passes[x]) {
        window.location.href = "class.html";

    } else {
        alert("mal")
    }
}

//funcion para añadir nuevos usuarios al objeto passes

function create() {
console.log(document.getElementById("name").value)
let newUser = document.getElementById("name").value
let newPass = document.getElementById("password").value
passes[newUser] = newPass
console.log(passes)
}