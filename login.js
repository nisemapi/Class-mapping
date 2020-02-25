
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
//      window.location.href="reg.html"
//  })

function signUp() {
    window.location.href="reg.html";
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