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
    .then(window.location.href="reg.html")
    .catch(e=> console.log(e.message));
})

btnsignUp.addEventListener('click', e=> {
    //pendiente verificar email
    const email = txtemail.value;
    const password = txtpassword.value;
    const auth = firebase.auth();
    const x =auth.createUserWithEmailAndPassword(email, password);
    x
    .then(user => console.log(user))
    .catch(e=> console.log(e.message));
})







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