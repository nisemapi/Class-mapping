var btn 	= document.getElementById('btn'), 
    inp 	= document.getElementById('inp'), 
    chats	= document.getElementById('chatWindow')
;
btn.addEventListener('click', postMsg);

inp.addEventListener('keyup', function(e) {
	if (e.keyCode == 13) { postMsg(); }
});

function postMsg() {
	var msg 	= inp.value,
        bubble 	= document.createElement('div'),
        p 		= document.createElement('p');
    if (msg.trim().length <= 0) { return; }
    bubble.classList.add('bubble');
    bubble.classList.add('right');
    p.textContent = msg;
    bubble.appendChild(p);
    inp.value = '';
    chats.insertBefore(bubble, chats.firstChild);
}