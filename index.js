function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}


//function will perform certain tasks depending on level of voice used
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase(string)) {
       return "I can't hear you!";
    } else if (string === string.toUpperCase(string)) {
       return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}