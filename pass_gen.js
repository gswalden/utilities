function getNumbers() {
    var i = 0;
    var nums = _.times(10, function() { return i++ });
    console.log(nums);
}
getNumbers();

function getLetters(caps) {
    var charCodeRange = {
	    start: 65,
	    end: 90
    }
    var letters = [];
    for (var cc = charCodeRange.start; cc <= charCodeRange.end; cc++) {
	    letters.push(String.fromCharCode(cc));
        if (caps) letters.push(String.fromCharCode(cc).toLowerCase());
    }
    console.log(letters);
}
getLetters(false);
getLetters(true);

function getSpecialChars() {
    var specialchars = '`~!@#$%^&*()[]{};\':",.<>/?|\-_=+';
    var chars = [];
    for (var i = specialchars.length - 1; i >= 0; i--) {
        chars.push(specialchars.charAt(i));
    };
    console.log(chars);
}
getSpecialChars();
