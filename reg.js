

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
function papaya() {

//obtener el nombre de acuerdo al id del objeto YQid8XkEBcHPL24lMYdt.
//pendiente vincular el id del usuario al objeto con otro key
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