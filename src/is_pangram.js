const isPangram = function isPangram(text) {
    if (text.length < 26) {
        return false;
    }

    let allLetters = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase();
    for (let i = 0; i <= text.length; i += 1){
        if (allLetters.includes(text.charAt(i))) {
            allLetters = allLetters.split(text.charAt(i)).join('');
        } 
    }

    if (allLetters.length == 0) {
        return true;
    } else {
        return false;
    }
};

module.exports = isPangram;