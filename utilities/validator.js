var validator = {};

// Checks if it is a valid email address
// a@a.com

validator.isEmailAddress = function(input) {
  if(!input) {
    throw new Error("No input included.");
  }
  var length = input.length;
  var check1 = input.indexOf("@");
  var checkPoint = input.slice(check1);
  var check2 = checkPoint.indexOf(".");
  var checkPoint2 = checkPoint.slice(check2);
  if (length > 4 && check1 > 0 && check2 > 1 && checkPoint2.length > 1) {
    return true;
  } else {
    return false;
  }
};

// Checks for US Phone Number
// 123-123-1234 OR 1231231234

validator.isPhoneNumber = function(input) {
  if (!input) {
    throw new Error("No input included.");
  }
  var length = input.length;
  if (length === 12 || length === 10) {
    input = input.split("");
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numbersOnly = "";
    input.forEach(function(element) {
      if (number.includes(element)) {
        numbersOnly += element;
      }
    });
    if (numbersOnly.length === 10) {
      return true;
    }
  }
  return false;
};

// Returns string with all symbols removed

validator.withoutSymbols = function(input) {
  if (!input) {
    throw new Error("No input included.");
  }
  var newString = "";
  var acceptableCharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
  var input = input.split("");
  input.forEach(function(element) {
    if(acceptableCharacters.includes(element)) {
      newString += element;
    }
  });
  return newString;
};

// Checks the input is a date object

validator.isDate = function(input) {
	if (!input) {
    throw new Error("No input included.");
  }
	var date = new Date(input);
  if(date.toString() != "Invalid Date") {
    return true;
    console.log("true")
  } else {
    return false;
    console.log("false")
  }
};

// Checks that one date is before another

validator.isBeforeDate = function(input, reference) {
	if (!input) {
    throw new Error("No input included.");
  }
 var firstDate = new Date(input);
  var secondDate = new Date(reference);
  if(firstDate < secondDate) {
    return true;
  } else {
    return false;
  }
};

// Checks that one date is after another

validator.isAfterDate = function(input, reference) {
	if (!input) {
    throw new Error("No input included.");
  }
  var firstDate = new Date(input);
  var secondDate = new Date(reference);
  if(firstDate > secondDate) {
    return true;
  } else {
    return false;
  }
};

// Checks that a date entered is before today

validator.isBeforeToday = function(input) {
	if (!input) {
    throw new Error("No input included.");
  }
	var date = new Date(input);
  var today = new Date();
  if(date < today) {
    return true;
  } else {
    return false;
  }
};

// Checks that a date entered is after today

validator.isAfterToday = function(input) {
	if (!input) {
    throw new Error("No input included.");
  }
	var date = new Date(input);
  var today = new Date();
  if(date > today) {
    return true;
  } else {
    return false;
  }
};

// Checks if the input is empty

validator.isEmpty = function(input) {
  var empty = true;
  if (input !== null) {
    input = input.split("");
    input.forEach(function(element) {
      if (element !== " ") {
        empty = false;
      }
    })
  } else {
    empty = false;
  }
  return empty;
};

// Checks that at least one of words exist inside input

validator.contains = function(input, words) {
  if (typeof words === "string") {
    var words = [words];
  }
  var wordsLength = words.length;
  var punctuation = [",", ".", ":", ";", "-", "!", "-", "(", ")", "?", "&", "/", "\"", "[", "]", "|", "$", "@", "#", "'"];
  var pLength = punctuation.length;
  var newString = "";
  for (var i = 0; i < pLength; i++) {
    while (input.indexOf(punctuation[i]) !== -1) {
      var input = input.replace(punctuation[i], " ");
    }
  }
  newString = input.split(" ");
  var exist = false;
  for (var a = 0; a < wordsLength; a++) {
    if (newString.indexOf(words[a]) > -1) {
        exist = true;
    }
  }
  return exist;
};

// Checks that none of the words exist in input

validator.lacks = function(input, words) {
  if (typeof words === "string") {
    var words = [words];
  }
  var wordsLength = words.length;
  var punctuation = [",", ".", ":", ";", "-", "!", "-", "(", ")", "?", "&", "/", "\"", "[", "]", "|", "$", "@", "#", "'"];
  var pLength = punctuation.length;
  var newString = "";
  for (var i = 0; i < pLength; i++) {
    while (input.indexOf(punctuation[i]) !== -1) {
      var input = input.replace(punctuation[i], " ");
    }
  }
  newString = input.split(" ");
  var exist = true;
  for (var a = 0; a < wordsLength; a++) {
    if (newString.indexOf(words[a]) > -1) {
        exist = false;
    }
  }
  return exist;
};

