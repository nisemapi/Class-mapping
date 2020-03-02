var btn 	= document.getElementById('btn'), 
inp 	= document.getElementById('inp'), 
chats	= document.getElementById('chatWindow'),
bubble 	= document.createElement('div'),
p 		= document.createElement('p');
var docIds=[],unidos={},salonActual = "",nombrecito="";
//autenticacion para nombre-salon
auth.onAuthStateChanged( user => {
   let uid = user.uid
   // console.log("uid: ", uid);
   db.collection("users").where("authId", "==", uid)
       .get()
       .then(function(querySnapshot){
           querySnapshot.forEach(function(doc) {
               salonActual = doc.data().idSalon;
               nombrecito =doc.data().nombre;
               document.getElementById("h3-nombre").innerHTML = nombrecito 
               db.collection("salones").doc(salonActual).get()
               .then(function(doc){
                   let nombreSalon = document.getElementById("h3-id-salon")
                   nombreSalon.innerHTML = doc.data().nombre
           
           });
           });
       });
       
       });
   
//scroll fuction 
function scroll(){
   var s=document.getElementById("chatWindow");
   s.scrollTop = s.scrollHeight;
};
realTime = () => db.collection("chat").orderBy("id", "asc")
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
        name: nombrecito,
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
    var today = new Date(),a=today.getFullYear(),m = today.getMonth(), h = today.getHours(), min = today.getMinutes(),seg = today.getSeconds(), mili = today.getMilliseconds(), entireDate;
    if (d==true){
    if (min<10){
        min = "0"+min;
     };
    entireDate = h+":"+min;
    return (entireDate);}
    else{
    entireDate= (a*10000)+(m*1000)+(d*100)+(h*10)+min+(seg*0,1)+(mili*0,01);
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
