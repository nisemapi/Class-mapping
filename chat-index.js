firebase.initializeApp({
     apiKey: "AIzaSyBctU_BQdb1118cnTLJsTj7fRQc4DIoKcY",
  authDomain: "classmappingb.firebaseapp.com",
  databaseURL: "https://classmappingb.firebaseio.com",
  projectId: "classmappingb",
  storageBucket: "classmappingb.appspot.com",
  messagingSenderId: "992942752060",
  appId: "1:992942752060:web:c901082e64f78189019e39",
  measurementId: "G-RTRGJNB8P6"
});
var db = firebase.firestore(),docIds=[],unidos={},doc;

var btn 	= document.getElementById('btn'), 
    inp 	= document.getElementById('inp'), 
    chats	= document.getElementById('chatWindow'),
    bubble 	= document.createElement('div'),
    p 		= document.createElement('p');
// lector de click y enter
btn.addEventListener('click', postMsg);
inp.addEventListener('keyup', function(e) {
	if (e.keyCode == 13) { postMsg(); }
});
//enviar mensague
function postMsg() {
    var msg     = inp.value,
        bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
    
    // console.log ("your message had been sent => "+ msg);

    if (msg.trim().length <= 0) { return; }
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    // linea output
    p.textContent = /* aqui falta el nombre de la people*/msg+"  /  "+fecha();
    bubble.appendChild(p);
    inp.value = '';
    chats.insertBefore(bubble, chats.LastChild);
    unidos = {
        name: "pepito perez :)",
        message: msg,
        time: fecha()
    }; 
     writeSomething();
    var s=document.getElementById("chatWindow");
//    s.scrollTo(0,s.offsetHeight);
      s.scrollTop = s.scrollHeight;
    
};
//function enviar datos

 writeSomething = () => db.collection("chat").add(unidos)
            .then(function(docRef){
                console.log("Document written with ID: ", docRef.id);
                console.log(`${doc.data().name} => ${doc.data().message}`);
                console.log(`${doc.data().time}`);
                docIds.push(`${doc.id}`);
            })
            .catch(function(error) {
                    console.error("Error sending message: ", error);
                }); 
//funcion de la hora
function fecha(){
    var today = new Date(), h = today.getHours(), m = today.getMinutes(), entireDate;
    if (m<10){
        m = "0"+m;
     };
entireDate = h+":"+m;
return (entireDate);
};
    readAll = () => db.collection("users").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>{
            var element = e.val();
            var nombre = element.name;
            var message = element.message;
            console.log(`${doc.id}`);
        });
    }) 