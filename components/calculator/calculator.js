var buttons = document.querySelectorAll("button");
var inputField = document.querySelector("input");

var buildEvents = function(array) {
  buttons.forEach(function(button){
    button.addEventListener("click", function() {
      var inputFieldContents = inputField.value;
      if(this.innerHTML === "C") {
        inputField.value = "";
      } else if(this.innerHTML ==="Del") {
        inputField.value = inputFieldContents.slice(0, -1);
      } else if (this.innerHTML === "=") {
        var results = eval(inputFieldContents);
        inputField.value = results;
      } else if (this.innerHTML === "÷") {
        inputField.value = inputFieldContents + "/";
      } else if (this.innerHTML === "X") {
        inputField.value = inputFieldContents + "*";
      } else {
        inputField.value = inputFieldContents + this.innerHTML;
        }
    });
  });
};

buildEvents(buttons);