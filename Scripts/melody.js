var notes = [
    "Audio/notes/C.wav", "Audio/notes/C#.wav", "Audio/notes/D.wav"
];

function Generate () {
    for (i = 0; i < notes.length; i++) {
        var audio = new Audio(notes[i]);
        audio.play();
    }
}

window.onload = Generate;