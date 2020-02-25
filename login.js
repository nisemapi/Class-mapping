var db = firebase.firestore();
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBctU_BQdb1118cnTLJsTj7fRQc4DIoKcY',
    authDomain: 'classmappingb.firebaseapp.com',
    projectId: 'classmappingb',
    databaseURL: "https://classmappingb.firebaseio.com/"
});

const txtemail = document.getElementById("email");
const txtpassword = document.getElementById("password");
const btnsignIn = document.getElementById("sign-in");
const btnsignUp = document.getElementById("sign-up");
const btnsignOut = document.getElementById("sign-out");

btnsignIn.addEventListener('click', e=>{
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    const x =auth.signInWithEmailAndPassword(email, password);
    x
    .then(() => window.location.href="Salon.html")
    .catch(e=> alert(e.message));
})

// btnsignUp.addEventListener('click', e=> {
//     window.location.href="reg.html"
// })


function create() {
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const silla = document.getElementById("silla");
    //pendiente verificar email
    const email = txtemail.value;
    const password = txtpassword.value;
    //pendiente verificacion contraseña
    const name = nombre.value;
    const phone = telefono.value;
    const chair = silla.value;
    const auth = firebase.auth();
    const x =auth.createUserWithEmailAndPassword(email, password);
    x
    .then(user => console.log(user))
    .catch(e=> alert(e.message));
    console.log(email)
    console.log(name+phone+ "silla " + chair)
    
}
function nuevoUsuario() {
    const name = document.getElementById("nombre");
    const phone = document.getElementById("telefono");
    const chair = document.getElementById("silla");
    db.collection("users").add({
        nombre: name.value,
        silla: chair.value,
        telefono: phone.value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}



// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         {
//             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             requireDisplayName: false
//           }
//     ]
//     // Other config options...
 // });