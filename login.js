
const txtemail = document.getElementById("email");
const txtpassword = document.getElementById("password");
const btnsignIn = document.getElementById("sign-in");
const btnsignUp = document.getElementById("sign-up");
const btnsignOut = document.getElementById("sign-out");

btnsignIn.addEventListener('click', login) 
// btn.addEventListener('click', login)
txtpassword.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) { login() }
})

function login(){
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    const x =auth.signInWithEmailAndPassword(email, password);
    x
    .then(() => window.location.href="Salon.html")
    .catch(login=> alert(login.message));
}
// btnsignUp.addEventListener('click', e=> {
//      window.location.href="reg.html"
//  })

function signUp() {
    window.location.href="reg.html";
}

function recuperarcontr() {
    var emailAddress = txtemail.value;
    auth.sendPasswordResetEmail(emailAddress)
    .then(function(){
        alert('Se ha enviado un correo a su cuenta. Por favor sigue los pasos indicados.');
    }, function(error){
        console.log(error)
    })
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