var docIds=[],unidos={},counter;
realTime = () => db.collection("chat")
.get()
.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.data().name} => ${doc.data().message}`);
        docIds.push(`${doc.id}`);

        // experimento
    var bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    // linea output
    p.textContent = `${doc.data().name}`+"   "+`${doc.data().message}` +"  /  "+ `${doc.data().time}`;
    bubble.appendChild(p);
    chats.insertBefore(bubble, chats.LastChild);
    
});
});
//scroll fuction 
function scroll(){
   var s=document.getElementById("chatWindow");
   s.scrollTop = s.scrollHeight;
};
realTime();
scroll();
/* //autenticacion para nombre
auth.onAuthStateChanged( user => {
    let uid = user.uid
    let nombre = document.getElementById("h3-nombre");
    // console.log("uid: ", uid);
    db.collection("users").where("authId", "==", uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                nombre.innerHTML = doc.data().nombre
            });
        });
}); */
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
    var msg     = inp.value;
        /* bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
    if (msg.trim().length <= 0) { return; }
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    // linea output
    p.textContent = "nikolas: " +msg+"  /  "+fecha();
    bubble.appendChild(p);
    inp.value = '';
    chats.insertBefore(bubble, chats.LastChild); */
    if (msg.trim().length <= 0) { return; }
    inp.value = '';
    unidos = {
        name: "nikolas",
        message: msg,
        time: fecha(),
        id:  counter++
    }; 
    writeSomething();
     realTime();
     scroll();
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
// fin funcion hora
    
