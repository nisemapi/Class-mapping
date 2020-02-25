
let nombre = document.getElementById("nombre")
let telefono = document.getElementById("telefono")
let silla = document.getElementById("silla")

function crearUsuario() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred)
        window.location.href = "Salon.html"   
    })
    // .catch(function(error)){
    //     alert(error)
    // }

    // nombre = nombre.value
    // console.log(nombre)
    // db.collection("users").add({
    //     nombre: name.value,
    //     silla: chair.value,
    //     telefono: phone.value
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
}