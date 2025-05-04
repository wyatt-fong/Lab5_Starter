// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const textArea = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const  faceImage = document.querySelector('img');
    const synth = window.speechSynthesis;

    function populateVoices() {
        const voices = synth.getVoices();
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = populateVoices;
    } else {
        populateVoices();
    }

    const playSoundButton = document.querySelector('button');

    playSoundButton.addEventListener('click', function() {
        // Trimmed leading and trailing white space to ensure text is present
        textArea.value = textArea.value.trim();
        // Added logic to force user to enter text 
        if (textArea.value === "") {
            alert("Please enter a value to speak");
            return;
        }
        const utterance = new SpeechSynthesisUtterance(textArea.value);
        const selectedOption = voiceSelect.selectedOptions[0].value;
        const voices = synth.getVoices();
        const selectedVoice = voices.find(voice => voice.name === selectedOption);
        
        // Added logic to force the user to pick a voice
        if (selectedVoice === undefined) {
            alert("Please select a voice");
            return;
        } else {
            utterance.voice = selectedVoice;
        }
        
        faceImage.src = 'assets/images/smiling-open.png';
        utterance.addEventListener('end', function() {
            faceImage.src = 'assets/images/smiling.png';
        });

        synth.speak(utterance);

    });
}