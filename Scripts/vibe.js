var firstword = ["cool", "mad", "young", "wise", "old", "good", "bad", "happy", "sad", "weird", "creepy", "precious", "strange", "magical",
"quiet", "cold", "misunderstood", "pitiful", "crazy", "number 1", "dying", "party", "tired", "positive", "negative",
"wacky", "kooky", "nervous", "emotional", "rich", "gentle", "dead", "gloomy", "dark", "alien", "bitter", "salty",
"funny", "free", "best", "sneaky", "sweet", "gay", "green", "blue", "red", "anxious", "sunny", "cloudy", "white",
"trapped", "naive", "innocent", "dirty", "squeaky", "jiggly", "unpredictable", "curious", "self-proclaimed",
"forgetful", "soft", "scary", "explosive", "busy", "chaotic", "neutral", "awful", "messy", "extreme", "fragile",
"confused", "dizzy", "crying", "screaming", "glitchy", "Christian", "fresh", "busted", "morning", "evening", "afternoon",
"tight", "fierce", "deep", "hateful", "burning", "flawless", "quirky", "high", "angelic", "floating", "big", "spoiled", 
"proud", "hungry", "silent", "drowning"
];
var secword = ["fighter", "wizard", "hipster", "meme", "lunatic", "criminal", "fox", "gamer", "freak", "chihuahua",
"chicken", "hermit", "flower", "artist", "chocolate", "candy", "Karen", "rabbit", "rain", "gorilla", "space", "adventurer",
"clown", "worm", "joke", "thinker", "fire", "thunder", "horse", "parrot", "turtle", "book", "salad", "trash",
"mind", "beauty", "klutz", "model", "apple", "river", "mountain", "ocean", "ant", "pig", "wolf", "sweetheart",
"sugar", "introvert", "extrovert", "hooker", "bacon", "coffee", "cake", "diva", "cat", "cake", "doctor", "cheater", "city",
"queen", "shadow", "griefer", "dreamer", "bystander", "firetruck", "God", "rainbow", "scent", "angel", "arsonist", "sun",
"cloud", "rain", "skeleton", "zombie", "coffee", "robot", "friend", "voice", "siren", "loser"
];
var vowels = ["a", "e", "i", "o", "u"];
var final;
var verb;

function CheckVerb() {
    for (var i = 0; i < vowels.length; i++)
    {
        if (final.charAt(0) === (vowels[i])) {
        verb = "an";
        return;
        }
        else {
        verb = "a";
        }
    }
    if (final.substring(0, 4) === "best" || final.substring(0, 8) === "number 1") {
        verb = "the";
    }
}
function Generate () {
    final = firstword[Math.floor(Math.random() * firstword.length)] + " " + secword[Math.floor(Math.random() * secword.length)];
CheckVerb();
    document.getElementById("vibe").innerHTML = "You are " + verb + " " + final + ".";
}

window.onload = Generate;