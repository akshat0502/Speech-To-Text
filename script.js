const pulseButton = document.getElementById('btn-pulse');
const textOutput = document.getElementById('text-output');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textOutput.textContent = `You said: "${transcript}"`;
}

pulseButton.addEventListener('click', () => {
    pulseButton.classList.toggle('animate');
    if(pulseButton.classList.contains('animate')){
        try{
            recognition.start();
            textOutput.textContent = "Listening...";
        }
        catch(error){
            textOutput.textContent = "Error starting voice recognition";
        }
    }
    else{
        recognition.stop();
        textOutput.textContent = "Stopped listening";
    }
});