document.addEventListener("DOMContentLoaded",function(){

  var validator = {};

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


  /*-----------------------------------------------------------------

  GET SIZING AND CREATE OBJECT OUT OF ELEMENT SIZING PROPERTIES
  FOR THIS PROJECT WE ARE GATHERING HEIGHT, TOP, AND BOTTOM
    HEIGHT - THE ELEMENTS HEIGHT DIMENSIONS IN PIXELS
    TOP AND BOTTOM - REPRESENTS THAT POSITION ON THE ELEMENT RELATIVE TO THE TOP OF THE VIEWPORT

  -----------------------------------------------------------------*/

  function getSizing(el) {
    var shape = {};
    var rect = el.getBoundingClientRect();
    shape.height = rect.height;
    shape.top = rect.top;
    shape.bottom = rect.bottom;
    return shape;
  }

  /*-----------------------------------------------------------------


  -----------------------------------------------------------------*/

  function updateTime(readingSpeed, parentHeight, scrollHeight) {
    var current = parseInt(timeSpy.style.top, 10);
    var whole = parentHeight - scrollHeight;
    var percentage = current / whole;
    var updatePercent = wordCount - (wordCount * percentage);
    minutes.innerHTML = calculateTime(updatePercent, "minutes", readingSpeed);
    seconds.innerHTML = calculateTime(updatePercent, "seconds", readingSpeed);
  }

  /*-----------------------------------------------------------------

  DETERMINES WHETHER IT WILL BE RETURNING MINUTES OR SECONDS AND
  CALCULATES HOW MUCH TIME TO RETURN

  -----------------------------------------------------------------*/

  function calculateTime(wordCount, input, readingRate) {
    var minutes = wordCount / readingRate;
    if (input === "minutes") {
      var minutesWithSecondsRemoved = minutes - (minutes % 1);
      return minutesWithSecondsRemoved;
    }
    if (input === "seconds") {
      var second = (minutes % 1) * 100;
      var secondsWithMinutesRemoved = Math.floor(second * 0.6);
      if(secondsWithMinutesRemoved < 0) {
        secondsWithMinutesRemoved = 0;
      }
      return secondsWithMinutesRemoved;
    }
  }

  /*-----------------------------------------------------------------

  SET INITIAL SELECTOR VARIABLES
  THESE ELEMENTS WILL NOT CHANGE
  THEY WILL BE SET THE SECOND THE PAGE LOADS

  -----------------------------------------------------------------*/

  var timeSpy = document.getElementById("scrollspy");
  var minutes = timeSpy.querySelector(".minutes");
  var seconds = timeSpy.querySelector(".seconds");
  var body = document.body;
  var content = timeSpy.parentElement;
  var parentRect = getSizing(content);
  var scrollRect = getSizing(timeSpy);
  var wordCount = validator.countWords(content.innerText);
  var windowMiddle = (window.innerHeight / 2);
  var halfScrollHeight = scrollRect.height / 2;
  var windowMiddleMinusScroll = windowMiddle - halfScrollHeight;
  var windowMiddleAddScroll = windowMiddle + halfScrollHeight;

  /*-----------------------------------------------------------------

  SET READING SPEED
  SET VALUE OF readingSpeed TO EITHER "slow", "normal", "fast",
  READING SPEED DEFAULTS TO NORMAL IF NONE ARE SELECTED

  -----------------------------------------------------------------*/
  var readingSpeed = "fast";

  if(readingSpeed === "slow") {
    var wordsPerMinute = 235;
  } else if (readingSpeed ==="fast") {
    var wordsPerMinute = 315;
  } else {
    var wordsPerMinute = 275;
  }

  function updatePosition(){
    var parentRect = getSizing(content);
    var scrollRect = getSizing(timeSpy);
    var fullPage = body.scrollHeight;
    

    // From top of the page to the bottom of the parent
    var fullParent = content.offsetTop + parentRect.height;

    var halfScrollHeight = scrollRect.height / 2;


    // console.log(parentRect.height);
    // console.log(parentRect.top);
    if(parentRect.top < windowMiddleMinusScroll) {
      // console.log(parentRect.top);
    }

    // var calc = parentRect.height;
    // var calc = content.offsetTop;
    // // I am going to find the percentage by getting the current scroll distance
    // var top = content.offsetTop;
    // var bottom = content.offsetTop + parentRect.height;
    // console.log(top + " - " + bottom + " - " + window.pageYOffset);
    // if(window.pageYOffset > top) {
    //   console.log("%" + (100*((window.pageYOffset - top) / parentRect.height)).toFixed(2));
    // }    
    // console.log("parentRect.top - " + parentRect.top);
    // console.log("parentRect.bottom - " + parentRect.bottom);
    // console.log("parentRect.height - " + parentRect.height);
    // console.log("fullPage - " + fullPage); 
    // console.log("fullParent - " + fullParent); 
    // console.log("halfScrollHeight - " + halfScrollHeight); 
    
    // If top of the content is above the middle of the page AND current scroll position is less then current window height
    
    if ((content.offsetTop < windowMiddleAddScroll) && window.pageYOffset < window.innerHeight) {
      console.log(window.innerHeight);
      // This is firing when the timespy is above the middle of the page because the
      // parent container is close to the top
      // console.log("content.offsetTop - " + content.offsetTop + " - windowMiddleMinusScroll - " + windowMiddleMinusScroll +  " - window.pageYOffset - " + window.pageYOffset + " - window.innerHeight - " + window.innerHeight);
      console.log("1");
      // console.log("timeSpy.style.top - " + timeSpy.style.top + " - window.pageYOffset - " + window.pageYOffset + " - window.innerHeight" + window.innerHeight + " - halfScrollHeight - " + halfScrollHeight + " - windowMiddleMinusScroll" + windowMiddleMinusScroll + " - parentRect.top - " + parentRect.top);
            // 1.75                        0                1006                         67                436                       50
            // 1444                   997                  1006                          67                436                       -947
      //  the top of timespy should be ( current scroll distance down - height of browser display window ) plus half of the height scroll
       // timeSpy.style.top = (((window.pageYOffset - window.innerHeight) * (windowMiddleMinusScroll / window.innerHeight)) + halfScrollHeight) + windowMiddleMinusScroll - parentRect.top + "px";
       // console.log(windowMiddleMinusScroll - parentRect.top);
       // console.log((window.pageYOffset - window.innerHeight) * .45);
       // console.log((window.pageYOffset - window.innerHeight)* 0.45);
       //                     current scroll position minus window height
      // timeSpy.style.top = (((window.pageYOffset - window.innerHeight) * 0.45) + halfScrollHeight) + windowMiddleMinusScroll - parentRect.top + "px";
      timeSpy.style.top = "0px";
      // timeSpy.style.top = "0px";
    }

    if (((((scrollRect.top < windowMiddleMinusScroll) && (scrollRect.bottom <= parentRect.bottom) && (parentRect.bottom > windowMiddle)) || parentRect.top < windowMiddleMinusScroll && (parentRect.bottom > windowMiddleAddScroll) && !(window.pageYOffset < window.innerHeight && parentRect.top < windowMiddle && content.offsetTop < windowMiddleMinusScroll)))) {
      if (((((fullPage - fullParent) < window.innerHeight) && (window.pageYOffset < fullPage - (window.innerHeight * 2)))) || (fullPage - fullParent) > window.innerHeight) {
        if(((content.offsetTop < windowMiddleMinusScroll) && !(window.pageYOffset < window.innerHeight)) || !(content.offsetTop < windowMiddleMinusScroll)) {
          // This is firing when the timespy is in the middle of the page and still have space underneath to scroll
          // 
          // This is ALSO firing when the timespy is at the bottom of the parent container and scrolling up the page
          timeSpy.style.top = windowMiddleMinusScroll - parentRect.top + "px";
          console.log("2");
        }
      }
    }

    if (parentRect.top > windowMiddleMinusScroll) {
      timeSpy.style.top = 0;
      // This is firing when the content is below the middle of the page
      // It changes when time starts calculating 
      console.log("3");
    }

    if(((fullPage - fullParent) < window.innerHeight) && (window.pageYOffset > fullPage - (window.innerHeight * 2))) {
      // This is firing when the timespy has to go below the middle of the page because
      // the parent container is so close to the bottom of the page
      timeSpy.style.top = window.pageYOffset + windowMiddleMinusScroll - content.offsetTop + ((-(fullPage - window.pageYOffset - (window.innerHeight * 2)))* 0.40) + "px";
      console.log("4");
    }

    if(parentRect.bottom <= windowMiddleAddScroll) {
      // This is firing when the timespy is above the middle of the page as the user scrolls up
      console.log("5");
      timeSpy.style.top = parentRect.height - scrollRect.height + "px";
    }
  }


  window.addEventListener("scroll", function() {
    updatePosition();
    updateTime(wordsPerMinute, parentRect.height, scrollRect.height);
  });

  window.addEventListener("DOMContentLoaded", function() {
    updatePosition();
    updateTime(wordsPerMinute, parentRect.height, scrollRect.height);
  });

});