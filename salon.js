function logout(){
    auth.signOut().then(() => {
        window.location.href = "index.html";
        console.log("El usuario ha cerrado sesión")
    });
}

console.log(auth.gh)

auth.onAuthStateChanged( user => {
    let uid = user.uid
    let nombre = document.getElementById("h3-nombre");
    // console.log("uid: ", uid);
    db.collection("users").where("authId", "==", uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data().nombre);
                nombre.innerHTML = doc.data().nombre
            });
        });
});
/* NO BORRAR
//para buscar en la coleccion los documentos que cumplan una condición:
db.collection("users").where("silla", "==", "9")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });



//obtener el nombre de acuerdo al id del objeto YQid8XkEBcHPL24lMYdt que representa a Caro.
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
*/