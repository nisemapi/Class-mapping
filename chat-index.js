var btn 	= document.getElementById('btn'), 
inp 	= document.getElementById('inp'), 
chats	= document.getElementById('chatWindow'),
bubble 	= document.createElement('div'),
p 		= document.createElement('p');
var docIds=[],unidos={},counter = 0;
//scroll fuction 
function scroll(){
   var s=document.getElementById("chatWindow");
   s.scrollTop = s.scrollHeight;
};
realTime = () => db.collection("chat")
.onSnapshot(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    // linea output
    p.textContent = `${doc.data().name}`+"   "+`${doc.data().message}` +"  /  "+ `${doc.data().time}`;
    bubble.appendChild(p);
    chats.insertBefore(bubble, chats.LastChild);
    scroll()
    });
    
});
/* realTime = () => db.collection("chat")
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
    scroll()
    
});
}); */
realTime();
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
        time: fecha(true),
        id: fecha(false)
    }; 
    writeSomething();
    scroll();
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
//funcion de la fecha hora
function fecha(d){
    var today = new Date(),a=today.getFullYear(),m = today.getMonth(), h = today.getHours(), min = today.getMinutes(),seg = today.getSeconds(), entireDate;
    if (d==true){
    if (min<10){
        min = "0"+min;
     };
    entireDate = h+":"+min;
    return (entireDate);}
    else{
    entireDate= a+m+d+h+min+seg;
    return (entireDate);
    }
    };
 // fin funcion hora

/*/super función
auth.onAuthStateChanged(user => { //verifica el cambio en autenticación y obtiene el usuario que inició sesión.
    let salonActual = ""
    let f = 0
    let c = 0
    let uid = user.uid
    let nombre = document.getElementById("h3-nombre");
    // console.log("uid: ", uid);
    db.collection("users").where("authId", "==", uid)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                salonActual = doc.data().idSalon
                // console.log("salonId: " + doc.data().idSalon)
                db.collection("salones").doc(salonActual).get()
                    .then(function (doc) {
                        if (doc.exists) {
                            f = doc.data().filas
                            c = doc.data().columnas
                            crearSalon(f,c)
                            let nombreSalon = document.getElementById("h3-id-salon")
                            nombreSalon.innerHTML = salonActual
                            nombre.innerHTML = doc.data().nombre;
                            
                        }
                    })
            })
            querySnapshot.forEach(function (doc) {
                nombre.innerHTML = doc.data().nombre
            });
        })
    });*/