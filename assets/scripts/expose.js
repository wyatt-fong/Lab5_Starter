// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');

    hornSelect.addEventListener('change', function() {
        const image = document.querySelector('img');
        const audio = document.querySelector('audio');

        image.src = `assets/images/${hornSelect.value}.svg`;
        audio.src = `assets/audio/${hornSelect.value}.mp3`;
    });

    const volumeControl = document.getElementById('volume');

    volumeControl.addEventListener('input', function() {
        let volume = volumeControl.value;
        const volImage = document.querySelector('#volume-controls img');
        if (volume == 0) {
            volImage.src = 'assets/icons/volume-level-0.svg';
        } else if (volume < 33) {
            volImage.src = 'assets/icons/volume-level-1.svg';
        } else if (volume < 67) {
            volImage.src = 'assets/icons/volume-level-2.svg';
        } else {
            volImage.src = 'assets/icons/volume-level-3.svg';
        }
    });

    const playButton = document.querySelector('button');
    
    playButton.addEventListener('click', function() {
        const hornType = hornSelect.value;
        const audio = document.querySelector('audio');

        if (hornType === 'party-horn' && volumeControl.value == 0) {
            alert("Please increase the volume to hear the sound.");
        } else {
            audio.volume = volumeControl.value / 100;
            audio.play();
        }
    });
}