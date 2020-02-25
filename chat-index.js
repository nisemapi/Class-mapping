firebase.initializeApp({
    apiKey: " AIzaSyBctU_BQdb1118cnTLJsTj7fRQc4DIoKcY",
    authDomain: 'classmappingb.firebaseapp.com',
    projectId: 'classmappingb'
});
var db = firebase.firestore(),docIds=[];

var btn 	= document.getElementById('btn'), 
    inp 	= document.getElementById('inp'), 
    chats	= document.getElementById('chatWindow')
btn.addEventListener('click', postMsg);

inp.addEventListener('keyup', function(e) {
	if (e.keyCode == 13) { postMsg(); }
});

function postMsg() {
    var msg 	= inp.value,
    bubble 	= document.createElement('div'),
    p 		= document.createElement('p');
    
    console.log ("your message had been sent => "+ msg);
    
    if (msg.trim().length <= 0) { return; }
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    p.textContent = msg+"  /  "+fecha();
    bubble.appendChild(p);
    inp.value = '';
    chats.insertBefore(bubble, chats.LastChild);
};
function fecha(){
    var today = new Date(), h = today.getHours(), m = today.getMinutes(), entireDate;
    if (m<10){
        m = "0"+m;
    };
    entireDate = h+":"+m;
    return (entireDate);
};