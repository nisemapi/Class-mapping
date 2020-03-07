var btn 	= document.getElementById('btn'), 
inp 	= document.getElementById('inp'), 
chats	= document.getElementById('chatWindow'),
bubble 	= document.createElement('div'),
p 		= document.createElement('p');
var docIds=[],unidos={},salonActual = "", userName="" ;
//autenticacion para nombre-salon
auth.onAuthStateChanged( user => {
    if (user== null ){
        window.location.href = "index.html";
     }else{
   let uid = user.uid
   // console.log("uid: ", uid);
   db.collection("users").where("authId", "==", uid)
       .get()
       .then(function(querySnapshot){
           querySnapshot.forEach(function(doc) {
               salonActual = doc.data().idSalon;
               userName =doc.data().nombre;
               document.getElementById("h3-nombre").innerHTML = userName
               // nombre salon 
               db.collection("salones").doc(salonActual).get()
               .then(function(doc){
                   let nombreSalon = document.getElementById("h3-id-salon")
                   nombreSalon.innerHTML = doc.data().nombre
                   
                }); 
            });
        });
    }
});

//scroll fuction 
function scroll(){
    var s=document.getElementById("chatWindow");
    s.scrollTop = s.scrollHeight;
};
/* realTime = () => db.collection("chat").orderBy("id", "asc")
.onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
        bubble.classList.add('bubble');
        bubble.classList.add('right');
        // linea output
        p.textContent = `${doc.data().name}`+"   "+`${doc.data().message}` +"  /  "+ `${doc.data().time}`;
        bubble.appendChild(p);
        chats.insertBefore(bubble, chats.LastChild);
        scroll()
    });
    
}); */ 

realTime = () => db.collection("chat").orderBy("id", "asc")/* .where("idSalon", "==" , salonActual) */
    .onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        if (change.type === "added") {
            var messageName = change.doc.data().name;
            bubble 	= document.createElement('div'),
            p 		= document.createElement('p');
            bubble.classList.add('bubble');
             if (userName == messageName){
               bubble.classList.add('right');
             }else{
                 bubble.classList.add('left');  
                };
                debugger
            // linea output
            p.textContent = change.doc.data().name+" :  "+change.doc.data().message +"  /  "+ change.doc.data().time;
            bubble.appendChild(p);
            chats.insertBefore(bubble, chats.LastChild);
            scroll()
        }
        

    });
    
     
        
});
realTime();

// lector de click y enter
btn.addEventListener('click', postMsg);
inp.addEventListener('keyup', function(e) {
	if (e.keyCode == 13) { postMsg(); }
});
//enviar mensague
function postMsg() {
    var msg     = inp.value;
    if (msg.trim().length <= 0) { return; }
    inp.value = '';
    //objeto
    unidos = {
        name: userName,
        message: msg,
        time: fecha(true),
        id: fecha(false),
        idSalon: salonActual
    }; 
    console.log(unidos)
    writeSomething();
};
//function enviar datos
 writeSomething = () => db.collection("chat").add(unidos)
            .then(function(doc){
                console.log("Document written with ID: ", doc.id);
                console.log(`${doc.data().name} => ${doc.data().message}`);
                console.log(`${doc.data().time}`);
                docIds.push(`${doc.id}`);
            })
            .catch(function(error) {
                    console.error("Error sending message: ", error);
                }); 
//funcion de la fecha hora
function fecha(d){
    var today = new Date(),a=today.getFullYear(),m = today.getMonth(),day = today.getDay(), h = today.getHours(), min = today.getMinutes(),seg = today.getSeconds(), mili = today.getMilliseconds(), entireDate;
    if (d==true){
    if (min<10){
        min = "0"+min;
     };
    entireDate = h+":"+min;
    return (entireDate);}
    else{
    entireDate = Date.now()
    return (entireDate);
    }
    };
//funcion log out
function logout() {
    auth.signOut().then(() => {
        window.location.href = "index.html";
        console.log("El usuario ha cerrado sesión")
    });
}
//funcion volver al salon
    function salonReIn() {
            window.location.href = "Salon.html";
            console.log("El usuario ha vuelto al salon")
    }

