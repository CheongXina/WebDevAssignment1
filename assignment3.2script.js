
var equation;
var result;

function send() {
  var inputElement = document.getElementById("myInput");
  var inputValue = inputElement.value;
  result = eval(inputValue);
  document.getElementById("result").innerHTML = result;
}
