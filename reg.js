

function crearUsuario() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log(cred)
        
        let inombre = document.getElementById("nombre").value
        let itelefono = document.getElementById("telefono").value
        let isilla = document.getElementById("silla").value
        let persona = {
            nombre: inombre,
            silla: isilla,
            telefono: itelefono
            }  
    
        db.collection("users").add(persona).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            window.location.href = "Salon.html"
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            window.location.href = "Salon.html"
        });
    
    })
    .catch(error => {
        alert(error);
    })
}
    