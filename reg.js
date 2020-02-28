let formularioCrearSalon = document.getElementById("crear-salon")
let si = document.getElementById("si")
let ingresarSalon = document.getElementById("ingresar-salon")

function mostrar() {
    if(formularioCrearSalon.style.display == "none") {
        formularioCrearSalon.style.display = "block";
        ingresarSalon.style.display = "none";
    } else {
        formularioCrearSalon.style.display = "none";
        ingresarSalon.style.display = "block";

    }
}

function crearUsuario() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    
    if (password == password2) {
    
        auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            // console.log("This is the uid: ", cred.user.uid)
            let uid = cred.user.uid
            
            let inombre = document.getElementById("nombre").value
            let itelefono = document.getElementById("telefono").value
            let persona = {
                nombre: inombre,
                telefono: itelefono,
                authId: uid
                }  
        
            db.collection("users").add(persona).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                console.log(persona);
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
    } else { alert("Error: passwords don't match.")}
}
function papaya() {

//obtener el nombre de acuerdo al id del objeto YQid8XkEBcHPL24lMYdt.
let x = db.collection("users").doc("YQid8XkEBcHPL24lMYdt");

x.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data().nombre);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}
// papaya = () => db.collection("users").doc("YQid8XkEBcHPL24lMYdt").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().nombre}`);
//     })
// }).catch(error => console.log(error))