// Checks that the input is composed of inputings

validator.isComposedOf = function(input, inputings) {

};

// Returns if input is less than or equal to n

validator.isLength = function(input, n) {
  var length = input.length;
  if(length <= n) {
    return true;
  } else {
    return false;
  }
};

// Returns if input is greater than or equal to n

validator.isOfLength = function(input, n) {
  var length = input.length;
  if(length >= n) {
    return true;
  } else {
    return false;
  }
};


validator.characterCount = function(input, n) {
  var length = input.length;
  if(length = n) {
    return true;
  } else {
    return false;
  }
};

validator.countWords = function(input) {
  var punctuation = [",", ".", ":", ";", "-", "!", "-", "(", ")", "?", "&", "/", "\"", "[", "]", "|", "$", "@", "#", "'"];
  var pLength = punctuation.length;
  var newString = "";
  for (var i = 0; i < pLength; i++) {
    while (input.indexOf(punctuation[i]) !== -1) {
      var input = input.replace(punctuation[i], " ");
    }
  }
  newString = input.split(" ");
  return newString.length;
};

validator.lessWordsThan = function(input, n) {
  var punctuation = [",", ".", ":", ";", "-", "!", "-", "(", ")", "?", "&", "/", "\"", "[", "]", "|", "$", "@", "#", "'"];
  var pLength = punctuation.length;
  var newString = "";
  for (var i = 0; i < pLength; i++) {
    while (input.indexOf(punctuation[i]) !== -1) {
      var input = input.replace(punctuation[i], " ");
    }
  }
  newString = input.split(" ");
  var finalLength = newString.length;
  if(finalLength <= n){
  	return true;
  } else {
  	return false;
  }
};

validator.moreWordsThan = function(input, n) {
 var punctuation = [",", ".", ":", ";", "-", "!", "-", "(", ")", "?", "&", "/", "\"", "[", "]", "|", "$", "@", "#", "'"];
  var pLength = punctuation.length;
  var newString = "";
  for (var i = 0; i < pLength; i++) {
    while (input.indexOf(punctuation[i]) !== -1) {
      var input = input.replace(punctuation[i], " ");
    }
  }
  newString = input.split(" ");
  var finalLength = newString.length;
  if(finalLength >= n){
  	return true;
  } else {
  	return false;
  }
};

// Checks that string is between floor and ceil

validator.isBetween = function(input, floor, ceil) {
	if(input >= floor && input <= ceil) {
		return true;
	} else {
		return false;
	}
};

// Checks that input is Alphanumeric

validator.isAlphanumeric = function(input) {
  if (!input) {
    throw new Error("No input included.");
  }
  var alphanumeric = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];
  var alphaLength = alphanumeric.length;
  var brokenLength = input.length;
  for (var a = 0; a < brokenLength; a++) {
    var isAlpha = false;
    for (var b = 0; b < alphaLength; b++) {
      if (alphanumeric[b] === input[a].toLowerCase()) {
        isAlpha = true;
      }
    }
    if (isAlpha === false) {
      break;
    }
  }
  return isAlpha;
};

validator.isCreditCard = function(input) {
  var newArray = input.split("");
  var newArrayLength = newArray.length;
  var alphanumeric = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var alphaLength = alphanumeric.length;
  if ((newArrayLength === 19 && newArray[4] === "-" && newArray[9] === "-" && newArray[14] === "-") || (newArray.length === 16)) {
    if (newArrayLength === 19) {
      newArray.splice(14, 1);
      newArray.splice(9, 1);
      newArray.splice(4, 1);
    }
    for (var a = 0; a < newArrayLength; a++) {
      var checked = false;
      for (var b = 0; b < alphaLength; b++) {
        if (newArray[a] === alphanumeric[b]) {
          checked = true;
        }
      }
      if (checked === false) {
        return false;
      }
      return checked;
    }
  } else {
    return false;
  }
};

validator.isHex = function(input) {
  var validHex = false;
  if(input[0] === '#' && (input.length === 4 || input.length === 7)) {
    var allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', '#'];
    validHex = true;
    input = input.toLowerCase().split('');
    input.forEach(function(element) {
        if (allowedChars.indexOf(element) === -1) {
            validHex = false;
        }
    });
  }
  return (validHex) ? true : false;
};

// Check if string is a proper rgb string

