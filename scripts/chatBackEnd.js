firebase.initializeApp({
    apiKey: " AIzaSyBctU_BQdb1118cnTLJsTj7fRQc4DIoKcY",
    authDomain: 'classmappingb.firebaseapp.com',
    projectId: 'classmappingb'
});
var db = firebase.firestore();
var entire = {}, docIds=[],history;
function sent(n){
   var message = document.getElementById("message").value ;
   // inicio fecha
    var today = new Date(), h = today.getHours(), m = today.getMinutes();
    if (m<10){
        m = "0"+m;
    };
    //fin fecha
     if (message != ""){
     entire= {
         name: "pepito perez :)",
         message: message,
         time: h+":"+m
     }
    //  console.log (entire)
    //  writeSomething()
     Show()
     }
     message = "";
     document.getElementById("message").value = "";
     
    };
function Show(){;
                history += "<div>";
                history += "<div>" + entire.name + "     "+ entire.message + "</div>";
                history += + "<div>"+ entire.time + "</div>";
                history +=  "</div>";
                document.getElementById("messagesContent").innerHTML = history;
            }
    /* writeSomething = () => db.collection("chat").add(entire)
            .then(function(docRef){
                console.log("Document written with ID: ", docRef.id);
                console.log(`${doc.data().name} => ${doc.data().message}`);
                console.log(`${doc.data().time}`);
                docIds.push(`${doc.id}`);
            })
            .catch(function(error) {
                console.error("Error sending message: ", error);
            }); */
       /*  readAll = () => db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.data().name} => ${doc.data().message}`);
                console.log(`${doc.data().time}`);
                docIds.push(`${doc.id}`);
                });
            }); */
            