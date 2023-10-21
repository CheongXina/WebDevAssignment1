
document.getElementById("myInput").addEventListener("keyup", function(event) { //change input per keystroke entered
    var inputValue = event.target.value;
    var displayInput = document.getElementById("displayInput");
    displayInput.textContent = (parseInt(myInput.value)*0.45).toFixed(1);
  });