validator.isRGB = function(input) {
  input = validator.removeWhiteSpace(input);
  if ((input.substr(0, 4).toLowerCase() === "rgb(") && (input.substr(-1) === ")")) {
    var startPoint = input.indexOf("(") + 1;
    var endPoint = input.indexOf(")");
    var inner = input.slice(startPoint, endPoint);
    inner = inner.split(",");
    var innerLength = inner.length;
    if (innerLength !== 3) {
      return false;
    }
    for (var a = 0; a < innerLength; a++) {
      if (!validator.isBetween(inner[a], 0, 255)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

validator.isHLA = function(input) {
  input = validator.removeWhiteSpace(input);
  if ((input.substr(0, 4).toLowerCase() === "hla(") && (input.substr(-1) === ")")) {
    var startPoint = input.indexOf("(") + 1;
    var endPoint = input.indexOf(")");
    var inner = input.slice(startPoint, endPoint);
    inner = inner.split(",");
    var innerLength = inner.length;
    if (innerLength !== 3) {
      return false;
    }
    if ((!validator.isBetween(inner[0], 0, 360)) || (!validator.isBetween(inner[1], 0, 255)) || (!validator.isBetween(inner[2], 0, 1))) {
        return false;
      }
    return true;
  } else {
    return false;
  }
};

validator.isColor = function(input) {
  if(validator.isHex(input) || validator.isRGB(input) || validator.isHLA(input)) {
    return true;
  } else {
    return false;
  }
};

// Checks that the string is trimmed, no leading or trailing whitespace or multiple spaces

validator.inputrimmed = function(input) {
	if(input[0] === " " || input.slice(-1) === " " || input.indexOf("  ") >= 0) {
		return false;
	} else {
		return true;
	}
};

validator.removeWhiteSpace = function(input) {
  while (input.indexOf(" ") > 0) {
    input = input.replace(" ", "");
  }
  return input;
};


// TOGGLE CLASS BASED ON BOOLEAN VALUE

function toggleClass(what, tf, event, firstClass, secondClass) {
  if(tf) {
    what.classList.add(firstClass);
    what.classList.remove(secondClass);
  } else { 
    what.classList.add(secondClass);
    what.classList.remove(firstClass);
    if(event) {
      event.preventDefault();
    };
  }
}

// CHECK THAT INPUT VALUE IS NOT EMPTY AND A DATE OBJECT

function checkEmptyAndDate(input, e) {
  if( (validator.isEmpty(input.value)) || !(validator.isDate(input.value)) ) {
    toggleClass(input, false, e);
  } else if(validator.isDate(input.value)) {
    toggleClass(input, true);
  }
}

// CHECK THAT INPUT VALUE IS NOT EMPTY`

function checkNotEmpty(input, e) {
  if (validator.isEmpty(input.value)) {
    toggleClass(input, false, e);
  } else {
    toggleClass(input, true);
  }
}

// CHECK THAT INPUT VALUE IS NOT EMPTY AND GREATER THAN A CERTAIN AMOUNT OF WORDS

function checkEmptyAndLengthGreater(input, length, e) {
  if( (validator.isEmpty(input.value)) || !(validator.moreWordsThan(input.value, length)) ) {
    toggleClass(input, false, e);
  } else if(validator.lessWordsThan(input.value, length)) {
    toggleClass(input, true);
  }
}

// CHECK THAT INPUT VALUE IS NOT EMPTY AND CHARACTER COUNT IS GREATER THAN A CERTAIN AMOUNT

function checkEmptyAndCharacterLengthGreater(input, length, e) {
  if( (validator.isEmpty(input.value)) || (!validator.isOfLength(input.value, length)) ) {
    toggleClass(input, false, e);
  } else if(validator.isOfLength(input.value, length)) {
    toggleClass(input, true);
  }
}

// CHECK THAT INPUT VALUE IS NOT EMPTY AND A CERTAIN AMOUNT OF CHARACTERS

function checkEmptyAndLengthIs(input, length, e) {
  if( (validator.isEmpty(input.value)) || !(validator.characterCount(input.value, length)) ) {
    toggleClass(input, false, e);
  } else if(validator.characterCount(input.value, length)) {
    toggleClass(input, true);
  }
}

// CEHCK THAT INPUT VALUE IS NOT EMPTY AND AN EMAIL STRING

function checkEmptyAndEmail(input, length, e) {
  if( (validator.isEmpty(input.value)) || !(validator.isEmailAddress(input.value)) ) {
    toggleClass(input, false, e);
  } else if(validator.isEmailAddress(input.value)) {
    toggleClass(input, true);
  }
}