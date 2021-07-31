//doc
const button = document.querySelector('.buttonMessage');
const textInput = document.querySelector('.writeText');
const messageBox = document.querySelector('.messageBox');

//var
button.addEventListener('click',sendMessage);

//func

function sendEnter(e){
    if(e.keyCode == '13'){
        sendMessage();
    }
}

function sendMessage(){
    let message = textInput.value.replace(/\s/g, '');
    if(!message) return;
    const div = document.createElement('div');
    div.className = 'sendedMessage';
    div.innerText = `${message}`;
    div.style.wordWrap = 'break-word';
    div.style.overflow = 'auto';

    messageBox.appendChild(div);


    textInput.value = "";
}
