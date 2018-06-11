var utilities = {};

utilities.isArray = Array.isArray || function(arr) {

 return Object.prototype.toString.call(arr) === '[object Array]';

};

utilities.by = function(list, n, callback) {
  var listLength = list.length;
	for(var i = 0; i < listLength; i+=n) {
			callback(list[i]);
	}
};

utilities.keys = function(pass) {
  return(Object.keys(pass));
};


utilities.values = function(pass) {
  return(Object.values(pass));
};

utilities.pairs = function(pass) {
  var pairs = [];
  var length = Object.keys(pass).length;
  for(var i = 0; i < length; i++) {
    pairs.push(Object.keys(pass)[i]);
    pairs.push(Object.values(pass)[i]);
  }
  return pairs;
};

utilities.shuffle = function(array) {
	for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
	return array;
};

utilities.pluralize = function(n, word, pluralWord) {
  if( n === 1) {
    return word;
  } else {
    if(pluralWord) {
      return pluralWord;
    } else {
      return word + "s";
    }
  }
};

utilities.toDash = function(input) {
  
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  input = input.split("");
  var mod = [];
  input.forEach(function(element) {
    if(upper.indexOf(element) > -1) {
        mod.push("-" + element.toLowerCase());
    } else {
      mod.push(element);
    }
  });
  return mod.join("");

};
    
utilities.toCamel = function(string) {
  var mod = [];
  var newStr = string.split("");
  for(var i = 0; i < newStr.length; i++) {
    if(newStr[i] === "-") {
      i++;
      mod += newStr[i].toUpperCase();
    } else {
      mod += newStr[i];
    }
  }
  return mod;
};

utilities.has = function(obj, search) {
  var values = utilities.values(obj);
  if(values.indexOf(search.toString()) > -1) {
    return true;
  } else {
    return false;
  }
};



utilities.pick = function(obj, keys) {
  var pairs = [];
  var length = keys.length;
  for(var i = 0; i < length; i++) {
    if(Object.keys(obj).indexOf(keys[i]) > -1) {
      pairs.push(Object.keys(obj)[i] + ": " + Object.values(obj)[i]);
    }
  }
  return pairs;
};

// Example for toDash and toCamel

// console.log(utilities.toDash("yeahThisIsIt"));
// console.log(utilities.toDash("yeah-this-is-it"));


// Example for utilities.key & utilities.values & utilities.pairs & utilities.has & utilities.pick

// setInterval(randomNumber,1000);

var newObject = {
  name: "Jacob",
  age: "27",
  state: "arizona"
}

// console.log(utilities.pairs(newObject));
// console.log(utilities.keys(newObject));
// console.log(utilities.values(newObject));
// console.log(utilities.has(newObject, 27));
// console.log(utilities.pick(newObject, ["name","state"]));

// Example for utilities.by

// var longlist = [1,2,3,4,5,6,7,8];

// utilities.by(longlist, 2, function(item) {
//   console.log(item);
// });
// 
// 

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////// DOM UTILITY ///////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// This should be used to find the nearest ancestor that matches any CSS selector with 
// respect to a given element, and it should take two arguments: the first should be 
// the element to start from (as a Node) and the second should be the selector that 
// should be used to match the ancestor (as a string). It should return the matching 
// ancestor if found or null if no matching ancestor was found.

utilities.getAncestorBySelector = function(start,ancestor) {
  // check if the starting element is valid
  if(!start) {
    console.log("Blocked! - Invalid Element")
    return;
  }
  // value that is set to change
  var ancestorFound = false, currentParent = start;
  while(currentParent.parentElement !== null && ancestorFound == false) {
    currentParent = currentParent.parentElement;
    if(currentParent.matches(ancestor)) {
      ancestorFound = true;
    }
  }
  if(currentParent.parentElement == null) {
    console.log("Ancestor Not Found");
    return;
  } else {
    return(currentParent);
  }
};

////////////     utilities.getAncestorBySelector     ////////////////
/////////////////////////     TEST     //////////////////////////////
// utilities.getAncestorBySelector(document.querySelector("a"), "k8");
// utilities.getAncestorBySelector(document.querySelector("a"), "h2");
// utilities.getAncestorBySelector(document.querySelector("p"), "div");
// utilities.getAncestorBySelector(document.querySelector("as2"), "div");

// This method should be used to select a selection of the siblings of an element. 
// It can accept the element to select the siblings of as the first argument, 
// and a CSS selector to filter the siblings by as the second argument. It should 
// return a collection of zero or more matching elements, excluding the element 
// passed as the first argument.

utilities.getSiblingsBySelector = function(start, filter) {
  // check if the starting element is valid
  if(!start) {
    console.log("Blocked! - Invaled Element")
    return;
  }
  var content = [];
  var length = start.parentElement.children.length;
  for(var i = 0; i < length; i++) {
    if(start.parentElement.children[i].matches(filter)){
      content.push(start.parentElement.children[i]);
    }
    
  }
  if(content == []) {
    console.log("No Matches Found");
  } else {
    console.log(content);
  }
};

////////////     utilities.getSiblingsBySelector     ////////////////
/////////////////////////     TEST     //////////////////////////////
// utilities.getSiblingsBySelector(document.querySelector("article h2"),"p");

// This should be used to insert a new node after an existing node in the DOM and 
// should take two arguments: the node to be inserted and the node to insert the 
// new node after. It should return the element that was inserted.

utilities.insertAfter = function(toInsert, insertAfter) {
  var parent = insertAfter.parentNode;
  parent.insertBefore(toInsert, insertAfter.nextSibling);
  console.log(toInsert);
};

var newElement = document.createElement('div').appendChild(document.createTextNode('Crazy stuff, huh?!'));

/////////////////     utilities.insertAfter     /////////////////////
/////////////////////////     TEST     //////////////////////////////

// utilities.insertAfter(newElement, document.querySelector("li"));

// This function should be used to swap the position of two DOM elements and should 
// take the two elements to swap as arguments. It should return true if the swap was 
// successful and false otherwise.

utilities.swapElements = function(elOne, elTwo) {
  var elOneDup = elOne.cloneNode(true);
  var elTwoDup = elTwo.cloneNode(true);
  var elOneParent = elOne.parentNode;
  var elTwoParent = elTwo.parentNode;
  elOneParent.insertBefore(elTwoDup, elOne);
  elTwoParent.insertBefore(elOneDup, elTwo);
  elOne.remove();
  elTwo.remove();
};

/////////////////     utilities.swapElements     ////////////////////
/////////////////////////     TEST     //////////////////////////////
// utilities.swapElements(document.querySelector("header"),document.querySelectorAll("li")[2]);

// This function should be used to remove a number of elements from the page entirely.
//  It should accept a CSS selector as an argument and return the elements that were
//   removed as an array.

utilities.removeAll = function(toRemove) {
  var elements = document.querySelectorAll(toRemove);
  var storage = [];
  elements.forEach(function(current){
    storage.push(current.cloneNode(true));
    current.remove();
  });
  console.log(storage);
};

///////////////////     utilities.removeAll     /////////////////////
/////////////////////////     TEST     //////////////////////////////

// utilities.removeAll("h2");
// utilities.removeAll("li");
// utilities.removeAll("article");
// utilities.removeAll("header");
