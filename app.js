//doc
const button = document.querySelector('.buttonMessage');
const textInput = document.querySelector('.writeText');
const messageBox = document.querySelector('.messageBox');

//var
button.addEventListener('click',sendMessage);

//func

function sendMessage(){
    let message = textInput.value;
    if(!message) return;
    if(message.length === 170){

    }
    const div = document.createElement('div');
    div.className = 'sendedMessage';
    div.innerText = `${message}`;
    div.style.wordWrap = 'break-word';
    div.style.overflow = 'auto';

    messageBox.appendChild(div);


    textInput.value = "";
}